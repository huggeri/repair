function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.61140907, 37.20112250],
    zoom: 16,
  });

  myMap.behaviors.disable('scrollZoom');
  
  myPlacemark = new ymaps.Placemark([55.61140907, 37.20112250], {
    hintContent: 'Ремонт квартиир',
    balloonContent: 'ул. Ленина, 10',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/footer/geo.png',
        // Размеры метки.
        iconImageSize: [25, 25],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-11.5, -28],
      });
      
  myMap.geoObjects.add(myPlacemark);
}

if($(window).width() > 567) {
  $('.map').attr('style', 'height: 640px');
}
else {
  $('.map').attr('style', 'height: 665px');
}

var counter = 0;

$(document).ready(function() {
  var target = $('.map');
  var targetPos = target.offset().top;
  var windowHeight = $(window).height();
  var scrollToElem = targetPos-windowHeight;
  $(window).scroll(function() {
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem && !counter) {
      $('footer').prepend(' <!-- Подключение карт через Yandex Map API (JavaScript)--> <script src="https://api-maps.yandex.ru/2.1/?apikey=03cb9a38-8be7-466c-ae9f-098438c3b330&lang=ru_RU"></script>');
      ymaps.ready(init);
      ++counter;
    }
  });
});