import image from '../images/image.png';
// import imageCopy from '../images/image-copy.png';
import '../css/index.css';

let oImg = document.createElement('img');
oImg.src = image;
oImg.setAttribute('class', 'size');
document.body.appendChild(oImg);