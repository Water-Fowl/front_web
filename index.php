<?php
	include($_SERVER['DOCUMENT_ROOT'].'/template.php');
?>
<!doctype html>
<html lang="ja">
	<head>
		<?php head(); ?>
		<style>
			h3{
				font-weight: bold;
			}
		</style>
	</head>
	<body>
		<?php bodyHeader(); ?>
			<div id="news" class="header-bottom">
				<h3>News</h3>
				<?php newsList(3, 0, true); ?>
			</div>
		<article>
		<section id="members" class="text-white">
			<div class="section-padding bg-darkskelton">
				<h3>Members</h3>
				<table class="margin-center"><tr>
				<?php
					$members = glob($_SERVER['DOCUMENT_ROOT'].'/member/*.xml');
					rsort($members);
					foreach($members as $filename){
						$member = simplexml_load_file($filename);
						?>
						<td><a href="?<?php echo http_build_query(['member' => basename($filename, '.xml')]); ?>#members" class="a-disabled"><div style="margin: 0 0.5em; ">
							<img src="<?php echo $member->img; ?>" class="avatar" style="height: 5em;" onmouseover="$(this).attr('src', '<?php echo $member->imghover; ?>'); " onmouseout="$(this).attr('src', '<?php echo $member->img; ?>'); "><br>
							<span><?php echo $member->name; ?></span>
						</div></a></td>
						<?php
					}
				?>
				</tr></table>
				<?php
					if (isset($_GET['member'])){
						$filename = $_SERVER['DOCUMENT_ROOT'].'/member/'.basename($_GET['member']).'.xml';	// basename()->他ディレクトリを参照させない
						if (file_exists($filename)){
							$member = simplexml_load_file($filename); ?>
							<br>
							<br>
							<div class="row">
								<div class="col-2"></div>
								<div class="col-8 text-left fadeIn animated">
									<img src="<?php echo $member->imglarge; ?>" style="float: right; width: 50%; ">
									<span class="text-muted"><?php echo $member->position; ?></span>
									<h4><?php echo $member->name; ?></h4>
									<p><?php echo $member->article; ?></p>
									<?php
										foreach($member->item as $item){
											?>
											<span class="text-muted"><?php echo $item->name; ?>: <?php echo $item->value; ?></span><br>
											<?php
										}
									?>
								</div>
								<div class="col-2"></div>
							</div>
						<?php }
					}
				?>
				<!--<table class="margin-center"><tr>
					<td><div class="member-widget" ref="/member/mii.xml"></div></td>
					<td><div class="member-widget" ref="/member/mii2.xml"></div></td>
					<td><a href="news.php"><button type="button" class="btn btn-success" style="border-radius: 50%; font-weight: bold; ">&gt</button></a></td>
				</tr></table>-->
			</div>
		</section>
		<section id="service" class="text-white" style="background-image: url(service.jpg); ">
			<div class="bg-darkskelton section-padding">
				<h3>Service</h3>
				<h4>Spolyzer</h4>
				<p>-戦略的成長を最大化するスポーツ分析サービス-</p>
				<img src="spolyzer.png" alt="Spolyzer" width="128px">
			</div>
		</section>
		<section id="about" class="text-white bg-light">
			<div class="section-padding">
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
						<form id="contact-form" action="send_contact.php" method="post">
							<div class="form-group text-left">
								<label for="input_name">氏名</label>
								<input name="name" type="text" class="form-control" id="input_name" placeholder="スポ太郎">
							</div>
							<div class="form-group text-left">
								<label for="input_org">組織名</label>
								<input name="organization" type="text" class="form-control" id="input_org" placeholder="WaterFowl">
							</div>
							<div class="form-group text-left">
								<label for="input_email">メールアドレス</label>
								<input name="email" type="email" class="form-control" id="input_email" placeholder="example@example.co.jp">
							</div>
							<div class="form-group text-left">
								<label for="input_phone">電話番号</label>
								<input name="telephone" type="text" class="form-control" id="input_phone" placeholder="08012345678">
							</div>
							<div class="form-group text-left">
								<label for="input_content">お問い合わせ内容</label>
								<textarea name="article" class="form-control" id="input_content" rows="3"></textarea>
							</div>
							<button type="submit" class="btn btn-warning">送信</button>
						</form>
					</div>
					<div class="col-4"></div>
				</div>
			</div>
		</section>
		</article>
		<?php bodyFooter(); ?>
	</body>
</html>
