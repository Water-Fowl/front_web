<?php
	include($_SERVER['DOCUMENT_ROOT'].'/template.php');

	if (isset($_GET['i'])) $page_i = (int)$_GET['i'];
	else $page_i = 0;

	$filename = 'news/'.basename($_GET['ref']).'.xml';	/* basename()によって、他ディレクトリ以外を参照させない */
	$head_temp = [];
	if (file_exists($filename)){
		$news = simplexml_load_file($filename);
		$head_temp['title'] = $news->title;

		$head_temp['keywords'] = '';
		foreach($news->keyword as $keyword){
			$head_temp['keywords'] .= $keyword.',';
		}
	}else{
		$head_temp['title'] = 'News';
	}
?>
<!doctype html>
<html lang="ja">
	<head>
		<?php head($head_temp); ?>
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
					if (file_exists($filename)){
						$keyword_html = '';
						foreach($news->keyword as $keyword){
							$keyword_html .= $keyword.' ';
						}
				?>
						<div class="card text-left">
							<div class="card-header">
								<ul class="soc" style="float: right; ">
									<li><a class="soc-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwater-fowl.co.jp&t=" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL)); return false;"><img alt="Share on Facebook" src="/img/flat_web_icon_set/Facebook.png" /></a></li>
									<li><a class="soc-twitter" href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fwater-fowl.co.jp&text=:%20http%3A%2F%2Fwater-fowl.co.jp" target="_blank" title="Tweet" onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20'  + encodeURIComponent(document.URL)); return false;"><img alt="Tweet" src="/img/flat_web_icon_set/Twitter.png" /></a></li>
									<li><a class="soc-googleplus soc-icon-last" href="https://plus.google.com/share?url=http%3A%2F%2Fwater-fowl.co.jp" target="_blank" title="Share on Google+" onclick="window.open('https://plus.google.com/share?url=' + encodeURIComponent(document.URL)); return false;"><img alt="Share on Google+" src="/img/flat_web_icon_set/Google+.png" /></a></li>
								</ul>
								<span class="text-muted"><?php echo $news->date; ?></span>　
								<span class="text-muted"><i class="fas fa-tag"></i><?php echo $keyword_html; ?></span><br>
								<div style="clear: both; "></div>
								<h3 class="card-title" style="display: inline; "><?php echo $news->title; ?></h3>
							</div>
							<div class="card-body">
								<div style="font-size: 0.9375rem; "><?php echo nl2br($news->article); ?></div>
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
