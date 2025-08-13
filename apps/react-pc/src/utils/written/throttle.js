// 模拟表单提交
function submitForm(index){
	console.log('submit' + index);
}

// 请实现
function handleSubmit(func, timeout) {
  let timer = null;
  // let date = 0;
  let result = null;
  // let count = 0;
  let last = 0;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    const now = +Date.now();
    // console.log('now', count++);
    if (last && last + timeout > now) {
      // date = now;
      timer = setTimeout(() => {
        last = now;
        result = func.apply(this, args);
      }, timeout);
    } else {
      last = now;
      result = func.apply(this, args);
    }
    return result;
  }
}

// 实际执行函数
const submit = handleSubmit(submitForm, 1000);

// 测试用例
submit(1);
submit(2);

const submitDemo = () => {
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].forEach(item => {
    setTimeout(() => {
      submit(item);
    }, item * 800);
  });
};

submitDemo();