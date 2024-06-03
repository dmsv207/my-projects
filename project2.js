function cursoreffect(){
var videocon=document.querySelector("#video-container")
var playbtn=document.querySelector("#play")


videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn, {
        x:dets.x,
        y:dets.y,
        delay: 0.1,
        duration:0.5
    })
}
)
videocon.addEventListener("mouseenter", function() {
    gsap.to(playbtn, {
        scale: 1,
        opacity:1
    });
});

videocon.addEventListener("mouseleave", function() {
    gsap.to(playbtn, {
        scale: 0,
        opacity:0
    });
});
}
cursoreffect()


function loadinganimation() {
    gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#page1 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
  }
  loadinganimation();



  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})
