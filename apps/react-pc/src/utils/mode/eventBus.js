class EventBus {
  constructor() {
    this.events = [];
  }

  on(type, fn) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(fn);
  }

  once(type, fn) {
    const f = (...args) => {
      fn.apply(this, args);
      this.off(type, f);
    };
    this.on(type, f);
  }

  off(type, fn) {
    if (this.events[type]) {
      // 进行过滤
      this.events[type] = this.events[type].filter((item) => item !== fn);
    }
  }

  emit(type, ...args) {
    this.events[type].forEach((fn) => {
      // console.log('fn', args);
      fn.apply(this, args);
    });
  }
}

const eventBus = new EventBus();

eventBus.on('test', (...args) => {
  console.log('test', args);
});

eventBus.emit('test', 1, 2);
eventBus.emit('test', 1, 2);
