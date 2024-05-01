/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const nums = [];
  const strings = [];
  let result = "";

  for (const t of s) {
    t == parseInt(t, 10) ? nums.push(t) : strings.push(t);
  }

  if (Math.abs(nums.length - strings.length) > 1) {
    return "";
  }

  let mins = nums.length > strings.length ? strings : nums;
  let maxs = nums.length <= strings.length ? strings : nums;

  for (let i = 0; i < maxs.length; i++) {
    result += maxs[i] + (mins[i] || "");
  }

  return result;
};

console.log(reformat("a0b1c2"));
console.log(reformat("leetcode"));
console.log(reformat("1229857369"));
console.log(reformat("covid2019"));
console.log(reformat("ab123"));
