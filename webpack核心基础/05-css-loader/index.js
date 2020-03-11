const image = require('./image.png');
const _ = require('./index.css');

/**
 * file-loader处理之后，我们导入图片拿到的是一个Module对象,需要调用default属性来获取图片的打包之后的地址
 */
console.log(image);
console.log(image.default); 

let oImg = document.createElement('img');
oImg.src = image.default;
oImg.setAttribute('class', 'size');
document.body.appendChild(oImg);