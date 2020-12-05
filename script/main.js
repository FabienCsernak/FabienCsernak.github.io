$(document).ready(function () {

  var dm = 0;
  var btn = $('#button');
  var btnDayNight = $('.dayNight');
  btnDayNight.addClass('show');

  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
  });

  $(".navTrigger").on('click', function () {
    $('.navlinks').toggle();
  });
  $('.portfolioDesk').hover(function () {
    $(this).find(".portfolioDeskText").toggle();
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
      console.log("OK");
    } else {
      $('.nav').removeClass('affix');
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '100');
  });

  $('.sun').css({ 'opacity': '0' });

  btnDayNight.on('click', function (e) {
    if (dm == 0) {
      $('body').css({ 'background-color': '#101010', 'color': '#fff' });
      $('.sun').css({ 'opacity': '1' });
      $('.moon').css({ 'opacity': '0' });
      $('img').css({ "box-shadow": "0 20px 15px -10px hsl(0deg 0% 41% / 25%)" });
      dm = 1;
    } else {
      $('body').css({ 'background-color': '#fff', 'color': '#000' });
      $('.sun').css({ 'opacity': '0' });
      $('.moon').css({ 'opacity': '1' });
      $('img').css({ "box-shadow": "0 20px 15px -10px hsla(0,0%,0%,.25)" });
      dm = 0
    }
  });
});