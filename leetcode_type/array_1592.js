/**
 * @param {length} number
 * @return {string}
 */
const getSpace = function (length) {
  let result = "";
  while (length > 0) {
    result += " ";
    length--;
  }
  return result;
};
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let spaceCount = 0;
  const words = [];
  let tmp = "";

  for (const s of text) {
    if (s === " ") {
      if (tmp) {
        words.push(tmp);
      }
      tmp = "";
      spaceCount += 1;
    } else {
      tmp += s;
    }
  }

  if (tmp) {
    words.push(tmp);
  }

  const count =
    words.length < 2
      ? ""
      : getSpace(Math.floor(spaceCount / (words.length - 1)));
  const rest =
    words.length < 2
      ? getSpace(spaceCount)
      : getSpace(spaceCount % (words.length - 1));
  return words.join(count) + rest;
};

console.log(reorderSpaces("  this   is  a sentence "));
console.log(reorderSpaces("  hello"));
// console.log(reorderSpaces(" practice   makes   perfect"));
// console.log(reorderSpaces("hello   world"));
// console.log(reorderSpaces("  walks  udp package   into  bar a"));
// console.log(reorderSpaces("a"));
