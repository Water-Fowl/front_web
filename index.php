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
		<article class="bg-light">
		<section id="members" class="">
			<div class="section-padding">
				<h3>Members</h3>
				<table class="margin-center"><tr>
				<?php	/* メンバーのリストを出力する */
					$members = glob($_SERVER['DOCUMENT_ROOT'].'/member/*.xml');
					//rsort($members);
					foreach($members as $filename){
						$member = simplexml_load_file($filename);
						?>
						<td><a href="<?php echo basename($filename); ?>" class="member-button a-disabled"><div style="margin: 0 0.5em; ">
							<img src="<?php echo $member->img; ?>" class="avatar" style="height: 5em;" onmouseover="$(this).attr('src', '<?php echo $member->imghover; ?>'); " onmouseout="$(this).attr('src', '<?php echo $member->img; ?>'); "><br>
							<span><?php echo $member->name; ?></span>
						</div></a></td>
						<?php
					}
				?>
				</tr></table>
				<br>
				<br>
				<div class="row">
					<div class="col-2"></div>
					<div id="member-detail"></div>	<!-- メンバーの詳細情報 -->
					<div class="col-2"></div>
				</div>
				<script>	/* Memberの詳細情報切り替えプログラム */
					$(function(){
						$('.member-button').click(function(e){
							filename = '/member/'+$(this).attr('href');
							$.get(filename, {}, function(res, stat, xhr){
								item_html = '';
								$(res).find('item').each(function(){
									item_html += $(this).find('name').html()+': '+$(this).find('value').html()+'<br>';
								});

								$('#member-detail').html(`
									<img src="`+$(res).find('imglarge').html()+`" class="rounded" style="margin-left: 2em; float: right; width: 40%; ">
									<span class="text-muted">`+$(res).find('position').html()+`</span>
									<h4>`+$(res).find('name').html()+`</h4>
									<p style="position: relative; left: 1em; ">`+$(res).find('article').html()+`</p>
									<span class="text-muted">`+item_html+`</span>
								`);
								$('#member-detail').attr('class', 'col-8 text-left animated fadeIn');
							}, 'xml');
								$('#member-detail').attr('class', 'col-8 text-left');
							e.preventDefault();
						});
					});
				</script>
			</div>
			<div class="section-padding" style="padding-top: 0; ">
				<h3 id="news">News</h3>
				<?php newsList(3, 0, true); ?>
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
		<section id="about" class="bg-light">
			<div class="section-padding">
				<h3>About</h3>
				<div class="row">
					<div class="col-2"></div>
					<div class="col-8">
						<table class="table table-striped">
							<tr><th>社名</th><td>株式会社WaterFowl</td></tr>
							<tr><th>設立</th><td>2017年7月28日</td></tr>
								<tr><th>所在地</th><td>〒150-0031 東京都渋谷区桜ヶ丘4-17 Portal Apartment&Art Point 703</td></tr>
							<tr><th>代表者</th><td>池田吉来</td></tr>
							<tr><th>資本金</th><td>27,000,000円（資本準備金含む）</td></tr>
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
			<div class="section-padding">
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
