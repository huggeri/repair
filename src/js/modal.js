$(document).ready(function() {
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');

  function showModal() {
    modal.addClass('modal_active');
  }
  
  function hideModal() {
    modal.removeClass('modal_active');
  }

  function cleanValue(str)
  {
    $(str).val('');
  }

  button.on('click', showModal);

  close.on('click', function () {
    hideModal();
    cleanValue('#brif-phone');
    cleanValue('#brif-username');
    cleanValue('#brif-email');
    cleanValue('#offer-phone');
    cleanValue('#offer-username');
  });

  $('#brif-form').submit(function (e) {
    if($('#brif-phone').val().length > 16 && 
      $('#brif-username').val().length > 1 && 
      $('#brif-email').val().length > 4) {
        showModal();
      }
  });

  $('#offer-form').submit(function (e) {
    if($('#offer-phone').val().length > 16 && 
      $('#offer-username').val().length > 1) {
        showModal();
    }
  });
});