const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/user') {
        res.end('user页面')
    } else if (req.url === '/login') {
        res.end('login页面')
    }
}).listen(3000);