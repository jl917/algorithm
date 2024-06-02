/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1, s2) {
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < 4; i++) {
    const map = i % 2 === 0 ? map1 : map2;

    map.set(s1[i], map.has(s1[i]) ? map.get(s1[i]) + 1 : 1);
    map.set(s2[i], map.has(s2[i]) ? map.get(s2[i]) - 1 : -1);
  }

  const values = [...map1.values(), ...map2.values()];
  for (const count of values) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
};

console.log(canBeEqual("abcd", "cdab"));
console.log(canBeEqual("abcd", "dacb"));
