<?php
	function newsList($n, $i, $isMore = false){
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

	function head(){ ?>
		<link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
		<link rel="stylesheet" href="/css/style.css">

		<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
		<script defer src="https://use.fontawesome.com/releases/v5.0.1/js/all.js"></script>
		<script src="/js/news.js"></script>
	<?php }

	function bodyHeader(){ ?>
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
					<h1>Maximize Human Possibility</h1>
					<h2>-人の可能性を最大化する-</h2>
				</div>
			</div>
			<div class="header-gradient">
			</div>
		</header>
	<?php }

	function bodyFooter(){ ?>
		<footer class="footer bg-secondary text-center">
				<span class="text-muted">©︎WaterFowl Inc.</span>
		</footer>
		</div>
	<?php }
?>
