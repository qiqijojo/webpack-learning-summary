/**
 * ES6模块化的第一种方式：
 * 导出数据：export {xxx};
 * 导入数据：import {xxx} from 'path';
 */
// import {name} from './module1';
// console.log(name); // jojo

/**
 * 注意点： 
 * 1. 如果是通过export {xxx};方式导出数据，那么在导入接收的时候 接受的变量名称必须要和导出的名称一致
 *    -> 究其原因是因为在导入的时候本质上是ES6的解构赋值
 * 2. 如果是通过export {xxx};方式导出数据，又想在导入数据的时候修改接受的变量名称，那么可以使用as来修改
 *    -> 但是如果通过as修改了接受的变量名称，那么原有的变量名称将会失效
 */
// import { name as str } from './module1';
// console.log(name);
// console.log(str);

import { name, age } from './module1';
console.log(name, age);

/** ----------------------------------------------------------------------------------------------------------- */


/**
 * ES6模块化的第二种方式： 
 * 导出数据：export default xxx;
 * 导入数据：import xxx from 'path';
 */

 /**
  * 注意点：
  * （1）如果是通过export default xxx;导出数据，那么在接收导出数据的时候变量名称可以和导出名称不一致
  * （2）如果是通过export default xxx;导出数据，那么在模块中只能使用一次export default
  */
// import age from './module2';
// console.log(age); // 20


import Person from './module2';
let p = new Person();
console.log(p);