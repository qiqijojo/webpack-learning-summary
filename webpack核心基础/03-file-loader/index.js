const image = require('./image.png');

/**
 * file-loader处理之后，我们导入图片拿到的是一个Module对象,需要调用default属性来获取图片的打包之后的地址
 */
console.log(image);
/*
Module {default: "e9729cc14d29e51915147bc111adb872.jpg", __esModule: true, Symbol(Symbol.toStringTag): "Module"}
    default: "e9729cc14d29e51915147bc111adb872.jpg"
    __esModule: true
    Symbol(Symbol.toStringTag): "Module"
    __proto__: Object
*/
console.log(image.default); // e9729cc14d29e51915147bc111adb872.png

let oImg = document.createElement('img');
oImg.src = image.default;
document.body.appendChild(oImg);