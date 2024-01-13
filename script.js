const scroll = new LocomotiveScroll({
  el: document.querySelector("#scroll"),
  smooth: true,
});

//  For the About and Past Experience Section

var about_tablinks = document.getElementsByClassName("detail-links");
var detail_contents = document.getElementsByClassName("about-contents");

function selectTab(tabName) {
  for (tab of about_tablinks) {
    tab.classList.remove("active-link1");
  }
  for (tabcontent of detail_contents) {
    tabcontent.classList.remove("active-tab1");
  }
  event.currentTarget.classList.add("active-link1");
  document.getElementById(tabName).classList.add("active-tab1");
}

// For About Section Desc
var tablinks = document.getElementsByClassName("tab-links-about");
var tabcontents = document.getElementsByClassName("tab-contents-about");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link-about");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab-about");
  }
  event.currentTarget.classList.add("active-link-about");
  document.getElementById(tabname).classList.add("active-tab-about");
}

// for Experience Desc

var tablinks_exp = document.getElementsByClassName("tab-links-exp");
var tabcontents_exp = document.getElementsByClassName("tab-contents-exp");

function opentab_exp(tabname) {
  for (tablink of tablinks_exp) {
    tablink.classList.remove("active-link-exp");
  }
  for (tabcontent of tabcontents_exp) {
    tabcontent.classList.remove("active-tab-exp");
  }
  event.currentTarget.classList.add("active-link-exp");
  document.getElementById(tabname).classList.add("active-tab-exp");
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

