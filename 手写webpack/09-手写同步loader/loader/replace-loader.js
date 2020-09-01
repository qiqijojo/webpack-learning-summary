const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');
/**
 * 
 * @param {*} content 是每个文件的内容
 * @param {*} map 
 * @param {*} meta 
 */
module.exports = function (content, map, meta) {  // map, meta这两个打印出来是undefined
    // console.log('打印', content, map, meta);
    // console.log(this.query)
    // const name = this.query.name;
    const options = loaderUtils.getOptions(this);
    let schema = {
        type: "object",
        properties: {
            name: {
                type: "string"
          }
        },
        additionalProperties: false
    };
    validateOptions(schema, options, 'replace-loader') // 这个loader的名称无论写什么都会正常运行，没搞懂写这个有什么用。。。
    content = content.replace(/hello/g, options.name)
    return content;
}