/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if(n < 1){
    return false;
  }else if (n === 1) {
    return true;
  }

  const nums = [2, 3, 5];

  for(const num of nums){
    while (n / num === Math.floor(n / num)) {
      n /= num;
    }
  }

  return n === 1;
};

console.log(isUgly(6));
console.log(isUgly(1));
console.log(isUgly(14));
