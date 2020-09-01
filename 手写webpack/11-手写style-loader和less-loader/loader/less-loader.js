const less = require('less');

module.exports = function (content) {
    let callback = this.async();
    less.render(content, function(err, obj) {
        callback(err, obj.css);
    });
};