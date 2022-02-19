function throttle(fn, delay) {
  //节流，固定时间内出发一次
  /* 
    1. 使用时间戳,第一次立即执行
    2.定时器写法,最后一次也会延迟一定的时间执行
    */
  let last = 0;
  return function () {
    const now = new Date().getTime();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, arguments);
    }
  };
}

function throttle1(fn, delay) {
  let timer;
  return function () {
    if (!timer) {
      let context = this;
      const args = arguments;
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, delay);
    }
  };
}

function throttle2(fn, delay) {
  let startTime = new Date().getTime();
  let timer = null;
  return function () {
    const context = this;
    const arg = arguments;
    let endTime = new Date().getTime();
    const remainTime = delay - (endTime - startTime);
    clearTimeout(timer);
    if (remainTime <= 0) {
      //立即执行
      fn(context, arg);
      startTime = new Date().getTime();
    } else {
      setTimeout(fn, delay);
    }
  };
}

// 防抖，  一定时间内，发起一次请求
function debounce(fn, delay) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn(context, args);
    }, delay);
  };
}
