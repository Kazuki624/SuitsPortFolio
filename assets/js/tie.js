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






function OpenJ() {
  document.getElementById('JDetail').style.display = "flex";
  document.getElementById('JDetail').style.justifyContent = "center";
  document.getElementById('JDetail').style.alignItems = "center";
  document.getElementById('JDetail').style.zIndex = "2";
}
function CloseJ() {
  document.getElementById('JDetail').style.display = "none";
}
function OpenN() {
  document.getElementById('NDetail').style.display = "flex";
  document.getElementById('NDetail').style.justifyContent = "center";
  document.getElementById('NDetail').style.alignItems = "center";
  document.getElementById('NDetail').style.zIndex = "2";
}
function CloseN() {
  document.getElementById('NDetail').style.display = "none";
}
function OpenL() {
  document.getElementById('LDetail').style.display = "flex";
  document.getElementById('LDetail').style.justifyContent = "center";
  document.getElementById('LDetail').style.alignItems = "center";
  document.getElementById('LDetail').style.zIndex = "2";
}
function CloseL() {
  document.getElementById('LDetail').style.display = "none";
}
function OpenW() {
  document.getElementById('WDetail').style.display = "flex";
  document.getElementById('WDetail').style.justifyContent = "center";
  document.getElementById('WDetail').style.alignItems = "center";
  document.getElementById('WDetail').style.zIndex = "2";
}
function CloseW() {
  document.getElementById('WDetail').style.display = "none";
}

function colorJ1(){
  document.getElementById('jaimg').src = "../assets/images/tie/category_002/tie_ph001.jpg";
}
function colorJ2(){
  document.getElementById('jaimg').src = "../assets/images/tie/category_002/tie_ph002.jpg";
}
function colorJ3(){
  document.getElementById('jaimg').src = "../assets/images/tie/category_002/tie_ph003.jpg";
}
function colorJ4(){
  document.getElementById('jaimg').src = "../assets/images/tie/category_002/tie_ph004.jpg";
}

function colorN1(){
  document.getElementById('naimg').src = "../assets/images/tie/category_003/tie_ph001.jpg";
}
function colorN2(){
  document.getElementById('naimg').src = "../assets/images/tie/category_003/tie_ph002.jpg";
}
function colorN3(){
  document.getElementById('naimg').src = "../assets/images/tie/category_003/tie_ph003.jpg";
}
function colorN4(){
  document.getElementById('naimg').src = "../assets/images/tie/category_003/tie_ph004.jpg";
}
function colorN5(){
  document.getElementById('naimg').src = "../assets/images/tie/category_003/tie_ph005.jpg";
}




function colorL1(){
  document.getElementById('liimg').src = "../assets/images/tie/category_004/tie_ph001.jpg";
}
function colorL2(){
  document.getElementById('liimg').src = "../assets/images/tie/category_004/tie_ph002.jpg";
}
function colorL3(){
  document.getElementById('liimg').src = "../assets/images/tie/category_004/tie_ph003.jpg";
}
function colorL4(){
  document.getElementById('liimg').src = "../assets/images/tie/category_004/tie_ph004.jpg";
}




function colorW1(){
  document.getElementById('woimg').src = "../assets/images/tie/category_005/tie_ph001.jpg";
}
function colorW2(){
  document.getElementById('woimg').src = "../assets/images/tie/category_005/tie_ph002.jpg";
}
function colorW3(){
  document.getElementById('woimg').src = "../assets/images/tie/category_005/tie_ph003.jpg";
}
function colorW4(){
  document.getElementById('woimg').src = "../assets/images/tie/category_005/tie_ph004.jpg";
}
function colorW5(){
  document.getElementById('woimg').src = "../assets/images/tie/category_005/tie_ph005.jpg";
}
function colorW6(){
  document.getElementById('woimg').src = "../assets/images/tie/category_005/tie_ph006.jpg";
}
function colorW7(){
  document.getElementById('woimg').src = "../assets/images/tie/category_005/tie_ph007.jpg";
}
function colorW8(){
  document.getElementById('woimg').src = "../assets/images/tie/category_005/tie_ph008.jpg";
}
