// 目标对象：计算器函数
class Calculator {
  multiply(a, b) {
    console.log(`Calculating ${a} * ${b}`);
    return a * b;
  }
}
// 代理对象：缓存代理
class CachingProxy {
  constructor() {
    this.calculator = new Calculator();
    this.cache = {};
  }

  multiply(a, b) {
    const key = `${a}*${b}`;
    if (this.cache[key] === undefined) {
      this.cache[key] = this.calculator.multiply(a, b);
    }
    return this.cache[key];
  }
}

// 使用缓存代理进行乘法计算
const proxy = new CachingProxy();
console.log(proxy.multiply(2, 3)); // 第一次计算
console.log(proxy.multiply(2, 3)); // 从缓存中获取结果
console.log(proxy.multiply(4, 5)); // 新的乘法计算
console.log(proxy.multiply(4, 5)); // 从缓存中获取结果


/**
 * 在这个示例中，Calculator 表示目标对象，即计算器函数，它具有 multiply 方法用于进行乘法计算。
 * CachingProxy 表示代理对象，它包含一个对 Calculator 的实例，并且也具有 multiply 方法。
 * 在 CachingProxy 的 multiply 方法中，我们首先检查缓存中是否存在要计算的结果，如果存在则直接从缓存中获取，
 * 否则调用 Calculator 进行计算，并将结果存入缓存。
 */

const cacheFun = () => {
  const cacheData = new Map();
  return (n) => {
    if (cacheData.has(n)) {
      console.log("data from cache");
      return cacheData.get(n);
    }
    const result = n * n;
    cacheData.set(n, result);
    return result;
  };
};

const proxyFunction = new Proxy(cacheFun(), {
  apply(target, thisArg, args) {
    console.log("Using cache...");
    return target(...args);
  },
});

console.log('-----', proxyFunction(5)); // Using cache... 25
console.log('-----', proxyFunction(5));

