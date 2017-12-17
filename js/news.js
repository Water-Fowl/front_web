$(function(){
	$(window).scroll(function(){
		$('nav').css('background-color', 'rgba(55, 90, 127, '+Math.min($(window).scrollTop()/$(window).height(), 1.0)+')');
	});

	$('.news-widget').each(function(){
		var filename = $(this).attr('ref');

		var target = this;
		$.get(filename, {}, function(res, stat, xhr){
			var img_html = '<img src="'+$(res).find('header').html()+'" class="rounded" style="width: 80%; ">';
			$(target).html(`
				<a href="/news.php?`+$.param({ref: filename.replace('news/', '').replace('.xml', '')})+`" style="text-decoration: none; color: inherit; "><div class="card-body text-left">
				<div style="height: 25em; overflow: hidden; ">
				<span class="text-muted">`+new Date(xhr.getResponseHeader('Last-Modified')).toLocaleDateString()+`</span>
				<center>
					<h4 style="font-size: medium; ">`+$(res).find('title').html()+`</h4>
					<br>
					`+img_html+`
				</center>
				<p class="text-muted">`+$(res).find('article').html().replace(/&lt;/g, '<').replace(/&gt;/g, '>')+`</p>
				</div>
				<p class="text-muted news-widget-more" style="display: inline; ">…(続きを読む)</p>
				</div></a>
			`);
		}, 'xml');
		$(this).attr('class', 'news-widget card bg-light fadeIn animated');
	});
	$('.news-widget').attr('class', 'news-widget d-none');

	/*$('.member-widget').each(function(){
		var filename = $(this).attr('ref');
		var target = this;

		$.get(filename, {}, function(res, stat, xhr){
			var random_i = Math.floor(Math.random() * $(res).find('item').length);
			var random_item = $(res).find('item')[random_i];

			$(target).html(`
				<a href="/member.php?`+$.param({ref: filename.replace('/member/', '').replace('.xml', '')})+`#members" style="text-decoration: none; color: inherit; "><div class="card-body text-left">
						<span class="text-muted">`+$(res).find('position').html()+`</span>
						<center>
							<h4>`+$(res).find('name').html()+`</h4>
							<img src="`+$(res).find('img').html()+`" class="avatar" style="height: 128px; "><br>
							<br>
						</center>
						<p class="text-muted">`+$(res).find('comment').html().replace(/&lt;/g, '<').replace(/&gt;/g, '>')+`</p>
						<span class="text-small">`+$(random_item).find('name').html()+': '+$(random_item).find('value').html()+`</span>
				</div></a>
			`);
		}, 'xml');
	});
	$('.member-widget').attr('class', 'member-widget card bg-light');*/

});
