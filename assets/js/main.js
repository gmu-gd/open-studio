$(document).ready(function() {
    // run function on initial page load
    nav();
    open();
    loader();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
    // $(window).load(function() {
    //   loader();
    // });
});

function loader() {
	// Animate loader off screen
  setTimeout(function() {
       $("html").removeClass("load-hide");
   }, 0);
  console.log('this works');
}
var i = 1;
function nav() {
  $('#menu-icon').click(function(){
    if (i == 1) {
      $('nav').addClass('nav-open');
      $('#menu').removeClass('hide');
      $('.hamburger').addClass('is-active');
      $('body').addClass('scroll-lock');
      i++;
    } else {
      $('nav').removeClass('nav-open');
      $('#menu').addClass('hide');
      $('body').removeClass('scroll-lock');
      $('.hamburger').removeClass('is-active');
      i = 1;
    }
  });
}
function open() {
  console.log('reading?');
  var data = [
    { }, //Sunday - closed
    { open1: 1400, close1: 1600 }, //Monday
    { open1: 1400, close1: 1600 }, //Tuesday , open2: 1400, close2: 1600
    { open1: 1400, close1: 1600 }, //Wednesday
    { open1: 1500, close1: 1600 }, //Thursday
    { }, //Friday - closed
    {} //Saturday - closed
  ];
  var date = new Date();
  var dayOfWeek = date.getDay(); // 0 is Sunday, 1 is Monday, etc...
  var closed = false;
  var hour = date.getHours();
  var minutes = date.getMinutes();
  minutes = ('0' + minutes).slice(-2); // add zero to single digit number
  var time = hour + "" + minutes; // set time as HHMM with no colon
  var newOT = data[dayOfWeek];
  console.log( 'day of week = ' + dayOfWeek + ' time = ' + time + ' last logged time = ' + newOT);
  if (closed == true) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed for the winter break.');
    $("#open-text").html('We will be back starting in the spring. See you then!');
  } else if (dayOfWeek == 0 || dayOfWeek == 5 ||dayOfWeek == 6 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We will open again Monday at 2pm, see you then! ');
  } else if ( dayOfWeek == 1 && time < newOT.open1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We aren&#39;t open yet but we will be at 2pm! See you then.');
  } else if ( dayOfWeek == 1 && time >= newOT.open1 && time < newOT.close1 ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! <a href="people/">Ana Tobin</a> will be in the studio until we close at 4pm.');
  } else if ( dayOfWeek == 1 && time >= newOT.close1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed!');
    $("#open-text").html('We are closed for the day but we will be open at 2pm on Wednesday! See you then.');
  } else if ( dayOfWeek == 2 && time < newOT.open1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We aren&#39;t open yet but we will be at 2pm! See you then.');
  } else if ( dayOfWeek == 2 && time >= newOT.open1 && time < newOT.close1 ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! <a href="people/">Jax Ohashi</a> will be in the studio until we close at 4pm.');
  } else if ( dayOfWeek == 2 && time >= newOT.close1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed!');
    $("#open-text").html('We are closed for the day but we will be open at 2pm tomorrow! See you then.');
  } else if ( dayOfWeek == 3 && time < newOT.open1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We aren&#39;t open yet but we will be at 2pm! See you then.');
  } else if ( dayOfWeek == 3 && time >= newOT.open1 && time < newOT.close1 ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! <a href="people/">Juana Medina Rosas</a> will be in the studio until we close at 4pm.');
  } else if ( dayOfWeek == 3 && time >= newOT.close1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We are closed for the day but we will be open at 3pm tomorrow! See you then.');
  } else if ( dayOfWeek == 4 && time < newOT.open1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We aren&#39;t open yet but we will be at 3pm! See you then.');
  } else if ( dayOfWeek == 4 && time >= newOT.open1 && time < newOT.close1 ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! <a href="people/">Pierre Bowins</a> will be in the studio until we close at 4pm.');
  } else if ( dayOfWeek == 4 && time >= newOT.close1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed!');
    $("#open-text").html('We will open again Monday at 2pm, see you then!');
  }
}
