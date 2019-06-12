$(document).ready(function() {
  $(window).scroll(function () {
    if($(window).scrollTop() > 500) {
      if($(window).width() > 567) {
        $('.map > script').attr('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A41fb8bc8252dc6c323f4525a235a1b150931393704855c1900cfbad12b58e8c6&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false');
      }
      else {
        $('.map > script').attr('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A41fb8bc8252dc6c323f4525a235a1b150931393704855c1900cfbad12b58e8c6&amp;width=100%25&amp;height=665&amp;lang=ru_RU&amp;scroll=false');
      }
    }
  });
});