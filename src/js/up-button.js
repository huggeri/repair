$('#up').fadeOut();

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {
      $('#up').fadeIn('slow', 'linear');
    }
    else {
      $('#up').fadeOut('fast', 'swing');
    }
  });

  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0}, 1000);
  });
});