/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const list = [];

  const backtracking = function (index) {
    if (index >= s.length) {
      result.push(list.slice());
      return "";
    }

    for (let i = index; i < s.length; i++) {
      const str = s.slice(index, i + 1);
      if (isPalindrome(str)) {
        list.push(str);
        backtracking(i + 1);
        list.pop();
      }
    }
  };

  backtracking(0);
  return result;
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(partition("aab"));
console.log(partition("a"));
