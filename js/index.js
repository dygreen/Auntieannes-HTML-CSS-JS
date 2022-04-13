$(document).ready(function(){

  // gnb hover 효과
  $("nav>ul>li").hover(function(){
    $(this).find(".menu_img").css({"opacity":"1"}).stop().animate({top: "40px"});
    $(this).find(">ul").stop().slideDown();
  }, function(){
    $(this).find(".menu_img").css({"opacity":"0"}).stop().animate({top: "61px"});
    $(this).find(">ul").stop().slideUp();
  });
  
  // lnb hover 효과
  $(".lnb li").hover(function(){
    let val = $(this).index();
    if(val%2 === 0){
      $(this).css({"background":"#FFE162"});
    } else {
      $(this).css({"background":"#548CFF"});
      $(this).find(">a").css({"color":"#fff"});
    }
  }, function(){
    $(".lnb li").css({"background":"#fcfcfc"});
    $(this).find(">a").css({"color":"#666"});
  });
  
  // side menu click 효과
  $(".sideBtn").click(function(){
    $(".sideMenu").stop().fadeToggle();
  });






});