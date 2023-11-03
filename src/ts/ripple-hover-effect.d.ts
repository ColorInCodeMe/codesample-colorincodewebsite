// declare module 'ripple-hover-effect';
// import { RippleHoverEffectOptions } from './ripple-hover-effect-options';
// import './ripple-hover-effect.scss';
// import { rippleEffectHover } from 'ripple-hover-effect';
import * as RippleEffect from 'ripple-hover-effect';

export default class RippleHoverEffect {
    constructor(element: HTMLElement, options?: RippleHoverEffectOptions);
    init(): void;
    destroy(): void;
}

// declare module 'ripple-hover-effect' {
//     type RippleEffect = any; // Define the type as 'any' if there are no available typings.
//   }
  