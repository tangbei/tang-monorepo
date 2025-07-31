let data = {
  name: 'ming',
  age: 18
};
Object.keys(data).forEach((key) => {
  let value = data[key];
  Object.defineProperty(data, key, {
    get() {
      console.log('get', value);
      return value;
    },
    set(newValue) {
      console.log('更新');
      value = newValue;
    }
  });
});
data.name = '佩奇';
console.log(data.name);

// 依次打印： 更新 → get 佩奇 → 佩奇