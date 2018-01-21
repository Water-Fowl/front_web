<?php
	function newsList($n, $i, $isMore = false){	/* Newsリストを出力する */
		?><table class="margin-center"><tr><?php
			$j = 0;
			$isEnd = true;
			$news = glob('news/*.xml');
			rsort($news);
			foreach($news as $filename){
				if ($j++ < $i*$n) continue;

				echo '<td class="news-widget" ref="'.$filename.'"></td>';
				if ($j >= ($i + 1)*$n){
					if ($isMore){?><td><a href="/news.php#news"><button type="button" class="btn btn-primary" style="border-radius: 50%; font-weight: bold; ">&gt</button></a></td><?php }
					$isEnd = false;
					break;
				}
			}
		?></tr></table><?php
		return $isEnd;
	}

	function head($temp){ /* 共通のheadを出力する
                        使い方: head(['title' => 'サイトタイトル', 'description' => 'サイト説明文(任意)', 'keywords' => 'キーワード(任意)']);
                */?> 
		<link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
		<link rel="stylesheet" href="/css/style.css">

		<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
		<script defer src="https://use.fontawesome.com/releases/v5.0.1/js/all.js"></script>
		<script src="/js/news.js"></script>

		<?php if (isset($temp['keywords'])){ ?>
			<meta name=”keywords” content=”<?php echo $temp['keywords']; ?>”>
		<?php } ?>
		<?php if (isset($temp['description'])){ ?>
			<meta name=”description” content=”<?php echo $temp['description']; ?>”>
		<?php } ?>

		<?php if (!isset($temp['title'])) die('titleが指定されていません。'); ?>
		<title><?php echo $temp['title']; ?> ︎| WaterFowl Inc. </title>
	<?php }

	function bodyHeader(){ /* 共通のbody先頭要素（ヘッダー）を出力する */?>
		<div class="wrapper">
		<nav class="navbar navbar-expand-lg navbar-dark" style="position: fixed; width: 100%; z-index: 2; ">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="/"><img src="waterfowl.png" alt="Water Fowl" style="height: 1em; background-color:"></a>
			</div>
			<ul class="navbar-nav">
				<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
    	   		<div class="collapse navbar-collapse" id="navmenu">
						<li><a class="nav-link" href="/#news">News</a></li>
						<li><a class="nav-link" href="/#members">Members</a></li>
						<li><a class="nav-link" href="/#service">Service</a></li>
						<li><a class="nav-link" href="/#about">About</a></li>
						<li><a class="nav-link" href="/#contact">Contact</a></li>
				</div>
			</ul>
		</div>
		</nav>
		<header>
			<div class="header-darkskelton">
				<div class="fadeIn animated" style="animation-delay: 0.25s;">
					<h1 class="">Maximize Human Possibility</h1>
					<h2 class="">-人の可能性を最大化する-</h2>
				</div>
			</div>
			<div class="header-gradient">
			</div>
		</header>
	<?php }

	function bodyFooter(){ /* 共通のbody末尾要素（フッター）を出力する */?>
		<footer class="footer bg-secondary text-center">
				<span class="text-muted">©︎WaterFowl Inc.</span>
		</footer>
		</div>
	<?php }
?>
