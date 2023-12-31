var $ = jQuery.noConflict();
$(document).ready(function () {
	new Menu().init('#menu', { allclick: !1 });
});
var Menu = function () {
	var s = null,
		e = null,
		i = !1,
		l = 1050;
	function n(s, n, h) {
		if (
			($(n).parent('ul').hasClass('showback') &&
				!$(n).hasClass('iconselect') &&
				($(n).parent('ul').removeClass('showback'),
				$(n).parent('ul').addClass('show'),
				$(n)
					.parent('ul')
					.find('li')
					.each(function () {
						$(this).children('ul').removeClass('show');
					})),
			$(n).parent('ul').hasClass('show') &&
				!$(n).hasClass('iconselect') &&
				$(n).parent('ul').find('li').removeClass('selected'),
			$(n).hasClass('selected') || !$(n).hasClass('iconselect'))
		)
			return !1;
		s.each(function () {
			$(this).children('ul').removeClass('show'),
				$(this).parents('ul').removeClass('showback'),
				$(this).removeClass('selected');
		}),
			h ? $(n).children('ul').addClass('show') : $(n).children('ul').show(),
			i &&
				h &&
				$(e + ' > ul > li').each(function () {
					var s = $(n).children('ul').children('li:visible').length;
					$(n)
						.children('ul')
						.css('max-height', $(n).height() * s + 100);
					var e = $(n).parents('ul'),
						i = 0;
					e.each(function () {
						(i += parseInt($(this).css('max-height'))), $(this).css('max-height', i + $(n).height() * s + 100);
					});
				}),
			h ? $(n).hasClass('iconselect') && $(n).parents('ul').addClass('showback') : $(n).parents('ul').show(),
			$(n).addClass('selected'),
			$(n).parents('li').addClass('selected');
		var c = $(n).children('ul');
		return (
			c.length &&
				$(window).width() > l &&
				($(n).parents('ul').length > 1
					? t(c)
						? $(n).children('ul').css('left', -c.outerWidth())
						: ($(n).children('ul').css('left', '100%'), t(c) && $(n).children('ul').css('left', -c.outerWidth()))
					: t(c)
					? ($(n).children('ul').css('left', 'initial'), $(n).children('ul').css('right', '0'))
					: ($(n).children('ul').css('left', 'initial'),
					  $(n).children('ul').css('right', '0'),
					  t(c) && ($(n).children('ul').css('left', 'initial'), $(n).children('ul').css('right', '0')))),
			i &&
				$('#menu ul > li').each(function () {
					$(this).hasClass('selected') || $(this).children('ul').css('max-height', 0);
				}),
			!0
		);
	}
	function t(s) {
		var e = $(window).width();
		return s.offset().left + s.width() > e;
	}
	return {
		init: function (h, c) {
			(e = h), (s = $(h).find('ul').find('li'));
			var a = !1;
			c && void 0 !== c.allclick && (a = c.allclick),
				$(window).width() <= l && (i = !0),
				$(document).on('click', function () {
					s.each(function () {
						$(this).removeClass('selected'),
							$(this).children('ul').removeClass('show'),
							$(this).children('ul').removeClass('showback');
					});
				}),
				$(window).resize(function () {
					$(window).width() <= l
						? (i ||
								((i = !0),
								$('#menu')
									.find('ul')
									.find('.iconselect')
									.each(function () {
										$(this).find('ul').css('max-height', 0);
									})),
						  s.each(function () {
								$(this).children('ul').css('left', '0');
						  }))
						: (i &&
								((i = !1),
								$('#menu .iconselect').each(function () {
									$(this).find('ul').css('max-height', 'initial'), n(s, this, !1);
								})),
						  s.each(function () {
								var s = $(this).children('ul');
								s.length &&
									$(this).parents('ul').length > 1 &&
									(t(s)
										? $(this).children('ul').css('left', -s.outerWidth())
										: ($(this).children('ul').css('left', '100%'),
										  t(s) && $(this).children('ul').css('left', -s.outerWidth())));
						  }));
				}),
				$(document).on('mouseover', function (s) {
					$(window).width() > l &&
						!a &&
						$('#menu')
							.find('ul')
							.find('.menu-item-has-children')
							.each(function () {
								$(this).removeClass('selected'),
									$(this).children('ul').removeClass('show'),
									$(this).children('ul').removeClass('showback'),
									i && $(this).find('ul').css('max-height', 0);
							});
				}),
				s.on('mouseover', function (e) {
					$(window).width() > l && !a && (n(s, this, !0), e.stopPropagation());
				}),
				s.on('click', function (e) {
					($(window).width() <= l || a) &&
						(n(s, this, !0) ||
							($(this).hasClass('selected') &&
								($(this).removeClass('selected'),
								$(this).find('ul').removeClass('showback'),
								$(this).find('li').removeClass('selected'),
								$(this).find('ul').removeClass('show'),
								i && $(this).find('ul').css('max-height', 0))),
						e.stopPropagation());
				}),
				s.each(function () {
					$(this).find('ul').length > 0 && $(this).addClass('iconselect'), n(s, this, !1);
				});
		},
		updateMenu: n,
		isOutScreen: t,
	};
};
$('#nav-icon').click(function () {
	$('.nav-icon').toggleClass('close');
});

$(document).ready(function () {
	$('.go-top').click(function () {
		$('body, html').animate({ scrollTop: '0px' }, 300);
	}),
		$(window).scroll(function () {
			$(this).scrollTop() > 500 ? $('.go-top').fadeIn(300) : $('.go-top').fadeOut(300);
		});
});

function checkCookies() {
	'true' != localStorage.aceptaCookies && $('#cookiesbox').addClass('cookiesblock');
}
function allowCookies() {
	(localStorage.aceptaCookies = 'true'), $('#cookiesbox').removeClass('cookiesblock');
}
$(document).ready(function () {
	checkCookies();
});

$(document).ready(function () {
	$('.check-table').on('click', function () {
		$('#index-table').toggle(200);
	});
});
