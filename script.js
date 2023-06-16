function init(dets) {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
          };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

init()

gsap.to("#loading-page",{
    y:"-100%",
    duration:-1,
    delay:3,
})

// gsap.from("span",{
//   opacity:0,
//   delay:4,
//   onStart:function(){
//       $('span').textillate({
//            in: { effect: 'fadeInUp',
//           } ,
          
//           });
//   }
// })
// gsap.from("h2",{
//   opacity:0,
//   delay:4,
//   onStart:function(){
//       $('h2').textillate({
//            in: { effect: 'fadeInUp',
//           } ,
          
//           });
        
//   },
// })


gsap.to("#page2 video",{
  scale:2.4,
  scrollTrigger:{
    trigger:"#page2 video",
    scroller:"#main",
    start:"top 70%",
    end:"top 45%",
    // markers:true,
    scrub:1,

  }
})
//////////////////////////#one//////////////////////////////////////////////////////////
var circle = document.querySelector("#circle-div")
var one = document.querySelector("#one")
one.addEventListener("mouseenter",function(){
  circle.style.scale = 1
  circle.style.overflow = "hidden"
  one.style.scale  = 0.95
  // video.style.scale = 1.1
})
one.addEventListener("mouseleave",function(){
  circle.style.scale = 0
  // one.style.scale  = 1
  // video.style.scale = 1
})
one.addEventListener("mousemove",function(dets){
  circle.style.left = (dets.x-10) + "px"
  circle.style.top = (dets.y-10) + "px"
})


//////////////////////////#tow//////////////////////////////////////////////////////////

var two = document.querySelector("#two")


two.addEventListener("mouseenter",function(){
  circle.style.scale = 1
  circle.style.overflow = "hidden"
  // one.style.scale  = 0.95
  // video.style.scale = 1.1
})
two.addEventListener("mouseleave",function(){
  circle.style.scale = 0
  // one.style.scale  = 1
  // video.style.scale = 1
})
two.addEventListener("mousemove",function(dets){
  circle.style.left = (dets.x-10) + "px"
  circle.style.top = (dets.y-10) + "px"
  
})

//////////////////////////#three//////////////////////////////////////////////////////////
var three = document.querySelector("#img-div")
var cir = document.querySelector("#circle")

three.addEventListener("mouseenter",function(){
  cir.style.scale = 1
  cir.style.overflow = "hidden"
  // one.style.scale  = 0.95
  // video.style.scale = 1.1
})
three.addEventListener("mouseleave",function(){
  cir.style.scale = 0
  // one.style.scale  = 1
  // video.style.scale = 1
})
three.addEventListener("mousemove",function(dets){
  cir.style.left = (dets.x-10) + "px"
  cir.style.top = (dets.y-10) + "px"
  
})
///////////////////////////four///////////////////////////////////////
var four = document.querySelector("#img-div2")


four.addEventListener("mouseenter",function(){
  cir.style.scale = 1
  cir.style.overflow = "hidden"
  // one.style.scale  = 0.95
  // video.style.scale = 1.1
})
four.addEventListener("mouseleave",function(){
  cir.style.scale = 0
  // one.style.scale  = 1
  // video.style.scale = 1
})
four.addEventListener("mousemove",function(dets){
  cir.style.left = (dets.x-10) + "px"
  cir.style.top = (dets.y-10) + "px"
  
})

///////////////////////////five///////////////////////////////////////
var circle2 = document.querySelector("#circle3")
var vdiv = document.querySelector("#video-div")

vdiv.addEventListener("mouseenter",function(){
  circle2.style.scale = 1
  circle2.style.overflow = "hidden"
  // one.style.scale  = 0.95
  // video.style.scale = 1.1
})
vdiv.addEventListener("mouseleave",function(){
  circle2.style.scale = 0
  // one.style.scale  = 1
  // video.style.scale = 1
})
vdiv.addEventListener("mousemove",function(dets){
  circle2.style.left = (dets.x-10) + "px"
  circle2.style.top = (dets.y-10) + "px"
  
})

// gsap.to("#page7 h1",{
//   x:-2600,
//   duration:10,
//   delay:7,

//   scrollTriggr:{
//     trigger:"#page7 h1",
//     scroller:"#main",
//     start:"top 75%",
//     end:"top 55%",
//     markers:true,
//     scrub:3
//   }
// })

gsap.to("#page7", {
  x:-3115,
  backgraoungolor:"blue",
  scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      start: "top 0%",
      end: "top -100%",
      scrub: true,
      pin: true,
      // markers: true
}
})

// var h1  = document.querySelector("h1");
//  var clutter = "";
// h1.textContent.split("").forEach(function(c){
// clutter += `<span>${c}</span>`

// });

// h1.innerHTML = clutter;
// // console.log(h1);
// gsap.to("span",{
//     y:10,
//     opacity:1,
//     stagger:.1,
//     ease:Expo,
//     duration:2,
//   delay:5

// })
// gsap.to("#page3 h1",{
//   onStart: function () {
//       $('#page3  h1').textillate({
//           in: {
//               effect: 'fadeInUp'
//           }
//       });
//   },
//   scrollTrigger:{
//       scroller:"#main",
//       trigger:"#page3  h1",
//       start:"top 34%",
//       end:"top 55%",
//       markers:true,
//       scrub:3,
//     },
// })