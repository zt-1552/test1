;(function($, undefined){

//Нужно поменять у нужных баннеров атрибут src на data-src

$(document).ready(function () {
  if ($(window).width() >= 790 ) {
    addSrcImage();
  }
});

$(window).resize(function() {
  if ($(window).width() >= 790 ) {
    addSrcImage();
  } //этот обработчик мне не очень нравится - можно его вообще убрать - вряд-ли кто-то зайдя на ширине до 790рх перейдет на больший экран, а если такое будет, то и фиг с ними - не увидят боковых баннеров
});

function addSrcImage() {
  $('[data-src]').each(function () {
    var data = $(this).attr('data-src');
    $(this).attr('src', data);
  });
};

})(jQuery);
