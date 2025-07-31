class SingleMode {
  constructor(name) {
    this.name = name;
  }

  static getInstance(name) {
    if (!this.instance) {
      this.instance = new SingleMode(name);
    }
    return this.instance;
  }

  getName() {
    return this.name;
  }
}

let a = SingleMode.getInstance('a');
let b = SingleMode.getInstance('b');

console.log(a.getName());
console.log(b.getName());

console.log(a === b);