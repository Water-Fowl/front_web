<!doctype html>
<html lang="ja">
	<head>
		<link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
		<style>
			@import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
			@import url(http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext);

			body{
				font-family: 'Noto Sans JP', Arial, Meiryo, sans-serif;
			}
			.wrapper{
				overflow: hidden;
			}
			h1, h2, h3, h4, p{
				font-family: 'Lato', Arial, Meiryo, sans-serif;
			}
			h1{
				font-size: 5vw;
				font-weight: bold;
			}
			h2{
				font-size: 2.5vw;
				color: burlywood;
			}
			h3{
				font-weight: bold;
			}
			header{
				position: relative;
				background-image: url(header.jpg);
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
				text-align: center;
				height: 150vh;
			}
			.header-darkskelton{
				background-color: rgba(0, 0, 0, 0.6);
				height: 33.33%;
				padding-top: 30vh;
			}
			.header-gradient{
				background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1.0));
				height: 33.33%;
			}
			.header-bottom{
				padding-top: 15vh;
				background: black;
				height: 33.33%;
			}
			section{
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
				text-align: center;
			}
			.bg-darkskelton{
				background-color: rgba(0, 0, 0, 0.6);
				height: 100%;
			}
			.section-padding{ padding: 4em 0; }
			.footer{
				width: 100%;
				padding: 1em 0;
				background-color: #f5f5f5;
			}
		</style>
	</head>
	<body>
		<div class="wrapper">
		<nav class="navbar bg-primary navbar-expand-lg navbar-dark">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#"><img src="waterfowl.png" alt="Water Fowl" style="height: 1em; "></a>←横長のバナーが欲しい
			</div>
			<ul class="navbar-nav">
				<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
    	   		<div class="collapse navbar-collapse" id="navmenu">
						<li><a class="nav-link" href="#vision">Vision</a></li>
						<li><a class="nav-link" href="#service">Service</a></li>
						<li><a class="nav-link" href="#about">About</a></li>
						<li><a class="nav-link" href="#contact">Contact</a></li>
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
			<div id="vision" class="header-bottom">
				<h3>???</h3>
			</div>
		</header>
		<article>
		<section id="service" class="text-white" style="background-image: url(service.jpg); ">
			<div class="bg-darkskelton section-padding">
				<h3>Service</h3>
				<h4>Spolyzer</h4>
				<p>-戦略的成長を最大化するスポーツ分析サービス-</p>
				<img src="spolyzer.png" alt="Spolyzer" width="128px">
			</div>
		</section>
		<section id="about" class="card text-white border-dark">
			<div class="card-body section-padding">
				<h3>About</h3>
				<div class="row">
					<div class="col-2"></div>
					<div class="col-8">
						<table class="table table-striped">
							<tr><th>社名</th><td>株式会社WaterFowl</td></tr>
							<tr><th>設立</th><td>2017年7月28日</td></tr>
								<tr><th>所在地</th><td>〒116-0013 東京都荒川区西日暮里1-16-15</td></tr>
							<tr><th>代表者</th><td>池田吉来</td></tr>
							<tr><th>資本金</th><td>200万円</td></tr>
							<tr><th style="border-bottom: none; ">事業内容</th><td style="border-bottom: none; ">『Spolyzer』<br>
								スポーツ分析セミナー<br>
								アスリートキャリアコンサルティング<br>
								ITサービス開発コンサルティング
							</td></tr>
						</table>
					<div>
					<div class="col-2"></div>
				</div>
			</div>
		</section>
		<section id="contact">
			<div class="text-white section-padding">
				<h3>Contact</h3>
				<div class="row">
					<div class="col-4"></div>
					<div class="col-4 text-center">
						<form>
							<div class="form-group text-left">
								<label for="input_name">氏名</label>
								<input type="text" class="form-control" id="input_name" placeholder="スポ太郎">
							</div>
							<div class="form-group text-left">
								<label for="input_org">組織名</label>
								<input type="text" class="form-control" id="input_org" placeholder="WaterFowl">
							</div>
							<div class="form-group text-left">
								<label for="input_email">メールアドレス</label>
								<input type="email" class="form-control" id="input_email" placeholder="example@example.co.jp">
							</div>
							<div class="form-group text-left">
								<label for="input_phone">電話番号</label>
								<input type="text" class="form-control" id="input_phone" placeholder="08012345678">
							</div>
							<div class="form-group text-left">
								<label for="input_content">お問い合わせ内容</label>
								<textarea class="form-control" id="input_content" rows="3"></textarea>
							</div>
							<button type="submit" class="btn btn-warning">送信</button>
						</form>
					</div>
					<div class="col-4"></div>
				</div>
			</div>
		</section>
		<section class="bg-primary">
			<div class="section-padding">
				<h3>News</h3>
				<?php
					foreach(glob('news/*.xml') as $filename){
						$news = simplexml_load_file($filename);
				?>
				<span style="display: inline-block; width: 25%; margin: 1em;">
					<div class="card bg-light">
						<div class="card-body text-left">
							<span class="text-muted"><?php echo date('Y M. d', filectime($filename)); ?></span>
							<center>
								<h4><?php echo $news->title; ?></h4>
								<br>
								<?php if (isset($news->header)) echo '<img src="'.$news->header.'" style="width: 80%; ">'; ?>
							</center>
							<p class="text-muted"><?php echo nl2br($news->article); ?></p>
						</div>
					</div>
				</span>
				<?php } ?>
			</div>
		</section>
		</article>
		<footer class="footer bg-secondary text-center">
				<span class="text-muted">©︎WaterFowl Inc.</span>
		</footer>
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
		</div>
	</body>
</html>
