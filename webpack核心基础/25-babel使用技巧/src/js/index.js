class Person {
    a = 1; // 提案语法，直接用babel打包会报错，需要安装其他插件来支持:@babel/plugin-proposal-class-properties
}

let p1 = new Person();
console.log('p1', p1.a);

let p2 = new Person();
console.log('p2', p1.a);