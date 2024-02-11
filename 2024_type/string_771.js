/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  const set = new Set();
  for (const j of jewels) {
    set.add(j);
  }

  for (const s of stones) {
    if(set.has(s)){
      count++
    }
  }

  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
