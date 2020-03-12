import image from './image.png';

function createImg() {
    let oImg = document.createElement('img');
    oImg.src = image;
    oImg.setAttribute('class', 'size');
    document.body.appendChild(oImg);
}
export {
    createImg
}