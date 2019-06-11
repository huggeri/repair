// Инициализируем библиотеку WOW для анимаций
// Для экранов от 1200
if($(window).width() > 1200) {
  $.when(
    $.getScript( "js/wow.min.js")
  ).done(function() {
    var wow = new WOW().init();
  });
}

// Когда документ загрузился весь
$(document).ready(function() {

  // Валидация формы в оффере
  $('#offer-form').validate({
    errorElement: "div",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      }
    },
    messages: {
      username: {
        required: 'Заполните поле',
        minlength: jQuery.validator.format('Допустимая длина 2-15 символов')
      },
      phone: {
        required: 'Заполните поле'
      }
    },
    errorClass: 'invalid'
  });

  // Валидация формы в брифе
  $('#brif-form').validate({
    errorElement: "div",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      }
    },
    messages: {
      username: {
        required: 'Заполните поле',
        minlength: jQuery.validator.format('Допустимая длина 2-15 символов')
      },
      phone: {
        required: 'Заполните поле'
      },
      email: {
        required: 'Заполните поле',
        email: jQuery.validator.format('Введите корректный email')
      }
    },
    errorClass: 'invalid'
  });

  //Маска для телефона
  $('input[name=phone]').mask('8 (999) 999-99-99');

  // Пишем скрипт для работы слайдера
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});