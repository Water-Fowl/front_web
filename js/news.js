$(function(){
	$(window).scroll(function(){
		$('nav').css('background-color', 'rgba(55, 90, 127, '+Math.min($(window).scrollTop()/$(window).height(), 1.0)+')');
	});

	$('.news-widget').each(function(){
		var filename = $(this).attr('ref');

		var target = this;
		$.get(filename, {}, function(res, stat, xhr){
			var img_html = '<img src="'+$(res).find('header').html()+'" class="rounded" style="width: 80%; ">';
			var keyword = '';
			$(res).find('keyword').each(function(){
				keyword += $(this).html()+' ';
			});
			$(target).html(`
				<a href="/news.php?`+$.param({ref: filename.replace('news/', '').replace('.xml', '')})+`#news" style="text-decoration: none; color: inherit; "><div class="card-body text-left">
				<div style="height: 45ex; overflow: hidden; ">
					<span class="text-muted">`+$(res).find('date').html()+`　</span>
					<span class="text-muted small float-right"><i class="fas fa-tag"></i>`+keyword+`</span>
					<center>
						<h4 style="font-size: large; ">`+$(res).find('title').html()+`</h4>
						<br>
						`+img_html+`
					</center>
					<div class="text-muted news-article" style="font-size: small; ">`+$(res).find('article').html().replace(/&lt;/g, '<').replace(/&gt;/g, '>')+`</div>
				</div>
				<div style="position: relative; top: -2ex; margin-bottom: -2ex; ">
					<div style="height: 2ex; background: -webkit-gradient(linear, left top, left bottom, from(rgba(48, 48, 48, 0.0)), to(rgba(48, 48, 48, 1.0))); "></div>
					<span class="text-muted news-widget-more" style="display: inline; ">(続きを読む)</span>
				</div>
				</div></a>
			`);
		}, 'xml');
		$(this).attr('class', 'news-widget card bg-light fadeIn animated d-inline-block');
	});

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
