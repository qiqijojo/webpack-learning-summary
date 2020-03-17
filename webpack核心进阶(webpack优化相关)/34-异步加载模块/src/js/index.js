/** ***************************同步加载***************************** */


// import $ from 'jquery';

// const oBtn = document.querySelector('button');
// oBtn.onclick = () => {
//     let $div = getComponent();
//     console.log($div) // 是个jquery节点，不是原生节点，$div[0]为原生节点
//     document.body.appendChild($div[0]);
// }
// function getComponent() {
//     let $div = $('<div>我是div</div>');
//     return $div;
// }



/** ***************************异步加载(用到的时候才加载，同时将js添加进header中)***************************** */

const oBtn = document.querySelector('button');
oBtn.onclick = () => {
    getComponent().then($div => {
        document.body.appendChild($div[0]); 
    })
}


// 异步加载写法一
/*
function getComponent() {
    return import('jquery').then(({ default: $ }) => {
        const $div = $('<div>我是div</div>');
        return $div;
    })
}
*/



// 异步加载写法二
async function getComponent() {
    const { default: $ } = await import('jquery');
    const $div = $('<div>我是div</div>');
    return $div;
}