function Open() {
  document.getElementById('NavBar').style.width = "23%"
  document.getElementById('NavBar').style.display = "block"
  document.getElementById('header').style.marginLeft = "23%"
  document.getElementById('main').style.marginLeft = "23%"
}
function Close() {
  document.getElementById('NavBar').style.width = "0%"
  document.getElementById('NavBar').style.display = "none"
  document.getElementById('header').style.marginLeft = "0%"
  document.getElementById('main').style.marginLeft = "0%"
}
$(document).ready(function(){
  $(".search-btn").click(function(){
    $(this).toggleClass("changeBG");
    $(".fas").toggleClass("ChangeSearchColor");
    $(".input").focus().toggleClass("active-search-width").val(''); 
  });
});




$(document).ready(function(){

  var doAnimations = function() {
    var $offset = $(window).scrollTop() + $(window).height();
    // sctollTopは開始の画面を示す
  
    var $animatables = $('.beforeAnimate');
  
    if($animatables.length == 0)  {
        $(window).off('scroll', doAnimations);
        // animatables要素の数が0だったら
    }
  
    $animatables.each(function(i){
      var $animatable = $(this); //.・・・・・・➀
        if(($animatable.offset().top + $animatable.height() - 20) < $offset) {
           $animatable.removeClass('beforeAnimate').addClass('animating');
          // スクロールした時の画面が表示されるまでの過程をここで行なっている。
          //➀では現在のスクロール位置の場所を代入している。.
  
        }
    });
  };
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  });
  