// 计算占了多少字节

function calculator(object) {
  const objectType = typeof object;
  switch (objectType) {
    case 'string':
      return object.length * 2;
    case 'number':
      return 8;
    case 'boolean':
      return 4;
    case 'object':
      if (Array.isArray(object)) {
        // 说明是数组
        object.map(calculator).reduce((res, cur) => res + cur, 0);
      } else {
        // 说明是对象
        return sizeofObject(object);
      }
    default:
      return 0;
  }
}
let cs = 'cs';

let testObj = {
  a: '22',
  b: 3,
  c: true,
  d: cs,
  e: cs,
};
function sizeofObject(object) {
  // 专门处理object 类型
  if (object === null) {
    return 0;
  }
  // Object 的key 也有内存
  // 可能存在不同key ,是同一个引用
  let seen = new Set();
  let bytes = 0;
  const objectKeys = Object.keys(object);
  for (let i = 0; i < objectKeys.length; i++) {
    const key = objectKeys[i];
    bytes += calculator(key);

    if (seen.has(object[key])) {
      continue;
    }
    seen.add(object[key]);
    bytes += calculator(object[key]);
  }
  return bytes;
}
