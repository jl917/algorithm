/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) {
    return true;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      continue;
    }

    if (i === 0 && (flowerbed[1] === 0 || flowerbed[1] === undefined)) {
      flowerbed[0] = 1;
      n--;
    } else if (
      i === flowerbed.length - 1 &&
      flowerbed[flowerbed.length - 2] === 0
    ) {
      flowerbed[flowerbed.length - 1] = 1;
      n--;
    } else {
      if (
        flowerbed[i - 1] === 0 &&
        flowerbed[i] === 0 &&
        flowerbed[i + 1] === 0
      ) {
        flowerbed[i] = 1;
        n--;
      }
    }

    if (n === 0) {
      return true;
    }
  }

  return false
};

// console.log(canPlaceFlowers([1,0,0,0,1], 1))
// console.log(canPlaceFlowers([1,0,0,0,1], 2))
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));
console.log(canPlaceFlowers([0], 1));
console.log(canPlaceFlowers([0,0,0,0,0,1,0,0], 0))