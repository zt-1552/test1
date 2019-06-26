;(function($, undefined){

$(document).ready(function () {
  if ($(window).width() >= 790 ) {
    addSrcImage();
  }
});

$(window).resize(function() {
  if ($(window).width() >= 790 ) {
    addSrcImage();
  }
});

function addSrcImage() {
  $('[data-src]').each(function () {
    var data = $(this).attr('data-src');
    $(this).attr('src', data);
  });
};

})(jQuery);
