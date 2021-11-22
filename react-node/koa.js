// const koa = require('koa');

// const app = new koa();
// app.use(async (content, next) => {
//   const start = Date.now();
//   await next();
//   const end = Date.now();
//   console.log(`此页面${content.url}耗时${end - start}ms`);
//   content.body = {
//     name: '123',
//   };
// });

// app.listen(3000, () => {
//   console.log('server at 3000');
// });

// 使用kkoa 启动一个服务

/*
  1. 根据使用场景 koa 为一个class
  2 有use和listrn 两个函数 use 接受一个回调函数 listen 接受多个参数

*/

// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.writeHead(200);
//   res.end('hi kkoa ');
// });

// server.listen(3001, () => {
//   console.log('server at 3001');
// });

const Kkoa = require('./kkoa');

const app = new Kkoa();
app.use((req, res) => {
  res.writeHead(200);
  res.end('hi kkoa ');
});

app.listen(3001, () => {
  console.log('server at 3001');
});
