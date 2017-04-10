$(function(){
         $(".nav-right li").mouseover(function(){
             $(".nav-right li").eq($(this).index()).addClass("coe").siblings().removeClass("coe");
             $(".nav-right span").eq($(this).index()-1).removeClass("icon-moreunfold").addClass("icon-less");
             $(".nav-second").eq($(this).index()).addClass("cue");
         })
         $(".nav-right li").mouseout(function(){
             $(".nav-second").eq($(this).index()).removeClass("cue");
            $(".nav-right span").eq($(this).index()-1).removeClass("icon-less").addClass("icon-moreunfold");
         })
         $(".content-bgm").mouseover(function(){
             $(".content-bgm").removeClass("c1").addClass("c2");
             $(".content-bgm").mouseleave(function(){
                 $(".content-bgm").removeClass("c2").addClass("c1");
             })
         })
       $(".content-bgs").mouseover(function(){
        $(".content-bgs").removeClass("c3").addClass("c4");
        $(".content-bgs").mouseleave(function(){
            $(".content-bgs").removeClass("c4").addClass("c3");
        })
         })
       $(".content-bgd").mouseover(function(){
        $(".content-bgd").removeClass("c5").addClass("c6");
        $(".content-bgd").mouseleave(function(){
            $(".content-bgd").removeClass("c6").addClass("c5");
        })
          })

    $(".ty-back").hide();
               var  ss=function(){
                   var height=$(window).height();
                   $(window).scroll(function(){
                       if($(window).scrollTop()>height+200){
                           $(".ty-back").fadeIn(500);
                       }else{
                           $(".ty-back").fadeOut(500);
                       }
                   })
                   $(".ty-back").click(function(){
                       $('body,html').animate({scrollTop:0},1000);
                       return false;
                   });
               }
               ss();

})