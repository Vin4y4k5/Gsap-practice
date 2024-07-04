
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
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


 
var allH1 = document.querySelectorAll("#page2 h1");
console.log(allH1);
allH1.forEach(function(elem){
  var clutter = ""
  console.log(elem)
  var h1Text = elem.textContent
  console.log(h1Text)
  var splittedText = h1Text.split("")
  console.log(splittedText)
  splittedText.forEach(function(e){
    console.log(e)
    clutter += `<span>${e}</span>`
  })
  elem.innerHTML = clutter
  console.log(elem)
});



gsap.to("#page2 h1 span" , {
  color: "cornsilk",
  stagger:0.1,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "#main",
    start : "top 20%",
    end : "top 20%",
    scrub: 3,
  }
})

