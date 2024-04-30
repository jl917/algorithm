/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  let tmp = k;
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "-") {
      continue;
    }

    if (tmp === 0) {
      tmp = k;
      result = "-" + result;
      i++
    } else {
      tmp--;
      result = s[i] + result;
    }
  }
  return result.toUpperCase();
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J", 2));
