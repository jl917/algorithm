/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let base = -1;
  const tokens = s.split(" ");
  for (const token of tokens) {
    const current = parseInt(token, 10);
    if (current == token) {
      if (current <= base) {
        return false;
      }
      base = current;
    }
  }
  return true;
};

console.log(
  areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
);

console.log(areNumbersAscending("hello world 5 x 5"));
console.log(
  areNumbersAscending(
    "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
  )
);
