;(function($, undefined){

  function addSrcImage() {
    img = $('[data-src]');
    var banner_arr = $.makeArray(img);
    for (var i = 0; i < banner_arr.length; i++) {
      console.log(banner_arr[i]);
      var banner_item = banner_arr[i];
      var data = banner_item.attr('data-src');
      banner_item.attr('src', data);
      console.log($(window).width(), banner_arr[i]);
    }

.map().map().map()


  };
  //
  // function removeimage() {
  //   img2 = $('[src]');
  //   img2.removeAttr('src');
  //   console.log($(window).width(), 'removeimage');
  // };


  $(window).width(function() {
  if ( $(window).width() >= 850 ) {
    addSrcImage();
  }
  // if ( $(window).width() < 850 ) {
  //   removeimage();
  // }
});

})(jQuery);
