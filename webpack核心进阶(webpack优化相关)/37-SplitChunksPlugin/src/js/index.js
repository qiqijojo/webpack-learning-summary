/************************************************（上）******************************************** */
// 同步导入
// import $ from 'jquery';

// $('html').css({ width: '100%', height: '100%' });
// $('body').css({ width: '100%', height: '100%', background: 'red' });


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


/* ****************************************（中）********************************************** */

/**
 * 默认情况下，如果所有的模块都是从node_modules中导入的，
 * 那么会将所有从node_modules中导入的模块打包到同一个文件中去
 */
// import $ from 'jquery';
// import _ from 'lodash';

// $('html').css({ width: '100%', height: '100%' });
// $('body').css({ width: '100%', height: '100%', background: 'red' });

// const str = _.join([1, 2, 3], '+');
// console.log(str); // 1+2+3



/**
 * 默认情况下，如果所有的模块不是从node_modules中导入的，
 * 那么会将所有不是从node_modules中导入的模块打包到同一个文件中去
 */
// import { add, minus } from './custom';
// import { hello, hi } from './custom2';

// let res1 = add(10, 5);
// console.log(res1);
// let res2 = minus(10, 5);
// console.log(res2);
// hello();
// hi();



/**
 * 混合情况：
 * 如果当前文件中导入的模块有的是从node_modules中导入的，有的不是从node_modules中导入的，
 * 那么就会将所有从node_modules中导入的打包到一个文件中，
 * 那么就会将所有不是从node_modules中导入的打包到另一个文件中。
 */
import $ from 'jquery';
import _ from 'lodash';
import { add, minus } from './custom';
import { hello, hi } from './custom2';

$('html').css({ width: '100%', height: '100%' });
$('body').css({ width: '100%', height: '100%', background: 'red' });

const str = _.join([1, 2, 3], '+');
console.log(str); // 1+2+3


let res1 = add(10, 5);
console.log(res1);
let res2 = minus(10, 5);
console.log(res2);
hello();
hi();