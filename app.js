// httpモジュールを読み込み、インスタンスを生成
var http = require('http');
const fs = require('fs');
const url = require('url');


const indexPage = fs.readFileSync('./html/index.html', 'UTF-8');
const articles = fs.readFileSync('./html/pages/articles.html', 'UTF-8');


const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer(RouteSetting);

server.listen(port);

function RouteSetting(req, res) {
    const url_parts = url.parse(req.url);
    switch (url_parts.pathname) {
      case '/':
      case '/index.html':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(indexPage);
        res.end();
        break;
    
      case '/kanumaOne.html':
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(articles);
        res.end();
        break;

    default:
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.write('お探しのページは見つかりません。');
      res.end();
      break;

    }
}