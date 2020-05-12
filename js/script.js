$(function() {

  $('#back a').on('click',function(){
    $('body, html').animate({
      scrollTop:0
    }, 800);　//動作時間。ミリ秒以外にも slow, normal, fast などがある。
      return false;
  });

});