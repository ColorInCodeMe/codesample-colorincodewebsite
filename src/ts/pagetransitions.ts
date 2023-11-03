import barba from '@barba/core';
import slide from './slide';
console.log("pagetransiton loaded");
// const { barba } = window;
barba.hooks.before(() => {
  barba.wrapper.classList.add('is-animating');
});
barba.hooks.after(() => {
  barba.wrapper.classList.remove('is-animating');
});
barba.init({
  debug: true,
  transitions: [
    
    {
      sync: true,
      custom: ({ trigger }) => trigger.dataset && trigger.dataset.direction === 'next',
      leave: ({ current }) => slide(current.container, 'leave', 'next'),
      enter: ({ next }) => slide(next.container, 'enter', 'next'),
    },
    {
      sync: true,
      custom: ({ trigger }) => trigger.dataset && trigger.dataset.direction === 'prev',
      leave: ({ current }) => slide(current.container, 'leave', 'prev'),
      enter: ({ next }) => slide(next.container, 'enter', 'prev'),
    },
  ],
});
console.log("pg transitions loaded after BB innit");

// transitions:[{
//     async leave(data){
//         const done = this.async()
//           pageTransition();
//           await delay(1000);
//           done();
//     },

//     async enter(data){
//         pageAnimation();

//     },
//     async once(data){
//         pageAnimation();

//     }
// }]