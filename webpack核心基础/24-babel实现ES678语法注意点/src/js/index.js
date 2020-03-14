// import "@babel/polyfill"; // 在webpack中配置useBuiltIns后，可以不用引入polyfill，也会进行转换没有对应关系的语法

Promise.resolve().then(() => {
    console.log('jojo');
})