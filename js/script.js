$(function(){

	function openBurger() {
		$('.header').removeClass('dark-bg');
		if($('.social').hasClass('dark-bg')) {
			$('.to-me').removeClass('active');
			$('.to-works').addClass('active');
		}
		else {
			$('.to-me').addClass('active');
			$('.to-works').removeClass('active');
		}
		$('.bg').removeClass('hide');
		$('.bg').addClass('show');
		$('.popup-menu').css({'display':'flex',
			'left': '-100%'
		}).addClass('open');
		$('.popup-menu').animate({
			left: '0'},
			700, 'linear', function() {});
	}

	function closeBurger() {
		if($('.social').hasClass('dark-bg')) {
			$('.header').addClass('dark-bg');
		}
		$('.bg').removeClass('show');
		$('.bg').addClass('hide');			
		$('.popup-menu').animate({
			left: '-100%'},
			700, 'linear', function() {
				$('.bg').removeClass('show');
				$('.popup-menu').css({'display':'none'}).removeClass('open');
			});
	}

	function secBlockFadeIn() {
		$('.block-introduction').fadeOut(700, function() {
			$('.block-works').fadeIn(500, function() {
				$('.block-works').css('display', 'flex');
				$('.social, .header, .page-content').addClass('dark-bg');
			});
		});
	}

	function firstBlockFadeIn() {
		$('.block-works').fadeOut(700, function() {
			$('.block-introduction').fadeIn(500, function() {
				$('.social, .header, .page-content').removeClass('dark-bg');
			});
		});
	}

	var scrollPos = 0;
	$("body").keydown(function(e) {
  if((e.keyCode == 37) || (e.keyCode == 38)) { // left
  	firstBlockFadeIn(); 
  }
  else if((e.keyCode == 39) || (e.keyCode == 40)) { // right
  	secBlockFadeIn();
  }
});

	$(window).on('scroll', function(event) {
		console.log('scroll');
		if($(this).scrollTop() > scrollPos) {
			secBlockFadeIn();
		}
		else { firstBlockFadeIn(); }
		scrollPos = $(this).scrollTop();
	});

	$('.header').on('click', function () {
		if(!$('.popup-menu').hasClass('open')) { openBurger(); }
		else { closeBurger(); }
	});

	$('.more').on('click', function(event) {
		secBlockFadeIn();
	});

	$('.to-works').on('click', function(event) {
		// event.preventDefault();
		closeBurger();
		secBlockFadeIn();		
	});

	$('.to-me').on('click', function(event) {
		closeBurger();
		firstBlockFadeIn();
	});


});