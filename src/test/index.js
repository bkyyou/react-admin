function Emit() {
  this.cbFun = {};
}

Emit.prototype.onceOn = function(name, cb) {
  if (this.cbFun[name]) {
    this.cbFun[name].cbArr.push(cb);
  } else {
    this.cbFun[name] = {cbArr: [cb], once: true};
  }
}

Emit.prototype.on = function(name, cb) {
  if (this.cbFun[name]) {
    this.cbFun[name].cbArr.push(cb);
  } else {
    this.cbFun[name] = {cbArr: [cb], once: false};
  }
}

Emit.prototype.emit = function(name) {
  if (this.cbFun[name]) {
    for (const fun of this.cbFun[name].cbArr) {
      fun();
    }
    this.cbFun[name].once && this.del(name);
  }
}

Emit.prototype.del = function(name) {
  this.cbFun[name] && delete this.cb[name];
}