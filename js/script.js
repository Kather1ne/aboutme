$(function(){

	$('.header').on('click', function () {
		if(!$('.popup-menu').hasClass('open')) {
			$('.popup-menu').css({'display':'flex',
				'left': '-100%'
			}).addClass('open');
			$('.popup-menu').animate({
				left: '0'},
				700, function() {
					/* stuff to do after animation is complete */
				});
		}

		else {
			$('.popup-menu').animate({
				left: '-100%'},
				700, function() {
					/* stuff to do after animation is complete */
					$('.popup-menu').css({'display':'none'}).removeClass('open');
				});
		}

	});
});