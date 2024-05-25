/**
 * @param {number[]} documents
 * @return {number}
 */
var findRepeatDocument = function (documents) {
  const set = new Set();

  for (const d of documents) {
    if (set.has(d)) {
      return d;
    }
    set.add(d);
  }
};

console.log(findRepeatDocument([2, 5, 3, 0, 5, 0]));
