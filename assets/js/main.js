$(document).ready(function() {
    // run function on initial page load
    nav();
    open();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});
var i = 1;
function nav() {
  $('#menu-icon').click(function(){
    if (i == 1) {
      $('#menu').removeClass('hide');
      $('.hamburger').addClass('is-active');
      $('body').addClass('scroll-lock');
      i++;
    } else {
      $('#menu').addClass('hide');
      $('body').removeClass('scroll-lock');
      $('.hamburger').removeClass('is-active');
      i = 1;
    }
  });
}
function open() {
  var data = [
    { }, //Sunday - closed
    { open: 12, close: 14 }, //Monday
    { open: 11, close: 13 }, //Tuesday
    { open: 10, close: 12 }, //Wednesday
    { open: 12, close: 16 }, //Thursday
    {}, //Friday - closed
    {} //Saturday - closed
  ];
  var date = new Date();
  var dayOfWeek = date.getDay(); // 0 is Sunday, 1 is Monday, etc...
  var hour = date.getHours()
  var newOT = data[dayOfWeek];
  if (dayOfWeek == 0 || dayOfWeek == 5 || dayOfWeek == 6 ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We will open again Monday at noon, see you then! ');
  } else if ( dayOfWeek == 1 && hour < newOT.open ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We aren&#39;t open yet but we will be at noon! See you then.');
  } else if ( dayOfWeek == 1 && newOT.open <= hour && hour < newOT.close ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! <a href="/about/#who">Michael McDermott</a> will be in the studio until 2pm.');
  } else if ( dayOfWeek == 1 && hour > newOT.close ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We are closed for the day but we will be at 11am tomorrow! See you then.');
  } else if ( dayOfWeek == 2 && hour < newOT.open ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We aren&#39;t open yet but we will be at 11am! See you then.');
  } else if ( dayOfWeek == 2 && newOT.open <= hour && hour < newOT.close ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! <a href="/about/#who">Ana Tobin</a> will be in the studio until 1pm.');
  } else if ( dayOfWeek == 2 && hour > newOT.close ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We are closed for the day but we will be at 10am tomorrow! See you then.');
  } else if ( dayOfWeek == 3 && hour < newOT.open ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We aren&#39;t open yet but we will be at 10am! See you then.');
  } else if ( dayOfWeek == 3 && newOT.open <= hour && hour < newOT.close ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! <a href="/about/#who">Pierre Bowins</a> will be in the studio until 12pm.');
  } else if ( dayOfWeek == 3 && hour > newOT.close ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We are closed for the day but we will be at 12pm tomorrow! See you then.');
  } else if ( dayOfWeek == 4 && hour < newOT.open ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We aren&#39;t open yet but we will be at 12pm! See you then.');
  } else if ( dayOfWeek == 4 && newOT.open <= hour && hour < 14 ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! We are open until 4pm today and <a href="/about/#who">Michael McDermott</a> will be in the studio until 2pm.');
  } else if ( dayOfWeek == 4 && 14 <= hour && hour < newOT.close ) {
    $('h1.home').addClass('open');
    $("#open_c").html('Is open!');
    $("#open-text").html('Stop on in! We are open until 4pm today and <a href="/about/#who">Rick Heffner</a> will be in the studio until we close.');
  } else if ( dayOfWeek == 4 && hour > newOT.close ) {
    $('h1.home').addClass('closed');
    $("#o_close").html('Is closed.');
    $("#open-text").html('We are closed for the day but we will be at 12pm on Monday! See you then.');
  }
}
