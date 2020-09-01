
/**
 * 
 * @param {*} content 是每个文件的内容
 * @param {*} map 
 * @param {*} meta 
 */
module.exports = function (content, map, meta) {  // map, meta这两个打印出来是undefined
    // console.log('打印', content, map, meta);
    console.log(this.query)
    const name = this.query.name;
    content = content.replace(/hello/g, name)
    return content;
}