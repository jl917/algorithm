/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const map = new Map();
  let start = 0;
  let end = s.length - 1;
  let max = -1;

  while (start <= end) {
    if (map.has(s[start])) {
      max = Math.max(Math.abs(start - map.get(s[start])) - 1, max);
    } else {
      map.set(s[start], start);
    }

    start++;

    if (map.has(s[end])) {
      max = Math.max(Math.abs(end - map.get(s[end])) - 1, max);
    } else {
      map.set(s[end], end);
    }

    end--;
  }

  return max;
};

console.log(maxLengthBetweenEqualCharacters("aa")); // 0
console.log(maxLengthBetweenEqualCharacters("abca")); // 2
console.log(maxLengthBetweenEqualCharacters("cbzxy")); // -1
console.log(maxLengthBetweenEqualCharacters("cabbac")); // 4
console.log(maxLengthBetweenEqualCharacters("mgntdygtxrvxjnwksqhxuxtrv"))
