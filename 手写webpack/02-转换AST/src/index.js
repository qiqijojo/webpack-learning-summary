import * as parser from '@babel/parser';

const code = `let sum = 10 + 66;`;
const ast = parser.parse(code);
console.log('ppp', ast); // 打印出来就是ast语法树