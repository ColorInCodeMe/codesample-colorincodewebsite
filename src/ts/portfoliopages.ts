//imports
import Reveal from 'reveal.js';
import anime from 'animejs/lib/anime.es.js';
// jquery import
import * as jquery from 'jquery';
(window as any).$ = (window as any).jQuery = jquery;
// gsap and scrollmagic imports
import gsap, { SteppedEase } from './gsap/all'
import { Timeline } from './gsap/gsap-core';
import ScrollMagic from './scrollmagic/ScrollMagic';
import TextPlugin, { EasePack } from './gsap/all';
import {TimelineMax, TimelineLite} from './gsap/all';
import { TweenLite } from './gsap/all';
import { Power4, TweenMax } from './gsap/gsap-core';
import { Flip } from './gsap/all';
import Draggable from './gsap/all';
// import { timeline } from 'animejs';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(EasePack);
gsap.registerPlugin(TimelineMax);
gsap.registerPlugin(TimelineLite);
gsap.registerPlugin(TweenLite);
gsap.registerPlugin(TweenMax);
gsap.registerPlugin(SteppedEase);
gsap.registerPlugin(Timeline);
gsap.registerPlugin(Power4);
gsap.registerPlugin(Flip);
gsap.registerPlugin(Draggable);
//vars 
const firstofDeck = document.querySelector('.portfoliopagegrid__wrapper') as HTMLElement;
let timeline = gsap.timeline();
// const Draggable = gsap.Draggable;
// let draggable = gsap.utils.toArray(".honeycomb .cell");
//reveal init
let deck = new Reveal(
  {
    disableLayout: true,
    center: false,
    hash: true,
    mouseWheel: false,
    transition: 'slide',
    transitionSpeed: 'slow',
    backgroundTransition: 'slide',
    width:'100%', //needs-fix
    height: '100%', //needs-fix
    margin: 0,
    minScale: 1,
    maxScale: 1
})

deck.initialize();
console.log('be a deck');

// reveal layout first slide
// if (firstofDeck) {
//     firstofDeck.style.width = '100vw';
//     firstofDeck.style.height = '100%';
//     firstofDeck.style.display = 'flex !important';
//     console.log('first of deck resized');
//     Reveal.layout();
// }

// gsap.registerPlugin(Flip);

function nextState() {
  const state = Flip.getState(".row", {
    props: "marginLeft, display, transform, opacity",
    // absolute: true,
    // normal: true,
    simple: true
  });

  Flip.to(state, {
    duration: 1.8,
    ease: "power4.inOut",
    stagger: 0.5,
    absolute: true,
    // scale:false,
    // style: { 
    //   transform: "scale(0.5)", 
    //   marginLeft: "0px",
    //   display: "flex",
    // },
    fade: true,

    // absoluteOnLeave: true,
    toggleClass: "odd-row",
    onEnter: (elements:any, animation:any) => timeline.from(elements, {
      opacity: 0,
      duration: 0.5,
      delay: animation.duration() - 0.1
    }),
    // onLeave: (elements: any) => timeline.to(elements, { opacity: 0 })
  });
}

window.addEventListener("load", nextState);
console.log('next state called');

window.addEventListener("resize", onResize);

function onResize() {

  const state = Flip.getState(".honeycomb .cell", {
    props: "marginLeft, display, transform, opacity",
    // absolute: true,
    // normal: true,
    simple: true
  });

  Flip.from(state, {
    duration: 1.8,
    ease: "power4.inOut",
    stagger: 0.85,
    absolute: true,
    scale:true,
    // style: { 
    //   transform: "scale(0.5)", 
    //   marginLeft: "0px",
    //   display: "flex",
    // },
    fade: true,

    // absoluteOnLeave: true,
    toggleClass: "honeycomb-mobile",
    onEnter: (elements:any, animation:any) => timeline.from(elements, {
      opacity: 0,
      duration: 0.5,
      // delay: animation.duration() - 0.1
    }),
    onLeave: (elements: any) => timeline.to(elements, { opacity: 0 })
  });
  Flip.fit(".honeycomb", {
    // absolute: true,
    // simple: true
  });
  // Flip.fit(".row", { 
    
  //   absolute: true, 
  //   simple: true });
}
