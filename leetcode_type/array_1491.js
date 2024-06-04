/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let min = salary[0];
  let max = salary[0];
  let total = 0;

  for (const s of salary) {
    min = Math.min(s, min);
    max = Math.max(s, max);
    total += s;
  }

  return (total - min - max) / (salary.length - 2);
};

console.log(average([4000, 3000, 1000, 2000]));
console.log(average([1000, 2000, 3000]));
console.log(average([6000, 5000, 4000, 3000, 2000, 1000]));
console.log(average([8000, 9000, 2000, 3000, 6000, 1000]));
