 import image from './image.png';
 import './index.css';
// import './index.less'; // 编译less文件
// import './index.scss';
console.log(image);

let oImg = document.createElement('img');
oImg.src = image;
oImg.setAttribute('class', 'size');
document.body.appendChild(oImg);