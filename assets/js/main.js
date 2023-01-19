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
    { open1: 1100, close1: 1300, open2: 1930, close2: 2130 }, //Monday
    { open1: 1100, close1: 1300 }, //Tuesday
    { open1: 1300, close1: 1500 }, //Wednesday
    { open1: 1200, close1: 1400, open2: 1400, close2: 1600 }, //Thursday
    { open1: 1100, close1: 1300 }, //Friday
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
  if (closed == true) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed for winter break.');
    $("#open-text").html('We will be back in the Spring with new hours. See you then!');
  } else if (dayOfWeek == 0 || dayOfWeek == 6 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We will open again Monday at 11am, see you then! ');
  } else if ( dayOfWeek == 1 && time < newOT.open1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We aren&#39;t open yet but we will be at 11am! See you then.');
  } else if ( dayOfWeek == 1 && time >= newOT.open1 && time < newOT.close1 ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! We are open until 1pm today and <a href="people/">Rick Heffner</a> will be in the studio until 1pm.');
  } else if ( dayOfWeek == 1 && time >= newOT.close1 && time < newOT.open2 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed!');
    $("#open-text").html('We are closed but we will be open again at 7:30pm');
  } else if ( dayOfWeek == 1 && time >= newOT.open2 && time < newOT.close2 ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! <a href="people/">Dr. Miriam Ahmed</a> will be in the studio until we close at 9:30pm.');
  } else if ( dayOfWeek == 1 && time >= newOT.close2 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We are closed for the day but we will be open at 11am tomorrow! See you then.');
  } else if ( dayOfWeek == 2 && time < newOT.open1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We aren&#39;t open yet but we will be at 11am! See you then.');
  } else if ( dayOfWeek == 2 &&  time >= newOT.open1 && time < newOT.close1 ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! <a href="people/">Juana Medina Rosas</a> will be in the studio until we close at 1pm.');
  } else if ( dayOfWeek == 2 && time >= newOT.close1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We are closed for the day but we will be open at 1pm tomorrow! See you then.');
  } else if ( dayOfWeek == 3 && time < newOT.open1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We aren&#39;t open yet but we will be at 1pm! See you then.');
  } else if ( dayOfWeek == 3 && time >= newOT.open1 && time < newOT.close1 ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! <a href="people/">Ana Tobin</a> will be in the studio until we close at 3pm.');
  } else if ( dayOfWeek == 3 && time >= newOT.close1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We are closed for the day but we will be open at 12pm tomorrow! See you then.');
  } else if ( dayOfWeek == 4 && time < newOT.open1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We aren&#39;t open yet but we will be at 12pm! See you then.');
  } else if ( dayOfWeek == 4 && time >= newOT.open1 && time < newOT.close1 ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! We are open until 4pm today and <a href="people/">Alan Caballero LaZare</a> will be in the studio until 2pm.');
  } else if ( dayOfWeek == 4 && time >= newOT.open2 && time < newOT.close2 ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! <a href="people/">Rick Heffner</a> will be in the studio until we close at 4pm.');
  } else if ( dayOfWeek == 4 && time >= newOT.close2 && time < newOT.open3 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed!');
    $("#open-text").html('We are closed but we will be open again at 7:30pm');
  } else if ( dayOfWeek == 4 && time >= newOT.open3 && time < newOT.close3 ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! <a href="people/">Dr. Miriam Ahmed</a> will be in the studio until we close at 9:30pm.');
  } else if ( dayOfWeek == 4 && time >= newOT.close3 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We are closed for the day but we will be open at 11am on Friday! See you then.');
  }  else if ( dayOfWeek == 5 && time < newOT.open1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We aren&#39;t open yet but we will be at 11am! See you then.');
  } else if ( dayOfWeek == 5 && time >= newOT.open1 && time < newOT.close1 ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! <a href="people/">Juana Medina Rosas</a> will be in the studio until we close at 1pm.');
  }  else if ( dayOfWeek == 5 && time >= newOT.close1 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We are closed until Monday at noon.');
  }
}
