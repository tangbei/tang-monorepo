import { KillAwait } from './kill-await.js';

const test3 = () => {
  const res = KillAwait.promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, 2000);
  });
  console.log("test 3 res", res);
  return res;
};

const test2 = () => {
  const res = KillAwait.promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });

  console.log("test 2 res", res);
  return test3();
};

const test1 = () => {
  const res1 = KillAwait.promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });

  console.log("test 1 res1", res1);
  const res2 = KillAwait.promise((resolve) => {
    setTimeout(() => {
      resolve(1.2);
    }, 2000);
  });

  console.log("test 1 res2", res2);
  return test2();
};

const main2 = () => {
  const res = test1();
  console.log("test 最终结果 res", res);
};
KillAwait.execute(main2);

