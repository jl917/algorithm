/**
 * @param {number} num
 * @return {number}
 */
let c = 0;
var maximum69Number = function (num) {
  let changeStatus = true;
  let count = 1;
  let tmp = num;
  let tmp2 = num;

  while (tmp > 10) {
    count *= 10;
    tmp = tmp / 10;
  }

  while (count >= 1 && changeStatus) {
    const p1 = parseInt(tmp2 / count, 10);
    if (p1 === 6) {
      num += 3 * count;
      changeStatus = false;
    }
    tmp2 -= p1 * count;
    count /= 10;
  }
  return num;
};

console.log(maximum69Number(9669));
console.log(maximum69Number(9996));
console.log(maximum69Number(9999));
