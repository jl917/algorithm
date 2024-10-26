/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "?") {
      let abc = "abc".replace(s[i - 1], "").replace(s[i + 1], "");
      s = s.replace("?", abc[0]);
    }
  }
  return s;
};

console.log(modifyString("?zs"));
console.log(modifyString("ubv?w"));
console.log(modifyString("b?a?c"));
