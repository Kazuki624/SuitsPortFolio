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
  $(".S-btn").click(function(){
    $("#myNlist").height("100%");
    $("#myNlist").show("1000");
  });
  $(".D-btn").click(function(){
    $("#myNlist").hide("2000");
  });
});
$(document).ready(function(){
  $(".S-btn2").click(function(){
    $("#myNlist2").height("100%");
    $("#myNlist2").show("1000");
  });
  $(".D-btn2").click(function(){
    $("#myNlist2").hide("2000");
  });
});
