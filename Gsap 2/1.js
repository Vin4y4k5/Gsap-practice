
gsap.to("#page2 h1", {
  transform: "translateX(-58%)", // Adjust this value as needed
  scrollTrigger: {
    trigger: "#page2",
    scroller:"body",
    start: "top 0%",
    end: "end -100%",
    scrub: 3,
    pin: true,
  }
});

