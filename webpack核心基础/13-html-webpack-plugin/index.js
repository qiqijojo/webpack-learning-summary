import image from './image.png';
import './index.css';

let oImg = document.createElement('img');
oImg.src = image;
oImg.setAttribute('class', 'size');
document.body.appendChild(oImg);