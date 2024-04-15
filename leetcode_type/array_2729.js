/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  if (n > 333) {
    return false;
  }
  const set = new Set();

  for(let i = 1; i< 4; i++){
    tmp = n * i;
    while (tmp > 0) {
      if (set.has(tmp % 10) || tmp % 10 === 0) {
        return false;
      }
      set.add(tmp % 10);
      tmp = Math.floor(tmp / 10);
    }
  }

  return true;
};
console.log(isFascinating(192));
console.log(isFascinating(100));
console.log(isFascinating(136));

console.log(isFascinating(267));
