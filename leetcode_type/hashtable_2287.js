/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  if (target.length > s.length) {
    return 0;
  }
  let count = Infinity;
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < s.length; i++) {
    map1.set(s[i], map1.has(s[i]) ? map1.get(s[i]) + 1 : 1);
  }

  for (let i = 0; i < target.length; i++) {
    map2.set(target[i], map2.has(target[i]) ? map2.get(target[i]) + 1 : 1);
  }

  for (const [k, v] of map2.entries()) {
    if (!map1.has(k)) {
      return 0;
    }
    // 각 문자열당 몇번 반복가능 한지 확인, 0이면 바로 종료
    const repeatCount = Math.floor(map1.get(k) / v);
    if (repeatCount === 0) {
      return 0;
    }

    count = Math.min(count, repeatCount);
  }
  return count;
};

// console.log(rearrangeCharacters("ilovecodingonleetcode", "code"));
// console.log(rearrangeCharacters("abcba", "abc"));
// console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa"));
console.log(rearrangeCharacters("rav", "vr"));
