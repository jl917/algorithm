/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
  let count = 5;
  let total = 0;

  while (mainTank > 0) {
    mainTank--;
    count--;
    total += 10;
    if (count === 0 && additionalTank > 0) {
      count = 5;
      mainTank++;
      additionalTank--;
    }
  }
  return total;
};

console.log(distanceTraveled(5, 10));
console.log(distanceTraveled(1, 2));
console.log(distanceTraveled(9, 2));
