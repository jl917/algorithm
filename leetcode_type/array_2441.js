/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 0;
  for (const sentence of sentences) {
    let count = 0;
    for (const s of sentence) {
      if (s === " ") {
        count++;
      }
    }

    max = Math.max(count + 1, max);
  }

  return max;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);

console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
);
