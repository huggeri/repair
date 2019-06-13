function startAnimation(elem) {

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  if($(window).scrollTop() >= elemTop - $(window).height() && $(window).scrollTop() <= elemBottom && !($(elem).hasClass('start'))) {
    $(elem).addClass('start');
  }
}

$(document).ready(function() {

  if($(window).scrollTop() <= 50) {
    $('.navbar__button').addClass('start');
  }

  $(window).scroll(function() {
    startAnimation('.navbar__button');
    startAnimation('.offer__button');
    startAnimation('.card__image');
    startAnimation('.step');
  });
});