/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
  s = s.toLocaleLowerCase();
  let current = s[0];
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== current) {
      count++;
      current = s[i];
    }
  }

  return count;
};

console.log(countKeyChanges("aAbBcC"));
console.log(countKeyChanges("AaAaAaaA"));
