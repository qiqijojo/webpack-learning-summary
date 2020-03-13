import $ from 'jquery';

/**
 * 当前发送请求的地址：http://127.0.0.1:9000/user
 * 服务端的地址：http://127.0.0.1:3000/user
 * 两者端口号不一样，就是跨域，即获取不到数据
 */
$.get('/user', (res) => {
    console.log(res);
})
$.get('/login', (res) => {
    console.log(res);
})