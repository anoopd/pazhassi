const mobile_menu = document.querySelector('.mobile-menu');

const nav = document.querySelector('.nav');

mobile_menu.addEventListener('click',(e) => {
    e.preventDefault();
    mobile_menu.classList.toggle('open');
    nav.classList.toggle('toggle');
});

/* Greensock Details goes here */

var tl = gsap.timeline();

tl.from('.logo',{opacity:0, ease: 'poser1.inOut'})
  .from('.nav li',{opacity:0,x:20,stagger:0.1,ease:"power1.inOut"})
  .from('.tel-no',{opacity: 0,ease:'poser1.inOut'})


  /* Greensock Animation About Us Page */
  var tabout = gsap.timeline();

  tabout.from('.about-hero__left h1',{opacity:0,ease:"power1.inOut"})
        .from('.about-hero__right p',{opacity:0,x:20,ease:"poser1.inOut"})
        .from('.about-center p',{opactiy:0, ease:'poser1.inOut'})
        .from('.about-bottom__left p',{ opacity:0,x:-20, ease: 'poser1.inOut'})

/* Contact Page Animations */
var tcontact = gsap.timeline();

tcontact.from('.contact-left .content', { opacity: 0,x: -20, ease: "poser1.inOut" })
        .from('.contact-right form', { opacity:0, x: 20, ease:"poser1.inOut"})

/* Appeal Page Animations */

