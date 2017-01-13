function sumFibs(num) {
  var sum = 0;
  var fibs = [];
  var fib = function(n) {
    if (n == 1 || n == 2) {
      fibs[n - 1] = 1;
      return 1;
    }
    if (fibs.length < n) {
      fibs.push(fib(n - 1) + fib(n - 2));
    }
    return fibs[n - 1];
  };

  for (var i = 1; fib(i) <= num; i++) {
    if (fib(i) % 2 !== 0) {
      sum += fib(i);
    }
  }

  return sum;
}

module.exports = sumFibs;
