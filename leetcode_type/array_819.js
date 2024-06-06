/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const ignoreSet = new Set(["!", "?", "'", ",", ";", "."]);
  const banSet = new Set(banned);

  const map = new Map();
  let maxWord = "";

  let tmp = "";
  for (const t of paragraph) {

    if (ignoreSet.has(t) || t === " ") {
      if (tmp) {
        if (!banSet.has(tmp)) {
          map.set(tmp, map.has(tmp) ? map.get(tmp) + 1 : 1);
          if (map.get(tmp) > (map.get(maxWord) || 0)) {
            maxWord = tmp;
          }
        }

        tmp = "";
      }
    } else {
      tmp += t.toLocaleLowerCase();
    }
  }

  if (tmp) {
    map.set(tmp, map.has(tmp) ? map.get(tmp) + 1 : 1);
    if (map.get(tmp) > (map.get(maxWord) || 0)) {
      maxWord = tmp;
    }
  }

  return maxWord;
};

console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
);

console.log(mostCommonWord("a.", []));
console.log(mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]));
