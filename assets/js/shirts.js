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


function ProDetail() {
  document.getElementById('ProDetail').style.display = "flex";
  // document.getElementById('ProDetail').style.flexDirection = "column";
  document.getElementById('ProDetail').style.justifyContent = "center";
  document.getElementById('ProDetail').style.alignItems = "center";
  document.getElementById('ProDetail').style.zIndex = "2";
}
function ClosePro() {
  document.getElementById('ProDetail').style.display = "none";
}
function ProDetail2() {
  document.getElementById('ProDetail2').style.display = "flex";
  document.getElementById('ProDetail2').style.justifyContent = "center";
  document.getElementById('ProDetail2').style.alignItems = "center";
  document.getElementById('ProDetail2').style.zIndex = "2";
}
function ClosePro2() {
  document.getElementById('ProDetail2').style.display = "none";
}
function ProDetail3() {
  document.getElementById('ProDetail3').style.display = "flex";
  document.getElementById('ProDetail3').style.justifyContent = "center";
  document.getElementById('ProDetail3').style.alignItems = "center";
  document.getElementById('ProDetail3').style.zIndex = "2";
}
function ClosePro3() {
  document.getElementById('ProDetail3').style.display = "none";
}
function ProDetail4() {
  document.getElementById('ProDetail4').style.display = "flex";
  document.getElementById('ProDetail4').style.justifyContent = "center";
  document.getElementById('ProDetail4').style.alignItems = "center";
  document.getElementById('ProDetail4').style.zIndex = "2";
}
function ClosePro4() {
  document.getElementById('ProDetail4').style.display = "none";
}
function ProDetail5() {
  document.getElementById('ProDetail5').style.display = "flex";
  document.getElementById('ProDetail5').style.justifyContent = "center";
  document.getElementById('ProDetail5').style.alignItems = "center";
  document.getElementById('ProDetail5').style.zIndex = "2";
}
function ClosePro5() {
  document.getElementById('ProDetail5').style.display = "none";
}
function ProDetail6() {
  document.getElementById('ProDetail6').style.display = "flex";
  document.getElementById('ProDetail6').style.justifyContent = "center";
  document.getElementById('ProDetail6').style.alignItems = "center";
  document.getElementById('ProDetail6').style.zIndex = "2";
}
function ClosePro6() {
  document.getElementById('ProDetail6').style.display = "none";
}
function ProDetail7() {
  document.getElementById('ProDetail7').style.display = "flex";
  document.getElementById('ProDetail7').style.justifyContent = "center";
  document.getElementById('ProDetail7').style.alignItems = "center";
  document.getElementById('ProDetail7').style.zIndex = "2";
}
function ClosePro7() {
  document.getElementById('ProDetail7').style.display = "none";
}
function ProDetail8() {
  document.getElementById('ProDetail8').style.display = "flex";
  document.getElementById('ProDetail8').style.justifyContent = "center";
  document.getElementById('ProDetail8').style.alignItems = "center";
  document.getElementById('ProDetail8').style.zIndex = "2";
}
function ClosePro8() {
  document.getElementById('ProDetail8').style.display = "none";
}



function color1(){
  document.getElementById('ProImG').src = "../assets/images/shirts/category_001/shirts_ph001.jpg";
}
function color2(){
  document.getElementById('ProImG').src = "../assets/images/shirts/category_001/shirts_ph002.jpg";
}
function color3(){
  document.getElementById('ProImG').src = "../assets/images/shirts/category_001/shirts_ph003.jpg";
}
function color4(){
  document.getElementById('ProImG').src = "../assets/images/shirts/category_001/shirts_ph004.jpg";
}
function color5(){
  document.getElementById('ProImG').src = "../assets/images/shirts/category_001/shirts_ph005.jpg";
}

function color1S(){
  document.getElementById('ProImG2').src = "../assets/images/shirts/category_002/shirts_ph001.jpg";
}
function color2S(){
  document.getElementById('ProImG2').src = "../assets/images/shirts/category_002/shirts_ph002.jpg";
}




function color1TH(){
  document.getElementById('ProImG3').src = "../assets/images/shirts/category_003/shirts_ph001.jpg";
}
function color2TH(){
  document.getElementById('ProImG3').src = "../assets/images/shirts/category_003/shirts_ph002.jpg";
}



function color1F(){
  document.getElementById('ProImG4').src = "../assets/images/shirts/category_004/shirts_ph001.jpg";
}
function color2F(){
  document.getElementById('ProImG4').src = "../assets/images/shirts/category_004/shirts_ph002.jpg";
}
function color3F(){
  document.getElementById('ProImG4').src = "../assets/images/shirts/category_004/shirts_ph003.jpg";
}


function color1FI(){
  document.getElementById('ProImG5').src = "../assets/images/shirts/category_005/shirts_ph001.jpg";
}
function color2FI(){
  document.getElementById('ProImG5').src = "../assets/images/shirts/category_005/shirts_ph002.jpg";
}
function color3FI(){
  document.getElementById('ProImG5').src = "../assets/images/shirts/category_005/shirts_ph003.jpg";
}


function color1SIX(){
  document.getElementById('ProImG6').src = "../assets/images/shirts/category_006/shirts_ph001.jpg";
}
function color2SIX(){
  document.getElementById('ProImG6').src = "../assets/images/shirts/category_006/shirts_ph002.jpg";
}
function color3SIX(){
  document.getElementById('ProImG6').src = "../assets/images/shirts/category_006/shirts_ph003.jpg";
}
function color4SIX(){
  document.getElementById('ProImG6').src = "../assets/images/shirts/category_006/shirts_ph004.jpg";
}
function color5SIX(){
  document.getElementById('ProImG6').src = "../assets/images/shirts/category_006/shirts_ph005.jpg";
}


function color1SE(){
  document.getElementById('ProImG7').src = "../assets/images/shirts/category_007/shirts_ph001.jpg";
}
function color2SE(){
  document.getElementById('ProImG7').src = "../assets/images/shirts/category_007/shirts_ph002.jpg";
}
function color3SE(){
  document.getElementById('ProImG7').src = "../assets/images/shirts/category_007/shirts_ph003.jpg";
}
function color1EI(){
  document.getElementById('ProImG8').src = "../assets/images/shirts/category_008/shirts_ph001.jpg";
}


