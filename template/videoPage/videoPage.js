$(function () {
	$('.list-brief .fr').click(function () {
		$('.list-brief p').toggleClass('displays');
		$(this).find('img').animate({},function(){
			$(this).toggleClass('trans');
		});
	});
	$('.set-up').click(function () {
		$(location).attr('href', '../index/index.html')
	})
})