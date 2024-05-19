/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  let stage = [];
  let isDown = true;
  let x = 0;
  let y = 0;
  let result = [];

  for (const str of s) {
    if (!stage[y]) {
      stage[y] = [];
    }

    stage[y][x] = str;

    if (isDown) {
      y++;
    } else {
      y--;
      x++;
    }

    if (y >= numRows - 1) {
      isDown = false;
    }

    if (y <= 0) {
      isDown = true;
    }
  }

  for (const items of stage) {
    for (const item of items) {
      if (item) {
        result += item;
      }
    }
  }

  return result;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("ABC", 1));
