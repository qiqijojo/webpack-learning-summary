// const image = require('./image.png');
// const _ = require('./index.css');

/**
 * file-loader处理之后，我们导入图片拿到的是一个Module对象,需要调用default属性来获取图片的打包之后的地址
 */



 

 /**
  * 注意：使用import导出图片就直接拿到了图片的url，不用像上面那种方式从default里面取了
  */
 import image from './image.png';
 import './index.css';
console.log(image);

let oImg = document.createElement('img');
oImg.src = image;
oImg.setAttribute('class', 'size');
document.body.appendChild(oImg);