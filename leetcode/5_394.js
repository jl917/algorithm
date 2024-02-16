/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function (s) {
  const map = new Map([
    ["1", true],
    ["2", true],
    ["3", true],
    ["4", true],
    ["5", true],
    ["6", true],
    ["7", true],
    ["8", true],
    ["9", true],
    ["0", true],
  ]);
  const stack = [];

  let cNum = "";
  let cStr = "";

  for (const t of s) {
    if (map.get(t)) {
      cNum += t;
    } else if (t === "[") {
      stack.push([cNum, cStr]);
      cNum = "";
      cStr = "";
    } else if (t === "]") {
      const sta = stack.pop();
      cStr = sta[1] + cStr.repeat(parseInt(sta[0], 10));
    } else {
      cStr += t;
    }
  }
  return cStr;
};

decodeString("3[a]2[bc]");
decodeString("3[a2[c]]");
decodeString("2[abc]3[cd]ef");
decodeString("abc3[cd]xyz");
decodeString("12[a]");
