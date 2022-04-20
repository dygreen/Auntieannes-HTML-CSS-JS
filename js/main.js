$(document).ready(function(){

  // **** header ****
  // gnb hover 효과: 이미지가 올라오는
  $("nav>ul>li").hover(function(){
    $(this).find(".menu_img").css({"opacity":"1"}).stop().animate({top: "40px"});
    $(this).find(">ul").stop().slideDown();
  }, function(){
    $(this).find(".menu_img").css({"opacity":"0"}).stop().animate({top: "61px"});
    $(this).find(">ul").stop().slideUp();
  });
  
  // gnb scroll 효과: 로고 가운데, 메뉴바 없앰 + top btn 나타남
  $(window).scroll(function(){
    if($(window).scrollTop() > 100){
      $(".logo img").addClass("logo_slide");
      $("nav>ul>li").hide();
      $(".sideMenu ul").css({"position":"fixed", "margin-right": "19%"});
      $("#top_btn").show();
    } else {
      $(".logo img").removeClass("logo_slide");
      $("nav>ul>li").show();
      $(".sideMenu ul").css({"position":"absolute","margin-right":"0"});
      $("#top_btn").hide();
    }
  });

  // lnb hover 효과: 짝/홀에 따라 배경색이 달라지는
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
  

  // **** side menu ***
  // side menu click 효과: 클릭하면 side 메뉴가 나타나는
  side = true;
	$(".sideBtn").click(function(){
		$(this).toggleClass("sideBtn_toggle");

		if(side){
			$(".sideMenu>ul").stop().animate({marginTop:"390px", "right":"0px"},500,"easeOutBack",function(){
				side=false;
			});	
		} else {
			$(".sideMenu>ul").stop().animate({marginTop:"0px"},500,function(){
				side=true;
			});
		}
	});


  // **** slide ****
  let img=$(".slide ul");
  let img_list=$(".slide ul li");
  let btn=$(".btn_bottom ul li");
  let next=$(".btn_side .next");
  let prev=$(".btn_side .prev");
  let img_width=img_list.width();
  let img_leng=img_list.length;
  let img_old=0; 
  let img_new=0;

  // 메인 비주얼: 이미지 이동
  function slideImg(img_new){
    targetX = -(img_new*img_width);
    img.animate({left:targetX}, 600); 
    btn.eq(img_old).removeClass("active");
    btn.eq(img_new).addClass("active"); 
    img_old=img_new;
  }

  // 슬라이드 자동재생
  function slideAuto(){
    img_new++;
    if(img_new==img_leng){
      img_new=0;
    }
    slideImg(img_new);
  };

  auto=setInterval(slideAuto,4000);

  // 하단버튼 클릭
  btn.click(function(){
    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    img_new=$(this).index();
    slideImg(img_new);
    auto=setInterval(slideAuto,4000); 
  });

  // 좌우버튼
  next.click(function(){
    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    img_new++;
    if(img_new>img_leng-1){
      img_new=0;
    }
    slideImg(img_new);
    auto=setInterval(slideAuto,4000);
  });

  prev.click(function(){
    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    img_new--;
    if(img_new<0){
      img_new=img_leng-1; 
    }
    slideImg(img_new);
    auto=setInterval(slideAuto,4000);
  });

  // Play, Stop 버튼
  $(".play").hide(); 

  $(".stop").click(function(){
    clearInterval(auto);
    $(".stop").hide();
    $(".play").show();
  });
  
  $(".play").click(function(){
    auto=setInterval(slideAuto,4000);
    $(".play").hide();
    $(".stop").show();
  });


  // *** section ***
  // 수동 슬라이드 : 이미지 hover효과(배경이 깔리는)
  $(".event_slide li").hover(function(){
    num = $(this).index();
    $(".event_slide .block").eq(num).show();
    $(".event_slide .block").eq(num).addClass(`slide_background slide_color${num+1}`);
    $(".event_slide .block p").eq(num).addClass("slide_text"); 
  },function(){
    $(".event_slide .block").eq(num).hide();
  });

  // 수동 슬라이드 + 이전/다음버튼
  let pic = 0;
  // next btn
  $("#event .btn_next").click(function(){ 
    if(pic < 3){
      $(".event_slide ul").stop(true,true).animate({marginLeft:"-=780px"},1000);
      pic++;

      // 이미지가 처음 또는 마지막일때 좌우버튼 이미지 바꾸기
      if(pic == 0){
        $("#event .btn_prev").hide();
      } else {
        $("#event .btn_prev").show();
      }

      if(pic == 2){
        $("#event .btn_next").hide();
      } else {
        $("#event .btn_next").show();
      }
    };
  });
  
  // prev btn
  $("#event .btn_prev").click(function(){ 
    if(pic > 0){
      $(".event_slide ul").stop(true,true).animate({marginLeft:"+=780px"},1000);
      pic--;

      // 이미지가 처음 또는 마지막일때 좌우버튼 이미지 바꾸기
      if(pic == 0){
        $("#event .btn_prev").hide();
      } else {
        $("#event .btn_prev").show();
      }

      if(pic == 2){
        $("#event .btn_next").hide();
      } else {
        $("#event .btn_next").show();
      }
    };
  });


  // *** identity ***
  // 스크롤 효과: 해당 지점에 오면 텍스트 애니메이션
  $(window).scroll(function(){
    if($(window).scrollTop() > 1060){
      $("#ident .ident1").show().addClass("ident1_slide");
      $("#ident .ident2").show().addClass("ident2_slide");
    } else {
      $("#ident .ident1").hide().removeClass("ident1_slide");
      $("#ident .ident2").hide().removeClass("ident2_slide");
    }
  });

  
  // *** tab menu ***
  let button = $("#tab .tab_button>li");
  let content = $("#tab .tab_content>li");

  for(let i = 0; i < button.length; i++){
    button.eq(i).click(function(){
      tab(i);
    });
  }

  function tab(i){
    button.removeClass("selected");
    button.eq(i).addClass("selected");
    content.removeClass("show");
    content.eq(i).addClass("show");
  }
});