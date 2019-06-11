ymaps.ready(init);

function init(){
  var myMap;
  $('.map').hover(function() {
    if(!myMap) {
      console.log('жопа');
      myMap = new ymaps.Map("map", {
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
  });
}

if($(window).width() > 567) {
  $('.map').attr('style', 'height: 640px');
}
else {
  $('.map').attr('style', 'height: 665px');
}