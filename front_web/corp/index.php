<!doctype html>
<html lang="ja">
	<head>
		<link rel="stylesheet" href="https://bootswatch.com/4/slate/bootstrap.min.css">
		<style>
			@import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
			@import url(http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext);

			body{
				font-family: 'Noto Sans JP', Meiryo, Arial, sans-serif;
			}
			h3, h4, p{
				font-family: 'Lato', Meiryo, Arial, sans-serif;
			}
			h3{
				font-weight: bold;
			}
			section{
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;
				text-align: center;
			}
			.section-dark{
				background-color: rgba(0, 0, 0, 0.6);
				height: 100%;
			}
			.section-padding{ padding: 4em 0; }
		</style>
	</head>
	<body>
		<section class="text-white" style="background-image: url(service.jpg); ">
			<div class="section-dark section-padding">
				<h3>Service</h3>
				<h4>Spolyzer</h4>
				<p>-戦略的成長を最大化するスポーツ分析サービス-</p>
				<img src="spolyzer.png" alt="Spolyzer" width="128px">
			</div>
		</section>
		<section class="card text-white border-dark">
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
		<section style="card bg-info">
			<div class="card-body text-white section-padding">
				<h3>Contact</h3>
				<div class="row">
					<div class="col-4"></div>
					<div class="col-4 text-left">
						<form>
							<div class="form-group">
								<label for="input_email">氏名</label>
								<input type="email" class="form-control" id="input_email" aria-describedby="emailHelp" placeholder="スポ太郎">
								<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
							<div class="form-group">
								<label for="input_email">メールアドレス</label>
								<input type="email" class="form-control" id="input_email" aria-describedby="emailHelp" placeholder="example@example.co.jp">
							</div>
						</form>
					</div>
					<div class="col-4"></div>
				</div>
			</div>
		</section>
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
	</body>
</html>
