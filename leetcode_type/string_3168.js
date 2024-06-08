/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
  let max = 0;
  let count = 0;

  for (const t of s) {
    if (t === "E") {
      count++;
      max = Math.max(max, count);
    } else {
      count--;
    }
  }

  return max;
};

console.log(minimumChairs("EEEEEEE"));
console.log(minimumChairs("ELELEEL"));
console.log(minimumChairs("ELEELEELLL"));
