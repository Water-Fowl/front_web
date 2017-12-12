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
				<h3 id="news">News</h3>
				<div class="row">
					<div class="col-2"></div>
					<div class="col-8">
				<?php
					if (isset($_GET['i'])) $page_i = (int)$_GET['i'];
					else $page_i = 0;

					$filename = 'news/'.$_GET['ref'].'.xml';
					if (file_exists($filename)){
					$news = simplexml_load_file($filename);
				?>
						<div class="card text-left">
							<div class="card-header">
								<span class="text-muted"><?php echo date('Y M. d', filectime($filename)); ?></span>
								<h3 class="card-title"><?php echo $news->title; ?></h3>
							</div>
							<div class="card-body">
								<?php if (isset($news->header)) echo '<img src="'.$news->header.'" style="width: 25%; float: right; ">'; ?>
								<p class=""><?php echo nl2br($news->article); ?></p>
							</div>
						</div>
				<?php
					}else{
						$isEnd = newsList(9, $page_i);
						?>
						<ul class="pagination pagination-center">
							<?php if ($page_i){ ?><li class="page-item page-item-center"><a class="page-link" href="?i=<?php echo $page_i - 1; ?>#news">&lt</a></li><?php } ?>
							<li class="page-item page-item-center"><a class="page-link" href="?i=<?php echo $page_i; ?>#news"><?php echo $page_i + 1; ?></a></li>
							<?php if (!$isEnd){ ?><li class="page-item page-item-center"><a class="page-link" href="?i=<?php echo $page_i + 1; ?>#news">&gt</a></li><?php } ?>
						</ul>
						<?php
					}
				?>
					</div>
					<div class="col-2"></div>
				</div>
			</div>
		</section>
		</article>
		<?php bodyFooter(); ?>
	</body>
</html>
