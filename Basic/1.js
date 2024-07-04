

gsap.to("#box" , {
  x: 100,
  duration: 2,
  delay : 1,
  rotate : 180,
  scale: 0.5,
  backgroundColor: "blue",
})

// timeline
var tl = gsap.timeline()

tl.to("#box1" , {
  x: 300,
  duration: 2,
  delay : 1,
  rotate : 180,
  scale: 0.5,
  backgroundColor: "blue",
})

tl.to("#box2" , {
  x: 100,
  duration: 2,
  rotate : 180,
  scale: 0.5,
  backgroundColor: "blue",
})


gsap.from("#side2 h1" , {
  x: 50,
  stagger: 0.5,
  opacity: 0,
  delay: 4,
  duration: 1,

})

gsap.from("#page2 #circle" , {
  scale: 0,
  delay: 1,
  duration:1,
  rotate: 720,
})

gsap.from("#page3 #circle" , {
  scale: 0,
  delay: 0,
  duration:1,
  rotate: 720,
  scrollTrigger: {
    trigger: "#page3 #circle",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub:3,
  }
})

gsap.to("#page4 img" , {
  width: "80%",
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin:true,
  }
})

