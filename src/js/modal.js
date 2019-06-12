$(document).ready(function() {
  var button = $('#button');
  var brifForm = $('#brif-form');
  var offerForm = $('#offer-form');
  var modal = $('#modal');
  var close = $('#close');

  function showModal() {
    modal.addClass('modal_active');
  }
  
  function hideModal() {
    modal.removeClass('modal_active');
  }

  button.on('click', showModal);

  close.on('click', hideModal);

  $('#brif-form').submit(function (e) {
    if($('#brif-phone').val().length > 16 && 
      $('#brif-username').val().length > 1 && 
      $('#brif-email').val().length > 4) {
        e.preventDefault();
        showModal();
        console.log('dot');
      }
  });

  $('#offer-form').submit(function (e) {
    if($('#offer-phone').val().length > 16 && 
      $('#offer-username').val().length > 1) {
        e.preventDefault();
        showModal();
        console.log('dot');
    }
  });
});