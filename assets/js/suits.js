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

function ViewSingle() {
  document.getElementById('SingleBack').style.display = "flex";
  document.getElementById('SingleBack').style.zIndex = "2";
  document.getElementById('SingleBack').style.justifyContent = "center";
  document.getElementById('SingleBack').style.alignItems = "center";
}
function CloseSingle() {
  document.getElementById('SingleBack').style.display = "none";
}

function ViewDouble() {
  document.getElementById('DoubleBack').style.display = "flex";
  document.getElementById('DoubleBack').style.zIndex = "3";
  document.getElementById('DoubleBack').style.justifyContent = "center";
  document.getElementById('DoubleBack').style.alignItems = "center";
}
function CloseDouble() {
  document.getElementById('DoubleBack').style.display = "none";
}




function Black() {
  document.getElementById('Display').src = "../assets/images/suits/single_ph002.jpg";
}
function Navy() {
  document.getElementById('Display').src = "../assets/images/suits/single_ph003.jpg";
}
function DarkBlack() {
  document.getElementById('Display').src = "../assets/images/suits/single_ph004.jpg";
}
function Navy2() {
  document.getElementById('Display').src = "../assets/images/suits/single_ph005.jpg";
}



function DBlack() {
  document.getElementById('Display2').src = "../assets/images/suits/single_ph002.jpg";
}
function DNavy() {
  document.getElementById('Display2').src = "../assets/images/suits/single_ph003.jpg";
}
function DDarkBlack() {
  document.getElementById('Display2').src = "../assets/images/suits/single_ph004.jpg";
}
function DNavy2() {
  document.getElementById('Display2').src = "../assets/images/suits/single_ph005.jpg";
}

$(document).ready(function(){
  $(".size").click(function(){
    $(this).toggleClass("changeButton");
  });
});