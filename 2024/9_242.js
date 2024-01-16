/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   for (const str of s) {
//     s = s.replace(str, '');
//     t = t.replace(str, '');
//   }

//   return t.length === 0 && s.length === 0;
// };
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();

  for (const str of s) {
    map.set(str, map.get(str) ? map.get(str) + 1 : 1);
  }

  for (const str of t) {
    if (map.get(str) >= 0) {
      map.set(str, map.get(str) - 1);
    } else {
      return false;
    }
  }

  for (const value of map.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
