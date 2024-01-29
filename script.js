const scroll = new LocomotiveScroll({
  el: document.querySelector("#scroll"),
  smooth: true,
});

// For About Section Desc
var tablinks = document.getElementsByClassName("tab-links-about1");
var tabcontents = document.getElementsByClassName("tab-contents-about");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link-about1");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab-about");
  }
  event.currentTarget.classList.add("active-link-about1");
  document.getElementById(tabname).classList.add("active-tab-about");
}



/* ------Minicircle-------- */

function circleMouceFollower(xscal, yscal) {
  window.addEventListener("mousemove", function (details) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscal}, ${yscal})`;
  });
}

function HomeAnimation(){
  var time = gsap.timeline()
  time.from("#nav",{
    y:"-10",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  })

  .to(".boundingelem", {
    y: "0",
    duration: 2,
    ease: Expo.easeInOut,
    stagger : 0.1,
    delay : -1,
  })
  .from(".homebottom", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInout,
  });
}


circleMouceFollower(1,1);
HomeAnimation();

