
var tl = gsap.timeline();

tl.from("#nav h3" , {
  y: -50,
  stagger: 0.2,
  opacity: 0 ,
  delay: 0.4,
  duration: 1,
})

gsap.from("footer h3" , {
  stagger: 0.2,
  opacity: 0,
  delay: 0.4,
  duration: 1,
})

tl.from("#main h1" , {
  x: -50,
  stagger: 0.2,
  opacity: 0 ,
  delay: 0.4,
  duration: 1,
})

gsap.from("img" , {
  x:100 ,
  stagger: 0.5,
  opacity: 0 ,
  delay: 3,
  duration: 1,
  rotate: 45,
})

