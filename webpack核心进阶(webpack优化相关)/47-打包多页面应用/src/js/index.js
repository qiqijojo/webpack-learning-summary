import $ from 'jquery';
import _ from 'lodash';
import { add, minus } from './custom'; 
/**
 * 用配置dll这种方式还是要在文件中引入需要用得到的库的，否则还是会报_ is undefined
 * 这种方式只不过是不想让这些第三方库再重新打包到一个文件中而已，相当于过滤吧，该引用还是要引用，只不过区分开来，起到重复打包的作用
 */

const $div = $('<div></div>');
$div.text(_.join(['1', '2', '3'], '+'));
$('body').append($div);

let res1 = add(10, 5);
console.log(res1);
let res2 = minus(10, 5);
console.log(res2);
