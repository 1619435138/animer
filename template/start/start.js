$(function () {
	var mySwiper = new Swiper('.swiper-container')
	mySwiper.on('click', function(){
	var is = $('.on').attr('class').indexOf('active');
	if(is > -1){
	    $(location).attr('href', '../index/index.html')
	}

	})
})