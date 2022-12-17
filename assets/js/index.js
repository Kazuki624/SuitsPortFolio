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

function Uscroll() {
  document.getElementById('myNlist').style.height = "100%";
  document.getElementById('myNlist').style.display = "block";
}
function Dscroll() {
  document.getElementById('myNlist').style.height = "0%";
  document.getElementById('myNlist').style.display = "none";
}
function Uscroll2() {
  document.getElementById('myNlist2').style.height = "100%"
}
function Dscroll2() {
  document.getElementById('myNlist2').style.height = "0%"
}


window.onload = function() {
  var load1 = document.getElementById('Main1');
  var load2 = document.getElementById('Main2');
  var load3 = document.getElementById('Main3');
  var load4 = document.getElementById('Main4');
  load1.style.transform = "translateX(0%)";
  load2.style.transform = "translateX(0%)";
  load3.style.transform = "translateX(0%)";
  load4.style.transform = "translateX(0%)";
}

