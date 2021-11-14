/*-----------创建一个简单的服务器------*/
const http = require('http');
const server = http.createServer((request, response) => {
  // request 可以获取请求参数
  // response 对该请求有一个回复

  response.end('hello'); // 打开端口号，即显示end() 的参数
  //console.log('====33,response', getResponseList(response));
  /*
        req? 为什么使用end函数，而不是response='hello'
        getResponseList(response)
    
    */
});

server.listen(3000); // 监听端口

function getResponseList(obj) {
  const prototypeList = [];
  while ((obj = Object.getPrototypeOf(obj))) {
    //返回给定对象的原型。如果没有继承属 性，则返回 null 。
    prototypeList.push(obj);
  }
  prototypeList.push(null);
  return prototypeList;
}
