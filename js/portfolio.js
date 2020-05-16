/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var hover0 = document.querySelector(".hoverimg0");
var hover1 = document.querySelector(".hoverimg1");
var hover2 = document.querySelector(".hoverimg2");
var hover3 = document.querySelector(".hoverimg3");
var hover4 = document.querySelector(".hoverimg4");
var hover5 = document.querySelector(".hoverimg5");
var hover6 = document.querySelector(".hoverimg6");
var hover7 = document.querySelector(".hoverimg7");
var hover8 = document.querySelector(".hoverimg8");

var img0 = document.querySelector(".img0hover");
var img1 = document.querySelector(".img1hover");
var img2 = document.querySelector(".img2hover");
var img3 = document.querySelector(".img3hover");
var img4 = document.querySelector(".img4hover");
var img5 = document.querySelector(".img5hover");
var img6 = document.querySelector(".img6hover");
var img7 = document.querySelector(".img7hover");
var img8 = document.querySelector(".img8hover");

// var hovertitle1 = document.querySelector(".title1");


hover0.addEventListener('mouseover', function() {
  img0.src = "images/dinnerb.png";
  img0.classList.add("hoverimg");
  // hovertitle1.classList.add("hovertitle");
});

hover0.addEventListener('mouseout', function() {
  img0.src = "images/dinner.png";
  img0.classList.remove("hoverimg");
});


hover1.addEventListener('mouseover', function() {
  img1.src = "images/enjoinb.png";
  img1.classList.add("hoverimg");
});

hover1.addEventListener('mouseout', function() {
  img1.src = "images/enjoin.png";
  img1.classList.remove("hoverimg");
});


hover2.addEventListener('mouseover', function() {
  img2.src = "images/artb.png";
  img2.classList.add("hoverimg");
});

hover2.addEventListener('mouseout', function() {
  img2.src = "images/art.png";
  img2.classList.remove("hoverimg");
});


hover3.addEventListener('mouseover', function() {
  img3.src = "images/etnischprofilerenb.png";
  img3.classList.add("hoverimg");
});

hover3.addEventListener('mouseout', function() {
  img3.src = "images/etnischprofileren.png";
  img3.classList.remove("hoverimg");
});


hover4.addEventListener('mouseover', function() {
  img4.src = "images/schoenenb.png";
  img4.classList.add("hoverimg");
});

hover4.addEventListener('mouseout', function() {
  img4.src = "images/schoenen.png";
  img4.classList.remove("hoverimg");
});


hover5.addEventListener('mouseover', function() {
  img5.src = "images/wittewebsiteb.png";
  img5.classList.add("hoverimg");
});

hover5.addEventListener('mouseout', function() {
  img5.src = "images/wittewebsite.png";
  img5.classList.remove("hoverimg");
});


hover6.addEventListener('mouseover', function() {
  img6.src = "images/extrab.png";
  img6.classList.add("hoverimg");
});

hover6.addEventListener('mouseout', function() {
  img6.src = "images/extra.png";
  img6.classList.remove("hoverimg");
});


hover7.addEventListener('mouseover', function() {
  img7.src = "images/nemob.png";
  img7.classList.add("hoverimg");
});

hover7.addEventListener('mouseout', function() {
  img7.src = "images/nemo.png";
  img7.classList.remove("hoverimg");
});


hover8.addEventListener('mouseover', function() {
  img8.src = "images/orcab.png";
  img8.classList.add("hoverimg");
});

hover8.addEventListener('mouseout', function() {
  img8.src = "images/orca.png";
  img8.classList.remove("hoverimg");
});
