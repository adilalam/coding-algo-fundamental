var addBinary = function (a, b) {
  let needZero = Math.abs(a.length - b.length);
  for (let i = 0; i < needZero; i++) {
    if (a.length > b.length) {
      b = "0" + b;
    } else {
      a = "0" + a;
    }
  }

  let str = "";
  let carry = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + carry;
    let bsum = sum % 2;
    str = bsum + str;
    carry = Math.floor(sum / 2);
  }

  if (carry) {
    str = carry + str;
  }

  return str;
};

console.log(addBinary("11", "110"));
