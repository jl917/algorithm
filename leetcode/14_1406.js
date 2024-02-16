/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);

  while (stones.length > 1) {
    const gap = stones.pop() - stones.pop();
    if (gap !== 0) {
      if (stones.length === 0) {
        return gap;
      }

      if (stones[stones.length - 1] <= gap) {
        stones.push(gap);
      } else {
        for (let i = 0; i < stones.length; i++) {
          if (stones[i] >= gap) {
            stones.splice(i, 0, gap);
            break;
          }
        }
      }
    }
  }

  return stones.length ? stones[0] : 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1, 3]));

console.log(lastStoneWeight([7, 6, 7, 6, 9]));
