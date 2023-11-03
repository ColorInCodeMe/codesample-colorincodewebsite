import barba from '@barba/core';


console.info(':rocket:Barba:init');
barba.hooks.before(() => {
    barba.wrapper.classList.add('is-animating');
});
barba.hooks.after(() => {
    barba.wrapper.classList.remove('is-animating');
});