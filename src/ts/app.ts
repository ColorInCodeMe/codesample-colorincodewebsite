/* eslint-disable */
// import jquery ,will need this for build to compile correctly 
import * as jquery from 'jquery';
(window as any).$ = (window as any).jQuery = jquery;
import { Splide } from './@splidejs';
import TypingAnimation from "./typing_animation"
import './nav.ts';
// console.log('imports loaded');
import { createWidget } from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'



function realFullScreen() {
  let elements = document.querySelectorAll('#realFullscreen') as NodeListOf<HTMLElement>;
  let vw = document.documentElement.clientWidth;
  let vh = document.documentElement.clientHeight;
  console.log(vw);
  console.log(vh);

  elements.forEach(el => {
    el.style.width = vw + "px";
    el.style.height = vh + "px";
    // if (vw < 768) {
    //   el.style.margin = "4vh 4vh 4vh 0";
    // } else if (vw > 768)  {
    //   el.style.margin = "4vh 4vh 4vh 0";
    // } else {
    //   console.log('something wong');
    // }
  });
};
window.addEventListener('resize', (event: UIEvent) => {
  realFullScreen();
});
realFullScreen();

function realVW() {
  let elements = document.querySelectorAll('#realVW') as NodeListOf<HTMLElement>;
  let vw = document.documentElement.clientWidth;
  console.log(vw);

  elements.forEach(el => {
    el.style.width = vw + "px";
  });
};
window.addEventListener('resize', (event: UIEvent) => {
  realVW();
});
realVW();

function realVH() {
  let elements = document.querySelectorAll('#realVH') as NodeListOf<HTMLElement>;
  let vh = document.documentElement.clientHeight;
  elements.forEach(el => {
    el.style.width = vh + "px";
  });
};
window.addEventListener('resize', (event: UIEvent) => {
  realVH();
});
realVH();



// typeform();

// function typeform() {
// createWidget('A4HHlRfK', { 
//   container: document.querySelector('#form') as any,
//  autoResize: true,
//  disableScroll: true,

// })
// }

// function typeformiframe() {
//   let id = 'formWrapper';
//   let height = containerELForm(id);
//   // let maxHeight = 590;
// const { refresh } = createWidget('A4HHlRfK', {
//   container: document.querySelector('#promotypeform')!,
//   // disableScroll: true,
//   // autoResize: true,
//   height: height,
// })
// if (height! >= maxHeight) {
//   refresh;
// } 
// };
// function containerELForm(id: string): number | undefined{
//   let container = document.getElementById(id);
//   let rect = container?.getBoundingClientRect();
//   let height = rect?.height;
//   return height;
// };
// window.addEventListener('resize', (event: UIEvent) => {
//   let id = 'formWrapper';
//   // onTypeformHeightChanged(jquery.data);
//   let height = containerELForm(id);
//   function onTypeformHeightChanged(data: any) {
//     // alert(`onHeightChanged: ${data.height}px`)
//     const { refresh } = createWidget('A4HHlRfK', {
//       container: document.querySelector('#promotypeform')!,
//       disableScroll: true,
//       // inlineOnMobile: true,
//       autoResize: true,
//       height: height,
//     })
//     console.log('form height changed', data)
//    }
//    onTypeformHeightChanged(true);
// }), false;

// typeformiframe();
// global vars
let csAwaitDelay = 500;
let csAwaitDelayL = 1000;

function SlideNumber(
  Splide: {
    on: (arg0: string, arg1: () => void) => void;
    index: number;
    length: any;
  },
  Components: { [x: string]: any; Elements: { track: any } }
) {

  const { track } = Components.Elements;

  let elm: HTMLDivElement;

  function mount() {
    console.log(Splide.index);
    // console.log(Components.Slides.get());
    // const testOne = Components.Slides.get();
    // console.log(testOne);

    // elm = document.createElement("div");
    // elm.style.textAlign = "center";
    // elm.style.marginTop = "0.5em";

    // track.parentElement.insertBefore(elm, track.nextSibling);

      update();

    Splide.on("move", update);
  }

  function update() {

    // elm.textContent = `${Splide.index + 1}/${Splide.length}`;
  }

  return {
    mount,
  };
}




SplideListen();

function SplideListen() {
  document.addEventListener('DOMContentLoaded', () => {
    let fullscreenCarousel = document.getElementById('fullscreenCarousel') as any;

    let i = 0;
    let splideTwoInstance = new Splide(fullscreenCarousel, {
      width: '100%',
      autoHeight: true,
      type: 'loop',
      focus: 'center',
      perPage: 1,
      padding: '0',
      start: 0,

    })
      .mount({
        SlideNumber,
        
      })
    splideTwoInstance.on('resize', () => {
      console.log("splideTwo resize fired");
    })
      .off('resize')
      .on('move', () => {
        // console.log("on move fired");
        switch (i) { // switch triggers each typing animation when slide moves
          // i++;
          case 0:
            console.log('switch:2');
            getCodeblockTwo();
            i++;
            break;
          case 1:
            console.log('switch:3');
            getCodeblockThree();
            i++;
            break;
          case 2:
            console.log('switch:4');
            getCodeblockFour();
            i++;
            break;
          default:
            console.log('switch default' + i);
            i++;
            break;
        }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  footerYear();
  setTimeout(() => {
    getCodeblockOne();
  }, csAwaitDelayL);
});
// codeblockone
function getCodeblockOne() { // follows the splide slide unique class down to the ID
  const splideSlide = document.getElementById('fullscreenCarousel-slide01') as HTMLLIElement;
  const splideContainer = splideSlide.querySelector('div') as HTMLDivElement;
  const codeCardWrapper = splideContainer.querySelector('.cs--code--card__wrapper') as HTMLDivElement;
  const codeBlockOne = codeCardWrapper.querySelector('#csCodeblockOne') as HTMLPreElement;
  // console.log(codeBlockOne + "_get");
  setTimeout(() => {
    csTypingAnimation();
  }, csAwaitDelay);


  function csTypingAnimation() { // codeBlockOne stores the unique HTML el
    // console.log(codeBlockOne + "_got");
  if (codeBlockOne) {
    const csTypingOne = new TypingAnimation(codeBlockOne as HTMLPreElement, {
      loop: false,
      typingSpeed: 60,
      deletingSpeed: 100,
      targetElementClassname: 'cs--codeblock--text',
    });

    csTypingOne
      .typeString(".circle--card__wrapper:hover ")
      .pauseFor(500)
      .newLine()
      .pauseFor(500)
      .typeString(".circle--hover--effect {")
      .pauseFor(500)
      .newLine()
      .tabIndent()
      .pauseFor(500)
      .typeString("transform: scale(12);")
      .pauseFor(500)
      .newLine()
      .tabIndent()
      .pauseFor(500)
      .typeString("opacity: .8;")
      .pauseFor(500)
      .newLine()
      .pauseFor(500)
      .typeString("}")
      .start();
    }
  };
};
// codeblocktwo
function getCodeblockTwo() { // follows the splide slide unique class down to the ID
  var splideSlide = document.getElementById('fullscreenCarousel-slide02') as HTMLLIElement;
  var splideContainer = splideSlide.querySelector('div') as HTMLDivElement;
  var codeCardWrapper = splideContainer.querySelector('.cs--code--card__wrapper') as HTMLDivElement;
  const codeBlockTwo = codeCardWrapper.querySelector('#csCodeblockTwo') as HTMLPreElement;
  setTimeout(() => {
    csTypingAnimationTwo();
  }, csAwaitDelay);


  function csTypingAnimationTwo() { // codeBlockTwo stores the unique HTML el
    if (codeBlockTwo) {
      const csTypingTwo = new TypingAnimation(codeBlockTwo as HTMLPreElement, {
        loop: false,
        typingSpeed: 60,
        deletingSpeed: 100,
        targetElementClassname: 'cs--codeblock--text',
      });

      csTypingTwo
        .typeString(".circle--card__wrapper:hover ")
        .pauseFor(500)
        .newLine()
        .pauseFor(500)
        .typeString(".first--circle--hover--effect,")
        .pauseFor(500)
        .newLine()
        .pauseFor(500)
        .typeString(".circle--card__wrapper:hover ")
        .pauseFor(500)
        .newLine()
        .pauseFor(500)
        .typeString(".second--circle--hover--effect {")
        .pauseFor(500)
        .newLine()
        .tabIndent()
        .pauseFor(500)
        .typeString("transform: scale(12);")
        .pauseFor(500)
        .newLine()
        .tabIndent()
        .pauseFor(500)
        .typeString("opacity: .8;")
        .newLine()
        .pauseFor(500)
        .typeString("}")
        .start()
    }
  };
};
function getCodeblockThree() { // follows the splide slide unique class down to the ID
  var splideSlide = document.getElementById('fullscreenCarousel-slide03') as HTMLLIElement;
  var splideContainer = splideSlide.querySelector('div') as HTMLDivElement;
  var codeCardWrapper = splideContainer.querySelector('.cs--code--card__wrapper') as HTMLDivElement;
  const codeBlockThree = codeCardWrapper.querySelector('#csCodeblockThree') as HTMLPreElement;
  setTimeout(() => {
    csTypingAnimationThree();
  }, csAwaitDelay);

  function csTypingAnimationThree() { // codeBlockThree stores the unique HTML el
    if (codeBlockThree) {
      const csTypingThree = new TypingAnimation(codeBlockThree as HTMLPreElement, {
        loop: false,
        typingSpeed: 40,
        deletingSpeed: 100,
        targetElementClassname: 'cs--codeblock--text',
      });
  
      csTypingThree
        .typeString(".icon--float--wrapper {")
        .pauseFor(350)
        .newLine()
        .tabIndent()
        .pauseFor(350)
        .typeString("transform: translateY(85%);")
        .pauseFor(350)
        .newLine()
        .tabIndent()
        .pauseFor(350)
        .typeString("transition: all .7s ease-in-out;")
        .pauseFor(350)
        .newLine()
        .pauseFor(350)
        .typeString("}")
        .pauseFor(350)
        .newLine()
        .pauseFor(350)
        .typeString(".icon--card__wrapper:hover")
        .pauseFor(350)
        .newLine()
        .pauseFor(350)
        .typeString(".icon--float--wrapper {")
        .pauseFor(350)
        .newLine()
        .tabIndent()
        .pauseFor(350)
        .typeString("transform: translateY(0);")
        .pauseFor(350)
        .newLine()
        .pauseFor(350)
        .typeString("}")
        .start()
    }
  };
};
function getCodeblockFour() { // follows the splide slide unique class down to the ID
  var splideSlide = document.getElementById('fullscreenCarousel-slide04') as HTMLLIElement;
  var splideContainer = splideSlide.querySelector('div') as HTMLDivElement;
  var codeCardWrapper = splideContainer.querySelector('.cs--code--card__wrapper') as HTMLDivElement;
  const codeBlockFour = codeCardWrapper.querySelector('#csCodeblockFour') as HTMLPreElement;
  setTimeout(() => {
    csTypingAnimationFour();
  }, csAwaitDelay);


  function csTypingAnimationFour() { // codeBlockFour stores the unique HTML el
    if (codeBlockFour) {
      const csTypingFour = new TypingAnimation(codeBlockFour, {
        loop: false,
        typingSpeed: 60,
        deletingSpeed: 100,
        targetElementClassname: 'cs--codeblock--text',
      });
      
      csTypingFour
      .typeString(".square--card__wrapper:hover ")
      .pauseFor(500)
      .newLine()
      .pauseFor(500)
      .typeString(".square--hover--effect {")
      .pauseFor(500)
      .newLine()
      .tabIndent()
      .pauseFor(500)
      .typeString("transform: scale(12);")
      .pauseFor(500)
      .newLine()
      .tabIndent()
      .pauseFor(500)
      .typeString("opacity: .8;")
      .pauseFor(500)
      .newLine()
      .pauseFor(500)
      .typeString("}")
      .start();
    }
  };
};


function footerYear() {
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  var currentYearElement: HTMLElement = document.getElementById("currentYear")!;
  currentYearElement.textContent = year.toString();
  // console.log("current year is " + year);
}




document.addEventListener('DOMContentLoaded', () => {

// Get all elements with the data-pagename attribute
// const pageElements = document.querySelectorAll('[data-pagename]') as NodeListOf<HTMLElement>;
// const linkElements = document.querySelectorAll('[data-pagename]') as NodeListOf<HTMLElement>;
// const pageAndLinkElements = document.querySelectorAll('[data-pagename], [data-linkname]') as NodeListOf<HTMLElement>;

// Get all elements with the data-pagename attribute
const elements = document.querySelectorAll('[data-pagename]') as NodeListOf<HTMLElement>;
const linkElements = document.querySelectorAll('[data-linkname]') as NodeListOf<HTMLElement>;
// Loop through each element and generate the template literals
elements.forEach((element, index) => {
  // Get the current attribute value
let currentPagenames = element.dataset.pagename;
  const currentLinknames = element.dataset.linkname;
  
  function convertLinks(string: any) {
    return string.toLowerCase();
  }

  const currentLinkname = convertLinks(currentLinknames);
  // Generate the template literal with the modified value
  const template = `<li  data-pagename="${currentPagenames}"><a href="${currentLinkname}.html" target="_blank" data-linkname="${currentLinkname}"><span class="global__headerwrapper--text">${currentPagenames}</span></a></li>`;
  
  // Insert the template literal before the current element
  element.insertAdjacentHTML('beforebegin', template);
  
  // Remove the current element
  element.remove();
});
//   function convertPageNames(string: any) {
//     document.querySelector("[data-pagename]")!.textContent = currentPagenames;
//     return string.toLowerCase();
//   }
//  let currentPagename = convertPageNames(currentPagenames).textContent(currentPagenames);
// Loop through each element and generate the template literals

//   const currentLinkname = element.dataset.linkname;
//   function convertLinks(string: any) {
//     return string.toLowerCase();
//   }
//   const currentLinkName = convertLinks(currentLinkname);
  // Generate the template literal with the modified value
//   const template = `<span class="global__headerwrapper--text">${currentPagename}</span></a></li>`;
  
//   // Insert the template literal before the current element
//   element.insertAdjacentHTML('beforebegin', template);
//   // Remove the current element
//   element.remove();


// Loop through each element and generate the template literals
// pageAndLinkElements .forEach((element, index) => {
//     // Get the current attribute value
//     const currentPagename = element.dataset.pagename;
//     // function convertPageNames(string: any) {
//     //     document.querySelector("[data-pagename]")!.textContent = currentLinkName;
//     //     return string.toLowerCase();
//     //   }
//     //   const currentPagename = convertPageNames(currentPagenames);

    
//     const currentLinknames = element.dataset.linkname;
//     function convertLinks(string: any) {
//       return string.toLowerCase();
//     }
//     const currentLinkName = convertLinks(currentLinknames);


//     // Generate the template literal with the modified value
//     const template = `<li><a href="${currentLinkName}.html" target="_blank" data-linkname=""><span class="global__headerwrapper--text" data-pagename="">${currentPagename}</span></a></li>`;
//     console.log(template);
//     // Insert the template literal before the current element
//     element.insertAdjacentHTML('beforebegin', template);
//     // Remove the current element
//     element.remove();
  
  
//   });

});


//other imports etc

// pixi and deps
// import * as PIXI from "pixi";
// import '@pixi/graphics-extras';
// import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";
// custom builds
// import slide from './slide';
// import './utils.ts';
// import './barba.ts';

// import './pagetransitions.ts';

// import "../assets/fontawesome-pro-6.4.2/js/all.js";
// import './pixistage.ts';
// import './once-anime.ts';import { init } from './@splidejs/test/utils/utils';
