$(function () {
	jQuery(window).scroll(function () {
		var the_top = jQuery(document).scrollTop();
		if (the_top > 1) {
			jQuery('.header__navigation').addClass('scroll-menu');
		}
		else {
			jQuery('.header__navigation').removeClass('scroll-menu');
		}
	});
	$('#fullpage').fullpage({
		css3: true,
		scrollingSpeed: 1000,
		autoScrolling: true,
		responsiveWidth: 1500,
		fitToSection: false,
		scrollOverflow: true,
		normalScrollElements: '.portfolio__slider-left, .portfolio__slider-right, .popup',
		anchors: ['block1', 'block2', 'block3', 'block4'],
		menu: '#myMenu',
		onLeave: function (origin, destination, direction) {
			var leavingSection = this;
			var time = 2, cc = 1;
			// после покидания раздела 2
			if (origin.index == 0 && direction == 'down') {
				jQuery('.header__navigation').addClass('scroll-menu');
			}
			else if (origin.index == 1 && direction == 'up') {
				jQuery('.header__navigation').removeClass('scroll-menu');
			}
			if (origin.index == 2 && direction == 'down') {

				$('.number').addClass('viz');
				$('div').each(function () {
					var
						i = 1,
						num = $(this).data('num'),
						step = 3000 * time / num,
						that = $(this),
						int = setInterval(function () {
							if (i <= num) {
								that.html(i);
							}
							else {
								cc = cc + 2;
								clearInterval(int);
							}
							i++;
						}, step);
				});
			}
			// else if (origin.index == 1 && direction == 'up') {
			// 	jQuery('.header__navigation').removeClass('scroll-menu');
			// }
		}
	});
	new WOW().init();
	$('.portfolio__slider-left').slick({
		slidesToShow: 1,
		infinite: false,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.portfolio__slider-right',
		vertical: true,
		verticalSwiping: true,
		speed: 1000,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					vertical: false,
					verticalSwiping: false,
					centerMode: true,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.portfolio__slider-right').slick({
		slidesToShow: 1,
		speed: 2000,
		infinite: false,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.portfolio__slider-left',
		vertical: true,
		verticalSwiping: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					vertical: false,
					verticalSwiping: false,
					slidesToScroll: 1
				}
			}
		]
	});
	// $('.portfolio__slider-right').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	// 	// $('.portfolio__slider-right').addClass('transform-slide');
	// });
	// $('.portfolio__slider-right').on('afterChange', function (event, slick, currentSlide) {
	// 	$('.portfolio__slider-right').removeClass('transform-slide');
	// });
	const slider = $(".portfolio__slider-left");

	slider.on('wheel', (function (e) {
		e.preventDefault();

		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickPrev');
		} else {
			$(this).slick('slickNext');
		}
	}));
	const slider2 = $(".portfolio__slider-right");

	slider2.on('wheel', (function (e) {
		e.preventDefault();

		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickPrev');
		} else {
			$(this).slick('slickNext');
		}
	}));
	// function fontsStyle(params) {

	// 	let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
	// 	if (file_content == '') {
	// 		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
	// 		return fs.readdir(path.build.fonts, function (err, items) {
	// 			if (items) {
	// 				let c_fontname;
	// 				for (var i = 0; i < items.length; i++) {
	// 					let fontname = items[i].split('.');
	// 					fontname = fontname[0];
	// 					if (c_fontname != fontname) {
	// 						fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
	// 					}
	// 					c_fontname = fontname;
	// 				}
	// 			}
	// 		})
	// 	}
	// }
	$('.talk__slider').slick({
		slidesToShow: 3,
		infinite: true,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		dotsClass: 'custom_paging',
		customPaging: function (slider, i) {
			var zero = '0';
			if (i + 1 > 9) { zero = '' }
			return '<span class="active-number">' + zero + (i + 1) + '</span>' + '/' + slider.slideCount;
		},
		responsive: [
			{
				breakpoint: 1560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					adaptiveHeight: true
				}
			},
			{
				breakpoint: 982,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.talk__slider-nav-btn').click(function (event) {
		$('.talk__slider').slick('slickNext');
	});
	$('.talk__slider-more').click(function (event) {
		$('.talk__slider').slick('slickNext');
	});
	var time = 2, cc = 1;
	$(window).scroll(function () {
		$('#counter').each(function () {
			var
				cPos = $(this).offset().top,
				topWindow = $(window).scrollTop();
			if (cPos < topWindow + 200) {
				if (cc < 2) {
					$('.number').addClass('viz');
					$('div').each(function () {
						var
							i = 1,
							num = $(this).data('num'),
							step = 1000 * time / num,
							that = $(this),
							int = setInterval(function () {
								if (i <= num) {
									that.html(i);
								}
								else {
									cc = cc + 2;
									clearInterval(int);
								}
								i++;
							}, step);
					});
				}
			}
		});
		$('#counter2').each(function () {
			var
				cPos = $(this).offset().top,
				topWindow = $(window).scrollTop();
			if (cPos < topWindow + 400) {
				if (cc < 2) {
					$('.number').addClass('viz');
					$('div').each(function () {
						var
							i = 1,
							num = $(this).data('num'),
							step = 4000 * time / num,
							that = $(this),
							int = setInterval(function () {
								if (i <= num) {
									that.html(i);
								}
								else {
									cc = cc + 2;
									clearInterval(int);
								}
								i++;
							}, step);
					});
				}
			}
		});
	});
	// POPUP
	$('.popup-link').click(function (event) {
		$('body').addClass('lock');
	});
	const popupLinks = document.querySelectorAll('.popup-link');
	const body = document.querySelector('body');
	const lockPadding = document.querySelectorAll(".lock-padding");

	let unlock = true;

	const timeout = 800;

	if (popupLinks.length > 0) {
		for (let index = 0; index < popupLinks.length; index++) {
			const popupLink = popupLinks[index];
			popupLink.addEventListener("click", function (e) {
				const popupName = popupLink.getAttribute('href').replace('#', '');
				const curentPopup = document.getElementById(popupName);
				popupOpen(curentPopup);
				e.preventDefault();
			});
		}
	}
	const popupCloseIcon = document.querySelectorAll('.close-popup');
	if (popupCloseIcon.length > 0) {
		for (let index = 0; index < popupCloseIcon.length; index++) {
			const el = popupCloseIcon[index];
			el.addEventListener('click', function (e) {
				popupClose(el.closest('.popup'));
				e.preventDefault();
			});
		}
	}

	function popupOpen(curentPopup) {
		if (curentPopup && unlock) {
			const popupActive = document.querySelector('.popup.open');
			if (popupActive) {
				popupClose(popupActive, false);
			} else {
				bodyLock();
			}
			curentPopup.classList.add('open');
			curentPopup.addEventListener("click", function (e) {
				if (!e.target.closest('.popup__content')) {
					popupClose(e.target.closest('.popup'));
				}
			});
		}
	}

	function popupClose(popupActive, doUnlock = true) {
		if (unlock) {
			popupActive.classList.remove('open');
			if (doUnlock) {
				bodyUnLock();
			}
		}
	}

	function bodyLock() {
		// const lockPaddingValue = window.innerWidth - document.querySelector('.wrap').offsetWidth + 'px';

		// if (lockPadding.length > 0) {
		// 	for (let index = 0; index < lockPadding.length; index++) {
		// 		const el = lockPadding[index];
		// 		el.style.paddingRight = lockPaddingValue;
		// 	}
		// }
		// body.style.paddingRight = lockPaddingValue;
		// body.classList.add('lock');

		// unlock = false;
		// setTimeout(function () {
		// 	unlock = true;
		// }, timeout);
	}

	function bodyUnLock() {
		setTimeout(function () {
			if (lockPadding.length > 0) {
				for (let index = 0; index < lockPadding.length; index++) {
					const el = lockPadding[index];
					el.style.paddingRight = '0px';
				}
			}
			body.style.paddingRight = '0px';
			body.classList.remove('lock');
		}, timeout);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}

	document.addEventListener('keydown', function (e) {
		if (e.which === 27) {
			const popupActive = document.querySelector('.popup.open');
			popupClose(popupActive);
		}
	});

	(function () {
		// проверяем поддержку
		if (!Element.prototype.closest) {
			// реализуем
			Element.prototype.closest = function (css) {
				var node = this;
				while (node) {
					if (node.matches(css)) return node;
					else node = node.parentElement;
				}
				return null;
			};
		}
	})();
	(function () {
		// проверяем поддержку
		if (!Element.prototype.matches) {
			// определяем свойство
			Element.prototype.matches = Element.prototype.matchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector;
		}
	})();
});

