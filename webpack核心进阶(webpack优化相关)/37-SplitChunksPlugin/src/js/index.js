// 同步导入
import $ from 'jquery';
$('html').css({ width: '100%', height: '100%' });
$('body').css({ width: '100%', height: '100%', background: 'red' });


// 异步导入
// const oBtn = document.querySelector('button');
// oBtn.onclick = () => {
//     getComponent().then($div => {
//         document.body.appendChild($div[0]); 
//     })
// }
// async function getComponent() {
//     const { default: $ } = await import(/* webpackPrefetch: true *//* webpackChunkName: "jquery" */'jquery');
//     const $div = $('<div>我是div</div>');
//     return $div;
// }


// import { add, minus } from './custom.js';
// let res1 = add(10, 5);
// console.log(res1);
// let res2 = minus(10, 5);
// console.log(res2);