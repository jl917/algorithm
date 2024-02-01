/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") {
    return [];
  }
  const map = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  const result = [];
  const list = [];

  const backtracking = function (index) {
    if (list.length === digits.length) {
      result.push(list.join(""));
      return "";
    }

    for (const v of map.get(digits[index])) {
      list.push(v);
      backtracking(index + 1);
      list.pop();
    }
  };

  backtracking(0);
  return result;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));

console.log(letterCombinations("2"));
