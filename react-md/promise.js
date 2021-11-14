let a = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve('a resolve');
    console.log('---a----resolve');
  } else {
    reject('a reject');
    console.log('----a----reject');
  }
});
let b = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve('b resolve');

    console.log('---b----resolve');
  } else {
    reject('b reject');

    console.log('----b----reject');
  }
});
let c = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve('c resolve');

    console.log('---c----resolve');
  } else {
    reject('c reject');

    console.log('----c----reject');
  }
});

a.then(
  (value) => {
    console.log('a resolve 成功');
  },
  (va) => {
    console.log('a reject 失败');
  }
);

b.then(
  (value) => {
    console.log('b resolve 成功');
  },
  (va) => {
    console.log('b reject 失败');
  }
);

c.then(
  (value) => {
    console.log('c resolve 成功');
  },
  (va) => {
    console.log('c reject 失败');
  }
);

// Promise.all([a, b, c])
//   .then((va) => {
//     console.log('--------111', va);
//   })
//   .catch((val) => {
//     console.log('====333', val);
//   });

Promise.myAll = function (arr) {
  return new Promise((resolve, reject) => {
    let results = [];
    let count = 0;

    arr.forEach((pro, index) => {
      pro
        .then((value) => {
          results[index] = value;
          count++;
          if (count === arr.length) {
            resolve(results);
          }
        })
        .catch((value) => {
          reject(value);
        });
    });
  });
};

Promise.myAll([a, b, c])
  .then((va) => {
    console.log('--myAll------111', va);
  })
  .catch((val) => {
    console.log('==myAll==333', val);
  });
