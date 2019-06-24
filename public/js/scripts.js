;(function($, undefined){

  function getimage() {
    img1 = $('[data-src]');
    data = img1.attr('data-src');
    img1.attr('src', data);
    console.log('addimage');

  };

  function removeimage() {
    img2 = $('[src]');
    img2.removeAttr('src');
    console.log($(window).width(), 'removeimage');
  };


  $(window).width(function() {
    console.log($(window).width());
  if ( $(window).width() >= 850 ) {
    getimage();
  }
  if ( $(window).width() < 850 ) {
    removeimage();
  }
});

})(jQuery);
