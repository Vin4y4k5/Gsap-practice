
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

gsap.to("#page1 h1" , {
  delay: 0.25,
  duration: 1.2,
  y: 100,
  opacity:1,
})

