$(function(){

  $('#menu_works').click(function(){
    $('html, body').animate({
      scrollTop: $('.container').offset().top
    }, 800);
    return false
  });

  $('#menu_about').click(function(){
    $('html, body').animate({
      scrollTop: $('.introduction').offset().top
    }, 800);
    return false
  });

});
