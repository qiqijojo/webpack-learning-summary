// import image from './image.png';
import imageCopy from './image-copy.png';
import './index.css';

let oImg = document.createElement('img');
oImg.src = imageCopy;
oImg.setAttribute('class', 'size');
document.body.appendChild(oImg);