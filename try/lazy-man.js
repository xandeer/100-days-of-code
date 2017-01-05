function _LazyMan(name) {
  this.tasks = [];
  var self = this;

  var fn = ((n) => {
    var name = n;
    return () => {
      console.log(`Hi! This is ${name}!`);
      self.next();
    }
  })(name);

  this.tasks.push(fn);

  setTimeout(() => {
    self.next();
  }, 0);
}

_LazyMan.prototype.next = function() {
  var fn = this.tasks.shift();
  fn && fn();
}

_LazyMan.prototype.sleep = function(time) {
  var self = this;

  var fn = ((time) => {
    return () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}s!`);
        self.next();
      }, time * 1000);
    };
  })(time);

  this.tasks.push(fn);
  return this;
}

_LazyMan.prototype.eat = function(name) {
  var self = this;
  var fn = ((name) => {
    return () => {
      console.log(`Eat ${name}~`);
      self.next();
    }
  })(name);

  this.tasks.push(fn);
  return this;
}

function LazyMan(name) {
  return new _LazyMan(name);
}

module.exports = LazyMan;
