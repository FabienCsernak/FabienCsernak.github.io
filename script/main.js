$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});


$(document).ready(function(){
    $(".navTrigger").on('click',function(){
        $('.navlinks').toggle();
    });
  });