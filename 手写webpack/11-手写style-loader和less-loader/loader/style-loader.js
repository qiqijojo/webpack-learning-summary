module.exports = function (content) {
    console.log('000', content)
    let style = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(content)};
    document.head.appendChild(style);
    `;
    return style;
}