/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = [];
  const list = [];

  const backtracking = function (index) {
    if (index >= s.length && list.length === 4 && isValidIp(list)) {
      result.push(list.join("."));
      return;
    }

    for (let i = index; i < s.length; i++) {
      list.push(s.slice(index, i + 1));
      backtracking(i + 1);
      list.pop();
    }
  };

  backtracking(0);
  return result;
};

/**
 * @param {string[]} arr
 * @return {boolean}
 */
const isValidIp = function (arr) {
  // // 4개 아닐경우 무조건 아님.
  // if (arr.length !== 4) {
  //   return false;
  // }

  for (const s of arr) {
    // 0으로  시작하고 크기가 2보다 클 경우.
    if (s[0] === "0" && s.length > 1) {
      return false;
    }

    // 숫자가 255보다 클 경우 
    if (parseInt(s, 10) > 255) {
      return false;
    }
  }

  return true;
};

console.log(restoreIpAddresses('25525511135'))
console.log(restoreIpAddresses('0000'))
console.log(restoreIpAddresses('101023'))