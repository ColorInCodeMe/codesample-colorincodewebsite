// global for all four classes
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

// Iterate over each box and set up GSAP flip effect

const timeline = gsap.timeline;
const houseElements = Array.from(document.querySelectorAll('.hpfluidcontainer'));
let currentHouse = null as any;
const feTurb = document.querySelector('#feturbulence') as SVGElement; 
const flipStates = new Map(); 

console.log(houseElements);
console.log(feTurb);
function customRipple() {

    let state = Flip.getState(feTurb); 
    // feTurb.classList.toggle("show-filter");
    Flip.from(state, {
        // visibility: { visibility: "visible"},
        attr: { baseFrequency: "0.01 0.02" },
        duration: 2.8,
        fade: true,
        absolute: true,
        absoluteOnLeave: true,
        // toggleClass: "turbulence-filter",
        ease: "power4.easeInOut",
        nested: true,
        zIndex: 1,
    });
}
console.log("custom ripple loaded");
function rippleOff() {
    const gryffindor = document.querySelector('#hphouse--box--gryffindor') as HTMLElement;
    const slytherin = document.querySelector('#hphouse--box--slytherin') as HTMLElement;
    const ravenclaw = document.querySelector('#hphouse--box--ravenclaw') as HTMLElement;
    const hufflepuff = document.querySelector('#hphouse--box--hufflepuff') as HTMLElement;
   
        
 
    gryffindor.addEventListener('mouseleave', function() {
        console.log("left gryff");
        let state = Flip.getState(this); // This references the current hovered element
        let animating = Flip.getElementState(this);
        // console.log("animating", animating);
        if (animating) {
            console.log("animating");
        } else {
rippleOff();
            console.log("not animating");
        }
    });

}

console.log("ripple off");
// Function to handle mouse enter event for each house
function handleMouseEnter(house:any) {
  return function() {
    customRipple();
      // Kill the flip of the current house if it's not the one being hovered over
      if (currentHouse !== house) {
    //    Flip.isFlipping();
          Flip.killFlipsOf();
        Flip.from(feTurb, {
            attr: { baseFrequency: "0.01 0.02" },
            duration: 2.8,
            fade: true,
            absolute: true,
            absoluteOnLeave: true,
            toggleClass: "turbulence-filter",
            ease: "power4.easeInOut",
            delay: 1.5 
        });
      }

      console.log("hover");
      // Set the current house to the hovered house
      currentHouse = house;
  };
}

  // Function to handle mouse leave event for each house
  function handleMouseLeave(house:any) {
    return function() {
        console.log("leave");
        rippleOff();
        resetFlipState(house);
      // Reset the current house when the mouse leaves
      currentHouse = null;
    };
  }
  // Function to reset the flip state for a house
function resetFlipState(house:any) {
    if (flipStates.has(house)) {
        const state = flipStates.get(house);
        Flip.from(state); // Reset the flip state for the house
    }
}


houseElements.forEach(house => {


    house.addEventListener('mouseenter', handleMouseEnter(house));
    house.addEventListener('mouseleave', handleMouseLeave(house));
    const state = Flip.getState(house);
    flipStates.set(house, state);

   
});


// function MagicReveal(house:any) {
//     const spellElement = document.getElementById(`spell--${house}`) as HTMLElement;

//     spellElement.addEventListener("mouseover", function () {
//        timeline.to(this, {
//             duration: 2.8,
//             visibility: "visible",
//             display: "grid",
//             ease: "power4.inOut"
//         });
//     });

//     spellElement.addEventListener("mouseleave", function () {
//         timeline.to(this, {
//             duration: 2.8,
//             visibility: "hidden",
//             display: "none",
//             ease: "power4.inOut"
//         });
//     });
// }

// houses.forEach(house => {
//     MagicReveal(house);
//     console.log("magic reveal loaded");
// });

// $('.sp19--hp--gryffindor').on("mouseover" , function() {
// 	const bodyWidth = document.body.clientWidth;
// 	const bodyHeight = document.body.clientHeight;
// 	const randPosX = Math.floor(Math.random() * (300 - 1) + 10);
// 	const randPosY = Math.floor(Math.random() * (300 - 1) + 10);
// 	const posLog = document.getElementById('spellgryff');
// 	const posXY = 'x: ' + randPosX + '<br />' + 'y: ' + randPosY;

// 	$('#spellgryff').css('left', randPosX);
// 	$('#spellgryff').css('top', randPosY);

// 	// posLog.innerHTML = posXY;
// 	//  console.log = posXY;
//     console.log("hover");
// });


// function MagicReveal(house: any, currentHouse: any) {
//     let hoverSpell = $(`#spell--${house}`);

//     hoverSpell.on("mouseover", function () {

//         let state = Flip.getState(this);
//         Flip.from(state, {
//             duration: 2.8,
//             fade: true,
//             absolute: true,
//             absoluteOnLeave: true,
//             toggleClass: "reveal-spell-show",
//             ease: "power4.inOut",
//             delay: 1.5 
//         });
//     });

//     hoverSpell.on("mouseleave", function () {
      

//         let state = Flip.getState(this);
//         Flip.from(state, {
//             duration: 2.8,
//             fade: true,
//             absolute: true,
//             absoluteOnLeave: true,
//             toggleClass: "reveal-spell-hide",
//             ease: "power4.inOut",
//             onComplete: function() {
//                 // feTurb.attr({ baseFrequency: "0.0 0.0" });
//             }
            
//         });
//     });
// }



// houses.forEach(house => {
//     MagicReveal(house, house);


// });


// var ripple = rippleEffectHover();
// const ripple: any = new rippleEffectHover();

// class RippleEffectHover {
//     private parent: Element;
//     private intensity: number;
//     private strength: number;
//     private area: number;
//     private waveSpeed: number;
//     private speedIn: number;
//     private speedOut: number;
//     private easing: string;
//     private hover: boolean;
//     private texture: string;

//     constructor(parent: Element, options: {
//         intensity: number,
//         strength: number,
//         area: number,
//         waveSpeed: number,
//         speedIn: number,
//         speedOut: number,
//         easing: string,
//         hover: boolean,
//         texture: string
//     }) {
//         this.parent = parent;
//         this.intensity = options.intensity;
//         this.strength = options.strength;
//         this.area = options.area;
//         this.waveSpeed = options.waveSpeed;
//         this.speedIn = options.speedIn;
//         this.speedOut = options.speedOut;
//         this.easing = options.easing;
//         this.hover = options.hover;
//         this.texture = options.texture;
//     }

//     createRippleEffect(): any { // Replace 'any' with the specific type if available
//         return new RippleEffect({
//             parent: this.parent,
//             intensity: this.intensity,
//             strength: this.strength,
//             area: this.area,
//             waveSpeed: this.waveSpeed,
//             speedIn: this.speedIn,
//             speedOut: this.speedOut,
//             easing: this.easing,
//             hover: this.hover,
//             texture: this.texture,
//         });
//     }
// }

// // Example usage:
// const myDiv = document.querySelector('.my-div');

// if (myDiv) {
//     const options = {
//         intensity: 1,
//         strength: 2,
//         area: 4,
//         waveSpeed: 0.001,
//         speedIn: 2,
//         speedOut: 1.5,
//         easing: 'Expo.easeInOut',
//         hover: true,
//         texture: './assets/images/ripples512.png',
//     };

//     const rippleEffect = new RippleEffectHover(myDiv, options);
//     const effect = rippleEffect.createRippleEffect();
// }

// function rippleEffectHover() {

//     return new RippleEffect({
//         parent: document.querySelector('.my-div'),
//         intensity: 1,
//         strength: 2,
//         area: 4,
//         waveSpeed: 0.001,
//         speedIn: 2,
//         speedOut: 1.5,
//         easing: 'Expo.easeInOut',
//         hover: true,
//         texture: './assets/images/ripples512.png',
//     });
// }




// houses.forEach(house => {
//    applyHoverEffects(house, house);
//    rippleEffectHover();

// });

// const gryffCursor = document.getElementById('spellgryff');

// gryffCursor.onmousemove = function(e ) { 
//     const x = e.pageX - e.currentTarget.offsetLeft; 
//     const y = e.pageY - e.currentTarget.offsetTop; 
// }

// function Hoverloop() {
//     let hover = document.querySelectorAll("#hphouse--box");
//     let action: any;

//     hover.forEach((hov, i) => {
//         let index = i;
//         (function(hov, index) {
//             customHover();
//             // hov.addEventListener("mouseover", function () {
//             //     console.log("hover");
//             //     customHover();
//             //     // action = gsap.to('.line' + index, { x: '+=10', duration: 0.1, repeat: -1, yoyo: true, stagger: 0.12 });
//             //     // customRipple.call.timeline.play();
//             // });
//             // hov.addEventListener("mouseleave", function () {
//             //     // customRipple().pause();
//             //     // action.pause(0);
//             //     console.log("leave");
//             //     // hover.item(index).classList.remove("hover");
//             //     hover.item(index).id = "hpfluidcontainer-none";
//             // });
//         })(hov, index);
//     });
// }

// function customHoverR() {
//     let hover = $("#hphouse--box--ravenclaw");

//     hover.on("mouseover", function () {
//         $(this).addClass("hpfluidcontainer--ravenclaw");
//         let feTurb = $("#feturbulence");
//         // Use Flip plugin to create the flipping animation with a delay to start after the ripple
//         let state = Flip.getState(this); 
//         Flip.from(state, {
//             duration: 2.8,
//             fade: true,
//             absolute: true,
//             absoluteOnLeave: true,
//             toggleClass: "animate-hp-fade-in",
//             ease: "power4.inOut",
//             delay: 1.5 
//         });
//     });

//     hover.on("mouseleave", function () {
//         let feTurb = $("#feturbulence");
//         timeline.from(feTurb, {
//             attr: { baseFrequency: "0.01 0.02" }, // Adjust to the default values
//             duration: 2.8, // Match the duration with the initial ripple animation
//             ease: "power4.inOut"
//         });

//         let state = Flip.getState(this); // This references the current hovered element
//         Flip.from(state, {
//             duration: 2.5,
//             fade: true,
//             absolute: true,
//             absoluteOnLeave: true,
//             toggleClass: "hide-filter",
//             ease: "power4.inOut",
//             onComplete: function() {
//                 feTurb.attr({ baseFrequency: "0.0 0.0" }); // Set baseFrequency to zero to eliminate the turbulence
//             }
//         });
//     });
// }



// function customHoverSl() {
//     let hover = $("#hphouse--box");

//     hover.on("mouseover", function () {
//         $(this).addClass("hpfluidcontainer");
//         let feTurb = $("#feturbulence");
//         // Use Flip plugin to create the flipping animation with a delay to start after the ripple
//         let state = Flip.getState(this); 
//         Flip.from(state, {
//             duration: 2.8,
//             fade: true,
//             absolute: true,
//             absoluteOnLeave: true,
//             toggleClass: "animate-hp-fade-in",
//             ease: "power4.inOut",
//             delay: 1.5 
//         });
//     });

//     hover.on("mouseleave", function () {
//         let feTurb = $("#feturbulence");
//         timeline.from(feTurb, {
//             attr: { baseFrequency: "0.01 0.02" }, // Adjust to the default values
//             duration: 2.8, // Match the duration with the initial ripple animation
//             ease: "power4.inOut"
//         });

//         let state = Flip.getState(this); // This references the current hovered element
//         Flip.from(state, {
//             duration: 2.5,
//             fade: true,
//             absolute: true,
//             absoluteOnLeave: true,
//             toggleClass: "hide-filter",
//             ease: "power4.inOut",
//             onComplete: function() {
//                 feTurb.attr({ baseFrequency: "0.0 0.0" }); // Set baseFrequency to zero to eliminate the turbulence
//             }
//         });
//     });
// }

