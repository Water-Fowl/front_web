<?php
	include($_SERVER['DOCUMENT_ROOT'].'/template.php');
?>
<!doctype html>
<html lang="ja">
	<head>
		<?php head(); ?>
	</head>
	<body>
		<?php bodyHeader(); ?>
		<article>
		<section class="text-white">
			<div class="section-padding">
				<h3 id="members">Members</h3>
				<table class="margin-center"><tr>
				<?php
					$members = glob($_SERVER['DOCUMENT_ROOT'].'/member/*.xml');
					rsort($members);
					foreach($members as $filename){
						$member = simplexml_load_file($filename);
						?>
						<td><a href="?<?php echo http_build_query(['ref' => basename($filename, '.xml')]); ?>#members" class="a-disabled"><div style="margin: 0 0.5em; ">
							<img src="<?php echo $member->img; ?>" class="avatar" style="height: 5em;" onmouseover="$(this).attr('src', '<?php echo $member->imghover; ?>'); " onmouseout="$(this).attr('src', '<?php echo $member->img; ?>'); "><br>
							<span><?php echo $member->name; ?></span>
						</div></a></td>
						<?php
					}
				?>
				</tr></table>
				<?php
					if (isset($_GET['ref'])){
						$filename = $_SERVER['DOCUMENT_ROOT'].'/member/'.basename($_GET['ref']).'.xml';	// basename()->他ディレクトリを参照させない
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
			</div>
		</section>
		</article>
		<?php bodyFooter(); ?>
	</body>
</html>
