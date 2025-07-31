const eventHandler = {
  events: {}, // 存储事件及对应的处理函数

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  },

  publish(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(data));
  }
};

// 订阅按钮点击事件
eventHandler.subscribe('buttonClick', function() {
  console.log('Button clicked!');
});

// 模拟按钮触发点击事件
eventHandler.publish('buttonClick');