;(function($, undefined){


$(window).width(function() {
  if ( $(window).width() >= 790 ) {
    addSrcImage();
  }
});

$(window).resize(function() {
  if ( $(window).width() >= 790 ) {
    addSrcImage();
  }// И теперь нужно отключить функцию слежения за шириной єкрана
});

function addSrcImage() {
  $('[data-src]').each(function () {
    var data = $(this).attr('data-src');
    $(this).attr('src', data);
  });
};

})(jQuery);
