# 工作中的难点，亮点 ，怎么解决的

## 2. 了解浏览器的事件循环嘛

2.1 为什么 js 浏览器中会有事件循环机制
js 是单线程的 event loop

2.2 两种任务
宏任务：整体代码，setTimeout
微任务：new promise().then()

2.3 为什么要引入微任务，只有宏任务可以吗
宏任务 遵循先进先出的原则执行 但如果遇到高优先级的任务，只有宏任务是不可以的，所以需要引入微任务

2.4 node 中的事件循环和浏览器的事件循环有什么区别
node 宏任务执行顺序：1.timer 定时器
2.pendding,callback 等待回调函数

## 3 事件的捕获和冒泡机制你了解多少

捕获：自顶向下
冒泡：自底而上

```
//冒泡阶段
window.addEventListener('click',()=>{});
```

```
//捕获阶段
window.addEventListener('click',()=>{},true);
```

事件委托 1.父元素绑定事件 ，然后找到地下的 target
Array.prototype.indexOf.call(nodelist,'li')

## 4 工作中使用过防抖和节流嘛

防抖：多长时间，不再点击 ，触发一次。input
节流：一直点击，每隔一段时间触发一次;resize,scroll
