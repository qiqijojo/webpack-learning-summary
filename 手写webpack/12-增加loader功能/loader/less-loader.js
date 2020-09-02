const less = require('less');

module.exports = function (content) {
    // let callback = this.async();
    let css = ''
    less.render(content, function(err, obj) {
        // callback(err, obj.css);
        css = obj.css;
    });
    return css;
};