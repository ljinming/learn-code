/*
promise.all 
参数：一个可迭代的对象 Array或String;参数元素不一定说promise
return : promise的执行结果,执行结果必须按照参数的顺序出来
*/

function PromiseAll(arrayPromise) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arrayPromise)) {
      reject('传入的参数必须说可迭代对象');
    }
    if (arrayPromise.length === 0) {
      resolve([]);
    }
    let count = 0;
    const result = [];
    for (let i = 0; i < arrayPromise.length; i++) {
      Promise.resolve(arrayPromise[i])
        .then((value) => {
          result[i] = value;
          count++;
          if (count === arrayPromise.length) {
            resolve(result);
          }
        })
        .catch((e) => reject(e));
    }
  });
}

// promise x线性池
/*
    需求： 当前有多个请求，希望可以一次请求三个，当其他的请求回来的时候，从还有的请求点里去请求，一直保持3个请求在路上
*/
/*
    参数：请求的url,和请求的方法，请求的限制数

*/
function limitLoad(urls, handle, limit) {
  const sequence = [].concat(urls);
  let promises = [];
  promises = sequence.splice(0, limit).map((url, index) => {
    return handle(url).then(() => {
      return index;
    });
  });
  let p = Promise.race(promises);

  for (let i = 0; i < sequence.length; i++) {
    p = p.then((res) => {
      // res 是返回的index
      promises[res] = handle(sequence[i]).then(() => {
        return res;
      });
      return Promise.race(promises);
    });
  }
}

const urls = [];
for (let i = 1; i < 10; i++) {
  urls.push({ info: `link${i}`, time: i * 1000 });
}

function load(url) {
  return new Promise((resolve, reject) => {
    console.log('--' + url.info + 'start');
    setTimeout(() => {
      console.log(url.info + 'ok!!!');
      resolve();
    }, url.time);
  });
}

function limitLoad1(urls, handle, limit) {
  const arrs = [].concat(urls);
  // promises li
  let promises = arrs.splice(0, limit).map((url, index) => {
    return handle(url).then(() => {
      return index;
    });
  });
  let p = Promise.race(promise);
  for (let i = 0; i < promise.length; i++) {
    p = p.then((res) => {
      promises[res] = handle[arrs[i]].then(() => {
        return res;
      });
      return Promise.race(promises);
    });
    // p = p.then((res) => {
    //   promise[res] = handle[arrs[i]].then(() => {
    //     return res;
    //   });
    //   return Promise.race(promise);
    // });
  }
}

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  });
  resolve(2);
});
p1.then((res) => {
  console.log(res);
});
