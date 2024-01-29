/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

const isBadVersion = function (number) {
  return number >= 4;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;

    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2);

      if (isBadVersion(mid) === false) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return start
  };
};

console.log(solution(isBadVersion)(5));
