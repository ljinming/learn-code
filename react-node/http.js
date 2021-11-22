/*-----------创建一个简单的服务器------*/
const http = require('http');
const fs = require('fs');
// const server = http.createServer((request, response) => {
//   // request 可以获取请求参数
//   // response 对该请求有一个回复

//   response.end('hello'); // 打开端口号，即显示end() 的参数
//   //console.log('====33,response', getResponseList(response));
//   /*
//         req? 为什么使用end函数，而不是response='hello'
//         getResponseList(response)
    
//     */
// });


const server = http.createServer((request, response) => {

  const {url,method,headers} = request;
  if(url ==='/' && method === 'GET'){
    // 根目录
    fs.readFile('./index.html',(err,data) => {
        if(err){
          // 头部信息 以及返回的content-type
          response.writeHead(500,{
            "content-type":"text/plain;charset=utf-8" 
          })
          response.end('出错了500！！')
          return 
        }
        response.statusCode = 200;
        response.setHeader('Content-Type','text/html');
        response.end(data) 
    })
  }else if(method == 'GET' && headers.accepts.indexOf('image/*') !== -1 ){
    //说明为图片请求
    // 先读后写 当图片多时，如果所有的图片都读入服务器，可能会存在服务器放不下问题  eg 服务器内存为16，但当图片为32g时，一定实现不了
    // 建议为一个流 例如一个游泳池的水，把水挪到另一个游泳池，可以选择通过管子进行传输
      fs.createReadStream('.'+url).pipe(response) 


  }else{
    response.statusCode = 404;
    response.setHeader('Content-Type','text/plain;charset=utf-8');
    response.end('404 没有找到此页面') 
  }

})

server.listen(3000); // 监听端口






// function getResponseList(obj) {
//   const prototypeList = [];
//   while ((obj = Object.getPrototypeOf(obj))) {
//     //返回给定对象的原型。如果没有继承属 性，则返回 null 。
//     prototypeList.push(obj);
//   }
//   prototypeList.push(null);
//   return prototypeList;
// }
