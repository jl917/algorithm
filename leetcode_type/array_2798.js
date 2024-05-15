/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;
  for (const hour of hours) {
    if (hour >= target) {
      count++;
    }
  }
  return count;
};

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2));
console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6));
