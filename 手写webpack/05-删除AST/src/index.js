import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import generator from '@babel/generator';

const code = `
    console.log('jojo');
    let sum = 10 + 66;
    let minus = 5 - 1;
    function add(){}
`;
let ast = parser.parse(code);
// console.log(ast);

traverse(ast, {
    // enter(path) {
    //     console.log(path.node);
    // }
    Identifier(path) {
        console.log(path.node.name)
        if (path.node.name === 'sum') {
            path.parentPath.remove();
        }
    }
})
console.log('ast', ast);

const output = generator(ast);
console.log('output', output);

