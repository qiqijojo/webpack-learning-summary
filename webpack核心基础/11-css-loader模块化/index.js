import image from './image.png';
// import './index.css';
import cssModule from './index.css';
import { createImg } from './module.js';

console.log(cssModule); // {size: "_2sFQmdIGg6FIbO5ECMU50Z"}
console.log(image, createImg);

let oImg = document.createElement('img');
oImg.src = image;
oImg.setAttribute('class', cssModule.size);
document.body.appendChild(oImg);

createImg();