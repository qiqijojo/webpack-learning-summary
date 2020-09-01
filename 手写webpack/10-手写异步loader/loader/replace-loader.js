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
    validateOptions(schema, options, 'replace-loader')
    let callback = this.async();
    setTimeout(() => {
        content = content.replace(/hello/g, options.name)
        callback(null, content);
    }, 5000);
}