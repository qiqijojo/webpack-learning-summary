const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/api/user') {
        res.end('user页面')
    } else if (req.url === '/api/login') {
        res.end('login页面')
    }
}).listen(3000);