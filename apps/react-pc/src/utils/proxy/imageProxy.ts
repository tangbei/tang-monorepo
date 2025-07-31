// 代理模式
export const relImage = (function () {
  const imgNode = document.createElement('img');
  document.body.appendChild(imgNode);
  return {
    setSrc(src: string) {
      console.log('relImage-setSrc', src);
      imgNode.src = src;
    }
  };
})();

export const proxyImage = (function () {
  const img = new Image();
  // 实际要加载的图片 加载成功后 替换调占位图
  img.onload = function () {
    console.log('img.onload', img.src);
    relImage.setSrc(img.src);
  };
  return {
    setSrc(src: string) {
      console.log('setSrc', src);
      img.src = src;
      // 设置占位图
      relImage.setSrc('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
    }
  };
})();
