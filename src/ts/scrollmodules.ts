
// gsap and scrollmagic imports
import gsap, { SteppedEase } from './gsap/all'
// import SmoothScroll from './gsap/SmoothScroll';
import ScrollMagic from './scrollmagic/ScrollMagic';
// import TimelineMax  from 'gsap/gsap-core';
import TextPlugin, { EasePack } from './gsap/all';
import {TimelineMax, TimelineLite} from './gsap/all';
import { TweenLite } from './gsap/all';
import { Power4, TweenMax } from './gsap/gsap-core';

// jquery import/export, will need this for build to compile correctly 
import * as jquery from 'jquery';
import { time } from 'console';
(window as any).$ = (window as any).jQuery = jquery;


gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(EasePack);
gsap.registerPlugin(TimelineMax);
gsap.registerPlugin(TimelineLite);
gsap.registerPlugin(TweenLite);
gsap.registerPlugin(TweenMax);
gsap.registerPlugin(SteppedEase);
// gsap.registerPlugin(SmoothScroll);

// scrollmagic controller
console.log("scrollmagic and gsap controller loaded");

var ctrl = new ScrollMagic.Controller();

// // Create scenes in jQuery each() loop
// $("section").each(function(i) {
//   var inner = $(this).find(".inner");
//   var outer = $(this).find(".outer");
//   var tl = new TimelineMax();
  
//   tl.from(outer, 0.25, { scaleX: 0 });
//   tl.from(inner, 0.65, { yPercent: 100, ease: Back.easeOut });
  
//   new ScrollMagic.Scene({
//     triggerElement: this,
//     triggerHook: 0.15
//   })
//     .setTween(tl)
//     // .addIndicators()
//     .addTo(ctrl);
// });




class ScrollComponent {
    constructor() {
      this.scrollMe();
      TimelineMax as any;
    }
  
    scrollMe(): void {
    
      const tl = new TimelineMax({ onUpdate: this.updatePercentage });
      const tl2 = new TimelineMax() as any;
      const controller = new ScrollMagic.Controller();
  
      tl.from('blockquote', 0.5, { x: 200, opacity: 0 });
      tl.from('span', 1, { width: 0 }, '=-0.5');
      tl.from('#office', 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, '=-1');
      tl.from('#building', 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, '=-0.7');
  
      tl2.from('#box', 1, { opacity: 0, scale: 0 });
      tl2.to('#box', 0.5, {
        left: '20%',
        scale: 1.3,
        borderColor: 'white',
        borderWidth: 12,
        boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)',
      });
  
      const scene = new ScrollMagic.Scene({
        triggerElement: '.sticky',
        triggerHook: 'onLeave',
        duration: '100%',
      })
        .setPin('.sticky')
        tl.setTween()
        .addTo(controller);
  
      const scene2 = new ScrollMagic.Scene({
        triggerElement: 'blockquote',
      })
        tl2.setTween()
        .addTo(controller);
    }
  
    updatePercentage(): void {
      // Add your callback logic here
      // Example: const percent = document.getElementById('percent');
      // percent.innerHTML = (tl.progress() * 100).toFixed();
      // console.log(tl.progress());
    }
  }
  
  // Instantiate the component
  new ScrollComponent();

  // document.addEventListener('DOMContentLoaded', () => { 
//   // init controller
//   let controller = new ScrollMagic.Controller();
//   const revealElements = Array.prototype.slice.call(document.querySelectorAll('.digit'), 0);

//     for (var i=0; i<revealElements.length; i++) { // create a scene for each element
//     new ScrollMagic.Scene({
//               triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
//               offset: 50,												 // start a little later
//               triggerHook: 0.9,
//             })
//             .setClassToggle(revealElements[i], "visible") // add class toggle
//             // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
//             .addTo(controller);
//   } // closing for loop
// }); //closes DOMContentLoaded scrollMagic


// scrollMe();

// function scrollMe() {
//     var tl = new TimelineMax({ onUpdate: updatePercentage });
//     var tl2 = new TimelineMax();
//     const controller = new ScrollMagic.Controller();

//     tl.from('blockquote', .5, { x: 200, opacity: 0 });
//     tl.from('span', 1, { width: 0 }, "=-.5");
//     tl.from('#office', 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, "=-1");
//     tl.from('#building', 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, "=-.7");

//     tl2.from("#box", 1, { opacity: 0, scale: 0 });
//     tl2.to("#box", .5, { left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)' });

//     const scene = new ScrollMagic.Scene({
//         triggerElement: ".sticky",
//         triggerHook: "onLeave",
//         duration: "100%"
//     })
//         .setPin(".sticky")
//         .setTween(tl)
//         .addTo(controller);

//     const scene2 = new ScrollMagic.Scene({
//         triggerElement: "blockquote"
//     })
//         .setTween(tl2)
//         .addTo(controller);


//     function updatePercentage() {
//         //percent.innerHTML = (tl.progress() *100 ).toFixed();
//         tl.progress();
//         console.log(tl.progress());
//     }
// }
