// // classes and constructors
// class ColorPalette {
//     constructor() {
//         this.setColors();
//         this.setCustomProperties();
//     }
//     setColors() {
//         // pick a random hue somewhere between 220 and 360
//         this.hue = ~~random(220, 360);
//         this.complimentaryHue1 = this.hue + 30;
//         this.complimentaryHue2 = this.hue + 60;

//         // define a fixed saturation and lightness
//         this.saturation = 95;
//         this.lightness = 50;

//         // define a base color
//         this.baseColor = hsl(this.hue, this.saturation, this.lightness);

//         // define a complimentary color, 30 degress away from the base
//         this.complimentaryColor1 = hsl(
//             this.complimentaryHue1,
//             this.saturation,
//             this.lightness,
//         );
//         // define a second complimentary color, 60 degrees away from the base
//         this.complimentaryColor2 = hsl(
//             this.complimentaryHue2,
//             this.saturation,
//             this.lightness,
//         );
//         // store the color choices in an array so that a random one can be picked later
//         this.colorChoices = [
//             this.baseColor,
//             this.complimentaryColor1,
//             this.complimentaryColor2
//         ];
//         let opaque1 = (this.complimentaryColor1 + '33');
//         let opaque2 = (this.complimentaryColor2 + '33');
//         console.log(opaque1);
//         console.log(opaque2);
//     }



//     randomColor() {
//         // pick a random color
//         return this.colorChoices[~~random(0, this.colorChoices.length)].replace(
//             "#",
//             "0x"
//         );
//     }
//     setCustomProperties() {
//             // set CSS custom properties so that the colors defined here can be used throughout the UI
//             document.documentElement.style.setProperty("--hue", this.hue);
//             document.documentElement.style.setProperty(
//                 "--hue-complimentary1",
//                 this.complimentaryHue1
//             );
//             document.documentElement.style.setProperty(
//                 "--hue-complimentary2",
//                 this.complimentaryHue2
//             );
//             document.documentElement.style.setProperty(
//                 "--hue-opaque1",
//                 this.opaque1
//             );
//             document.documentElement.style.setProperty(
//                 "--hue-opaque2",
//                 this.opaque2
//             );
//             // document.documentElement.style.setProperty(
//             // '--hue-complimentary-opaque1',
//             // this.complimentaryHueOpaque1
//             // );
//             // document.documentElement.style.setProperty(
//             //     '--hue-complimentary-opaque2',
//             //     this.complimentaryHueOpaque2
//             //     );

//         }
//         // opaque versions
//         // setOpaqueColors() {
//         //     let complimentaryHueOpaque1 = hsl(
//         //         this.complimentaryColor1,
//         //          = 0.5

//     //         );
//     //     let complimentaryHueOpaque2 = hsl(
//     //         this.complimentaryColor2,
//     //          = 0.5
//     //         );
//     //         console.log(complimentaryHueOpaque1);
//     //         console.log(complimentaryHueOpaque2);
//     // }
//     // setLessOpacity() {
//     //     document.documentElement.style.setProperty(
//     //         "--hue-complimentary-opaque1",
//     //         this.complimentaryHueOpaque1
//     //     );
//     //     document.documentElement.style.setProperty(
//     //         "--hue-complimentary-opaque2",
//     //         this.complimentaryHueOpaque2
//     //     );
//     // }
// }



// class Orb {
//     // Pixi takes hex colors as hexidecimal literals (0x rather than a string with '#')
//     constructor(fill = 0xffffff) {
//         // bounds = the area an orb is "allowed" to move within
//         this.bounds = this.setBounds();
//         // initialise the orb's { x, y } values to a random point within it's bounds
//         this.x = random(this.bounds["x"].min, this.bounds["x"].max);
//         this.y = random(this.bounds["y"].min, this.bounds["y"].max);
//         // how large the orb is vs it's original radius (this will modulate over time)
//         this.scale = 1;
//         // what color is the orb?
//         this.fill = fill;
//         // the original radius of the orb, set relative to window height
//         this.radius = random(window.innerHeight / 4, window.innerHeight / 2);
//         // starting points in "time" for the noise/self similar random values
//         this.xOff = random(0, 1000);
//         this.yOff = random(0, 1000);
//         // how quickly the noise/self similar random values step through time
//         this.inc = 0.002;
//         // PIXI.Graphics is used to draw 2d primitives (in this case a circle) to the canvas
//         this.graphics = new PIXI.Graphics();
//         this.graphics.alpha = 0.825;
//         // 250ms after the last window resize event, recalculate orb positions.
//         window.addEventListener(
//             "resize",
//             debounce(() => {
//                 this.bounds = this.setBounds();
//             }, 250)
//         );
//     }
//     setBounds() {
//         // how far from the { x, y } origin can each orb move
//         const maxDist =
//             window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;
//         // the { x, y } origin for each orb (the bottom right of the screen)
//         const originX = window.innerWidth / 1.25;
//         const originY =
//             window.innerWidth < 1000 ?
//             window.innerHeight :
//             window.innerHeight / 1.375;
//         // allow each orb to move x distance away from it's x / y origin
//         return {
//             x: {
//                 min: originX - maxDist,
//                 max: originX + maxDist
//             },
//             y: {
//                 min: originY - maxDist,
//                 max: originY + maxDist
//             }
//         };
//     }
//     render() {
//         // update the PIXI.Graphics position and scale values
//         this.graphics.x = this.x;
//         this.graphics.y = this.y;
//         this.graphics.scale.set(this.scale);
//         // clear anything currently drawn to graphics
//         this.graphics.clear();
//         // tell graphics to fill any shapes drawn after this with the orb's fill color
//         this.graphics.beginFill(this.fill, 1);
//         // draw a circle at { 0, 0 } with it's size set by this.radius
//         // this.graphics.drawCircle(0, 0, this.radius);
//         // this.graphics.lineStyle(0);
//         // graphics.beginFill(0x3500FA, 1);
//         // this.graphics.drawPolygon(path);
//         this.graphics.lineStyle(4, this.fill);
//         // this.graphics.beginFill(0x55335A, 1);
//         this.graphics.drawStar(470, 450, 4, 50, this.radius);
//         // this.graphics.endFill();
//         // let graphics know we won't be filling in any more shapes
//         this.graphics.endFill();
//     }
// }
// // this is our pixi app polygon params polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)
// const app = new PIXI.Application({
//     // render to <canvas class="orb-canvas"></canvas>
//     view: document.querySelector(".orb-canvas"),
//     backgroundAlpha: 0,
//     // auto adjust size to fit the current window
//     resizeTo: window,
//     // transparent background, we will be creating a gradient background later using CSS
//     transparent: true
// });

// app.stage.filters = [new KawaseBlurFilter(30, 10, true)];
// // Create colour palette
// const colorPalette = new ColorPalette();

// // Create orbs array
// let orbs = [];
// for (let i = 0; i < 10; i++) {
//     const orb = new Orb(colorPalette.randomColor());
//     app.stage.addChild(orbs.graphics);
//     orbs.push();
// }
