function checkCashRegister(price, cash, cid) {
  function multiple100(arg) {
    if (Array.isArray(arg)) {
      arg.forEach((item) => {
        item[1] *= 100;
      });
      return arg;
    } else if (typeof arg == 'number') {
      return arg * 100;
    }
  }

  function div100(arg) {
    if (Array.isArray(arg)) {
      arg.forEach((item) => {
        item[1] /= 100;
      });
      return arg;
    } else if (typeof arg == 'number') {
      return arg / 100;
    }
  }

  const cList = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];

  var change = multiple100(cash) - multiple100(price);

  multiple100(cid).reverse();

  var ret = [];
  var isClosed = true;
  for (let i = 0; i < cid.length; i++) {
    let currency = cid[i];
    let changeCurrency = currency.slice(0);
    changeCurrency[1] = 0;
    if (change >= cList[i] && currency[1] > 0) {
      changeCurrency[1] = change > currency[1] ? currency[1] : parseInt(change /
        cList[i]) * cList[i];
      change -= changeCurrency[1];
      currency[1] -= changeCurrency[1];
      ret.push(changeCurrency);
    }
    if (currency[1] > 0) {
      isClosed = false;
    }
  }

  if (change > 0) {
    ret = "Insufficient Funds";
  } else if (isClosed) {
    ret = 'Closed';
  } else {
    div100(ret);
  }

  div100(cid).reverse();
  return ret;
}

module.exports = checkCashRegister;
