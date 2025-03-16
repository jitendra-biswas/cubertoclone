var cursor = document.querySelector(".main .cursor");
var page = document.querySelector(".main");
var page2 = document.querySelector(".page2");
var bar = document.querySelector(".bar");
var menu = document.querySelector(".bar #menu");
var closeMenu = document.querySelector(".bar #close-menu");
var contents = document.querySelectorAll(".featured-section .featured-content .col1 .content");
var contents2 = document.querySelectorAll(".featured-section .featured-content .col2 .content");
var sideNav_p = document.querySelectorAll(".side-nav .sidenav-part1 .col1 .social-media p");
var sideNav_h1 = document.querySelectorAll(".side-nav .sidenav-part1 .col2 h1");
var swiper_slide = document.querySelectorAll(".swiper-slide ");


function cursorAnimation(){
    
page.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
       x:dets.x,
       y:dets.y,
       opacity:1,
       duration:0.2,
       ease:Expo
    })
})

page2.addEventListener("mouseenter",function(){
   gsap.to(".cursor",{
       scale:6,
       duration:0.2,
         mixBlendMode:"unset"
   })
   gsap.to(".cursor #cursortext1",{
    display:"block",
       opacity:1
   })

   
})

page2.addEventListener("mouseleave",function(){
   gsap.to(".cursor",{
       scale:1,
       duration:0.2,
         mixBlendMode:"difference"
       
   })
   gsap.to(".cursor #cursortext1",{
    display:"none",
       opacity:0
   })
})

bar.addEventListener("mousemove",function(){
   gsap.to(".cursor",{
       scale:4,
       duration:0.2,
   })

   gsap.to(".bar",{
    backgroundColor:"transparent"
   })

   gsap.to(".bar i",{
    color:"gray"
   })


})

bar.addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
        scale:1,
        duration:0.2,
    })
 
    gsap.to(".bar",{
     backgroundColor:"white"
    })
 
    gsap.to(".bar i",{
     color:"black"
    })

})
}
cursorAnimation();

function page1_textAnimation(){
    
var tl = gsap.timeline();
tl.from(".logo img",{
    x:-50,
    opacity:0,
    delay:0.5
})

tl.from("nav p",{
    x:-50,
    opacity:0,
    delay:-0.5
})


tl.from(".bar",{
    x:-50,
    opacity:0,
    delay:-0.4
})


tl.from(".page1-text .row1 h1",{
    y:160,
    opacity:0,
    delay:-0.4,
    duration:0.7,
    stagger:0.05,
    ease:"expoEase"
},"a")
tl.from(".page1-text .row2 .video",{
    y:160,
    opacity:0,
    delay:-0.5,
    scale:0,
    duration:0.7,
       ease:"expoEase"
},"a")

tl.from(".page1-text .row2 h1",{
    y:160,
    opacity:0,
    delay:-0.1,
    duration:0.7,
    stagger:0.05,
       ease:"expoEase"
},"a")

tl.from(".page1-text .row3 h1",{
    y:160,
    opacity:0,
    delay:-0.1,
    duration:0.7,
    stagger:0.05,
       ease:"expoEase"
},"a")

}
page1_textAnimation();


function featured_contentAmimatins(){
    contents.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            gsap.to(".cursor",{
                scale:6,
                duration:0.2,
                mixBlendMode:"unset"
            })
            gsap.to(".cursor #cursortext1",{
                display:"block",
                opacity:1
            })
         })
         
         e.addEventListener("mouseleave",function(){
            gsap.to(".cursor",{
                scale:1,
                duration:0.2,
                  mixBlendMode:"difference"
                
            })
            gsap.to(".cursor #cursortext1",{
                display:"none",
                opacity:0
            })
         })
         
    })

    contents2.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            gsap.to(".cursor",{
                scale:6,
                duration:0.2,
                mixBlendMode:"unset"
            })
            gsap.to(".cursor #cursortext1",{
                display:"block",
                opacity:1
            })
         })
         
         e.addEventListener("mouseleave",function(){
            gsap.to(".cursor",{
                scale:1,
                duration:0.2,
                  mixBlendMode:"difference"
                
            })
            gsap.to(".cursor #cursortext1",{
                display:"none",
                opacity:0
            })
         })
         
    })

    
    
}
featured_contentAmimatins();


function sideNav_Animatin(){
    
var tl2 = gsap.timeline();

closeMenu.addEventListener("click",function(){
    menu.style.display = "flex";
    closeMenu.style.display = "none";
})

menu.addEventListener("click",function(){
    menu.style.display = "none";
    closeMenu.style.display = "flex"

})

tl2.to(".side-nav",{
    right:0,
},"a");


tl2.pause();

menu.addEventListener("click",function(){
    tl2.play();
})

closeMenu.addEventListener("click",function(){
    tl2.reverse();
},)



sideNav_p.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
           scale:5
        })
   })
   
   
   e.addEventListener("mouseleave",function(){
       gsap.to(".cursor",{
          scale:1
       })
   })
})


sideNav_h1.forEach((e)=>{
    e.addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
           scale:5
        })
   })
   
   
   e.addEventListener("mouseleave",function(){
       gsap.to(".cursor",{
          scale:1
       })
   })
})


}
sideNav_Animatin();

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
      });
    
      swiper_slide.forEach(function(e){
           e.addEventListener("mouseenter",function(){
            gsap.to(".cursor",{
                scale:7,
                mixBlendMode: "unset",
            }),
            
            gsap.to(".cursor #cursortext2",{
                display:"block",
                opacity:1
            })
           })
    
           e.addEventListener("mouseleave",function(){
            gsap.to(".cursor",{
                scale:1,
                mixBlendMode:"difference"
            })
            gsap.to(".cursor #cursortext2",{
                display:"none",
                opacity:0
            })
           })
      })
}
swiperAnimation();



function featured_Textanimation(){
    gsap.from(".featured-section .heading .row1 h1",{
        scrollTrigger:{
            trigger:".featured-section",
            scroller:"body",
            start: "top 50%",
        },
        
        yPercent:100,
        duration:0.5
    })
    
    gsap.from(".featured-section .heading .row2 h1",{
        scrollTrigger:{
            trigger:".featured-section",
            scroller:"body",
            start: "top 50%",
        },
        
        yPercent:100,
        delay:0.1
    })
}
featured_Textanimation();

function development_textAnimation(){
    var devtl = gsap.timeline({
        scrollTrigger:{
            trigger:".development_heading",
            scroller:"body",
            start: "top 50%",
        },
    })
    
    devtl.from(".development_heading .row1 h1",{
        yPercent:100,
        duration:0.4
    })
    
    devtl.from(".development_heading .row2 h1",{
        yPercent:100,
        duration:0.4,
        delay:-0.3
    })
    
    devtl.from(".development_heading .row3 h1",{
        yPercent:100,
        duration:0.4,
        delay:-0.2
    })
}
development_textAnimation();

gsap.from(".video-overlay h1",{
    scrollTrigger:{
        trigger:"footer",
        scroller:"body",
        start: "top 50%",
  
    },
    y:200,
    opacity:0,
    duration:1
})