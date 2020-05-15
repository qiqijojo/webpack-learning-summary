import * as parser from '@babel/parser';
import traverse from '@babel/traverse';

const code = `let sum = 10 + 66;`;
const ast = parser.parse(code);
console.log('ppp111', ast); // 修改前

traverse(ast, { // 遍历语法树，走到每一个Node节点，都会进入enter，将对象传给enter
    enter(path) {
        if(path.node.type === 'Identifier') {
            path.node.name = 'add';
            path.stop();
        }
        // console.log('09090', path.node.type);
    }
})
console.log('ppp222', ast); // 修改后，ast语法树更新了