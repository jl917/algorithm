/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let index = 0;
  const map = new Map();
  const set = new Set();

  for (const k of key) {
    if (k !== " " && !set.has(k)) {
      set.add(k);
      map.set(k, alphabets[index]);
      index++;
    }
  }
  let result = "";
  for (const m of message) {
    result += m === " " ? " " : map.get(m);
  }
  return result;
};

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);
