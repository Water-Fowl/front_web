<?php
	include($_SERVER['DOCUMENT_ROOT'].'/template.php');
?>
<!doctype html>
<html lang="ja">
	<head>
		<?php head([
			'title' => 'Recruit',
		]); ?>
	</head>
	<body>
		<?php bodyHeader(); ?>
		<article class="bg-light">
		<section class="">
			<div style="padding-top: 20vh; padding-bottom: 20vh; ">
				↓Wantedlyから拝借しました<br>
				<img src="/img/recruit.jpg" class="rounded"><br>
				<br>
				<h1 class="" style="display: inline-block; ">Recruit</h1>
				<span>　採用について</span>
				<div class="row">
					<div class="col-2"></div>
					<div class="col-8">
						<p>WaterFowlは、こんな会社です。<br>
						(まず、会社の雰囲気を伝える)
					</div>
					<div class="col-2"></div>
				</div>
			</div>
		</section>
		</article>
		<?php bodyFooter(); ?>
	</body>
</html>
