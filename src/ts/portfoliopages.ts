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
// dragHoneycomb();

// const bgs = gsap.utils.toArray(".bg1, .bg2, .bg3");
// const honeycomb = document.querySelector(".honeycomb") as any;
// const hexagons = document.querySelector(".cell") as any;
// function dragHoneycomb() {
//   Draggable.create(( hexagons), {
//     type: "x",
//     edgeResistance: 0.5,
//     snap: { x: [0, -360, -680] },
//     zIndexBoost: false,
//     onDragEnd: function () {
//       let index = this.endX === 0 ? 2 : this.endX === -360 ? 1 : 0;
//       timeline.to(bgs, {
//         scale: (i: number) => i === index ? 1 : 2,
//         opacity: (i: number) => i === index ? 1 : 0
//       });
//     },
//     onClick(e: { target: { closest: (arg0: string) => any; }; }) {
//       // activate(items.indexOf(e.target.closest(".item")));
//     },
//     inertia: true,
//     allowContextMenu: false,
//     bounds: {
//       minX: -hexagons.offsetWidth + honeycomb.offsetWidth,
//       maxX: 0
//     },
//   });
// }
// function nextState() {
//   const state = Flip.getState(".honeycomb .cell", {props: "color,backgroundColor", simple: true}); // capture current state

//   Flip.from(state, {
//     absolute: true,
//     stagger: 0.07,
//     duration: 0.7,
//     ease: "power2.inOut",
//     simple: true,
//     onEnter: (elements: any, animation: any) => timeline.from(elements, {opacity: 0}, {opacity: 1, delay: animation.duration() - 0.1}),
//     onLeave: (elements: any) => timeline.to(elements, {opacity: 0})
//   });
// }

// class HoneycombAlign {
//   private cells: HTMLElement[];

//   constructor() {
//     this.cells = Array.from(document.querySelectorAll<HTMLElement>('.honeycomb .cell'));
//     console.log(`Total cells: ${this.cells.length}`);
//     this.arrangeInHoneycomb();
//     window.addEventListener('resize', () => this.arrangeInHoneycomb()); // Adjusting the event listener
//   }

//   private arrangeInHoneycomb(): void {
//     const cellWidth = this.cells[0].getBoundingClientRect().width;
//     const cellHeight = this.cells[0].getBoundingClientRect().height;
//     const containerWidth = document.querySelector('.honeycomb')?.getBoundingClientRect().width || 0;

//     const cellsPerRow = Math.floor(containerWidth / cellWidth);
//     const verticalSpacing = cellHeight * 0.75;

//     this.cells.forEach((cell, index) => {
//       const row = Math.floor(index / cellsPerRow);
//       const isEvenRow = row % 2 === 0;
//       const col = isEvenRow ? index % cellsPerRow : cellsPerRow - 1 - (index % cellsPerRow);

//       const leftOffset = col * cellWidth + (isEvenRow ? 0 : cellWidth / 2);
//       const topOffset = row * verticalSpacing;

//       cell.style.position = 'absolute';
//       cell.style.left = `${leftOffset}px`;
//       cell.style.top = `${topOffset}px`;

//       console.log(`Cell ${index + 1}: Left: ${leftOffset}px, Top: ${topOffset}px`);
//     });
//   }
// }

// const honeycomb = new HoneycombAlign();




// let tl = anime.timeline({
//     easing: 'easeInOutSine',
//     duration: 3000,
//     loop: false,
//   });
//   tl.add({
//     targets: '#name-g path',
//     opacity: [0, 1],
//   })
//     .add({
//     delay: 1000,
//     duration: 2700,
//     targets: '.line-away',
//     opacity: [1, 0]
//   }, 2700)
//     .add({
//     targets: '.brackets-animation',
//     opacity: [1, 0]
//   });


  // (() => {
  //   const isoddlen = (i:any) => i % 2;
  //   const align = () => {
  //     console.log('align function called');
  //     const cells = document.querySelectorAll('.honeycomb .cell') as any;
  //     let lastLeft = -500;
  //     let is_odd = false;
  
  //     for (let i = 0; i < cells.length; i++) {
  //       const pos = cells[i].getBoundingClientRect();
  
  //       if (pos.left < lastLeft) {
  //         is_odd = !is_odd;
  //         console.log('is_odd:', is_odd);
  //       }
  
  //       if (is_odd) {
  //         cells[i].classList.add('odd-row');
  //       } else {
  //         cells[i].classList.remove('odd-row');
  //       }
  
  //       lastLeft = pos.left;
  //     }
  //   };
  
  //   align();
  //   window.addEventListener('resize', align, false);
  // })();
  
  // (() => {
  //   function isoddlen(i: number) {
  //     return i % 2;

  //   }
  
  //   const align = () => {
  //     const cells = document.querySelectorAll('.honeycomb .cell') as any;
  //     let lastLeft = -500;
  //     let is_odd = false;
  //     let rows: Element[][] = [[]];
  //     let j = 0;
  //     for(let i = 0; i < cells.length; i++) {
  //       const pos = cells[i].getBoundingClientRect();
  //       if( pos.left < lastLeft ) {
  //         is_odd = !is_odd;
  //         j++;
  //         rows[j] = [];
  //       }
  //       rows[j].push( cells[i] );
  //       lastLeft = pos.left;
  //       if( is_odd ) {
  //         cells[i].classList.add('odd-row');
  //       } else {
  //         cells[i].classList.remove('odd-row');
  //       }
  //     }
  //     for( let i = 0; i < rows.length - 1; i++ ) {
  //       if( isoddlen( rows[i].length ) !== isoddlen( rows[i+1]?.length ) ) {
  //         for( let j = 0; j < rows[i+1]?.length; j++ ) {
  //           rows[i+1][j].classList.toggle('odd-row');
  //           console.log(isoddlen);
  //         }
  //       }
  //     }
  //   };
  //   align();
  //   window.addEventListener('resize', align, false);
  // })();
  
  

// bracketsMove();


// function bracketsMove() {
//   var elements = document.querySelectorAll('.brackets-animation');
//   anime({
//     easing: 'easeInOutQuad',
//     delay: 4000,
//     duration: 2500,
//     loop: false,
//     targets: elements,
//     translateX: { value: 1512 },
//     translateY: { value: 685 },
//     scale: [1, .13]
//   });
// }

//old imports
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
// import { style } from './@splidejs/utils/dom/style/style';
// import { addClass } from './@splidejs/utils/dom/addClass/addClass';


// old funcs 
// lineAway();

// function lineAway() {
//   var lineAwayVar = document.querySelectorAll('.line-away');
//   anime({

//     easing: 'easeOutSine',
//     duration: 5000,
//     loop: false,
//     targets: lineAwayVar,
//     delay: 6500,
//     translateX: 10000
//   });
//   console.log("it worky");
// }