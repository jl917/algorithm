/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");

  let is1 = v1.length >= v2.length;
  let base = v1.length >= v2.length ? v1 : v2;
  let target = v1.length >= v2.length ? v2 : v1;

  for (let i = 0; i < base.length; i++) {
    target[i] = target[i] || "0";
    console.log(i, parseInt(base[i], 10), parseInt(target[i], 10));
    if (parseInt(base[i], 10) > parseInt(target[i], 10)) {
      return is1 ? 1 : -1;
    } else if (parseInt(target[i], 10) > parseInt(base[i], 10)) {
      return is1 ? -1 : 1;
    } else {
    }
  }
  return 0;
};

// console.log('a',compareVersion("1.2", "1.10"));
// console.log(compareVersion("1.01", "1.001"));
// console.log(compareVersion("1.0", "1.0.0.0"));
console.log(compareVersion("1", "1.1"));
