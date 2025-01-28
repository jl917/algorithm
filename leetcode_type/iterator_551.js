/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let countA = 0;
  let countL = 0;

  for (const t of s) {
    if (t === "A") {
      countA += 1;
      countL = 0;

      if (countA >= 2) {
        return false;
      }
    } else if (t === "L") {
      countL += 1;
      if (countL >= 3) {
        return false;
      }
    } else {
      countL = 0;
    }
  }

  return true;
};
console.log(checkRecord("PPALLP")); // true
console.log(checkRecord("PPALLL")); // false
