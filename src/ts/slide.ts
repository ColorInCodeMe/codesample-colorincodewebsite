// const { anime } = window;
// const { anime } = window;
import anime from 'animejs';

export default (targets, step, direction) => {
  const duration = 1000;
  const from = step === 'leave' ? 0 : 100;  
  const to = step === 'leave' ? 100 : 0;
  targets.style.transform = direction === 'prev'
    ? `translateX(-${from}%)`
    : `translateX(${from}%)`;

  targets.style.transform = direction === 'next'
    ? `translateX(${from}%)`
    : `translateX(-${from}%)`;

  const translateX = direction === 'next' ? `-${to}%` : `${to}%`;
  const translateXback = direction === 'prev' ? `${to}%` : `-${to}%`;
  const staggerX = window.innerWidth * 0.1;
  const anim = anime.timeline({
    easing: 'easeInOutQuart',
    duration,
  });
  
  anim.add({
    targets,
    translateX,
    translateXback,
  });

  
  if (step === 'enter') {
    anim.add({
      targets: targets.querySelectorAll('main > *'),
      translateX: direction === 'next' ? [staggerX, 0] : [-staggerX, 0],
      translateXback: direction === 'prev' ? [-staggerX, 0] : [staggerX, 0],
      duration: duration * 0.6,
      easing: 'easeOutQuart',
      delay: anime.stagger(100),
    }, '-=500');
  }
  
  return anim.finished;
}
