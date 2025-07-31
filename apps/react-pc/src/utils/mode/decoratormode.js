function fuc() {
  console.log(2);
}

Function.prototype.before = function (beFn) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  let self = this;
  console.log('before -->', self, beFn);
  return function () {
    beFn.apply(this, arguments); // 先执行插入到前面的方法，类似于二叉树的前序遍历
    return self.apply(this, arguments); // 后执行当前的方法
  };
};

Function.prototype.after = function (afFn) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  let self = this;
  return function () {
    self.apply(this, arguments); // 先执行当前的方法
    return afFn.apply(this, arguments); // 后执行插入到后面的方法
  };
};

function fuc1() {
  console.log(1);
}
function fuc3() {
  console.log(3);
}
function fuc4() {
  console.log(4);
}

// eslint-disable-next-line no-func-assign
fuc = fuc.before(fuc1).before(fuc4).after(fuc3);
fuc();

// 最终打印结果：4 1 2 3