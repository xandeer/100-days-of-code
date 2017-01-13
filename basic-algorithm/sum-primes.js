function sumPrimes(num) {
  var sum = 0;

  var isPrime = function(n) {
    var flag = true;
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        flag = false;
        break;
      }
    }
    return flag;
  };

  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

module.exports = sumPrimes;
