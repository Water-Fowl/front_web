$(function(){
	$(window).scroll(function(){
		$('nav').css('background-color', 'rgba(55, 90, 127, '+Math.min($(window).scrollTop()/$(window).height(), 1.0)+')');
	});

	$('.news-widget').each(function(){
		var filename = $(this).attr('ref');

		var target = this;
		$.get(filename, {}, function(res, stat, xhr){
			var img_html = '<img src="'+$(res).find('header').html()+'" style="width: 80%; ">';
			console.log($(res).find('article').html());
			$(target).html(`
				<a href="/news.php?`+$.param({ref: filename.replace('news/', '').replace('.xml', '')})+`" style="text-decoration: none; color: inherit; "><div class="card-body text-left">
				<div style="height: 25em; overflow: hidden; ">
				<span class="text-muted">`+new Date(xhr.getResponseHeader('Last-Modified')).toLocaleDateString()+`</span>
				<center>
					<h4>`+$(res).find('title').html()+`</h4>
					<br>
					`+img_html+`
				</center>
				<p class="text-muted">`+$(res).find('article').html().replace(/&lt;/g, '<').replace(/&gt;/g, '>')+`</p>
				</div>
				<p class="text-muted news-widget-more" style="display: inline; ">…(続きを読む)</p>
				</div></a>
			`);
		}, 'xml');
	});

	$('.news-widget').attr('class', 'news-widget card bg-light');
});
