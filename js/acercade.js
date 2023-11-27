$('.divHistoria').mouseenter(function () {
  $(this).css('box-shadow', '0 0.1rem 0.4rem rgb(99, 94, 94)');
});

$('.divHistoria').mouseleave(function () {
  $(this).css('box-shadow', '');
});

$(window).on('scroll', function () {
  //efecto1
  var scrolled = $(this).scrollTop();
  $('#imagen').css({
    'transform': 'translate3d(0, ' + (scrolled * .20) + 'px,0)',
    'opacity': 1 - scrolled / 400
  });
});





