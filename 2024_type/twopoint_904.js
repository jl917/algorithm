/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  const map = new Map();
  let max = 0;
  let count = 0;
  let slow = 0;

  for (let i = 0; i < fruits.length; i++) {
    map.set(fruits[i], map.has(fruits[i]) ? map.get(fruits[i]) + 1 : 1);
    count++;

    while (map.size > 2) {
      const firstItem = map.get(fruits[slow]);
      if (firstItem > 1) {
        map.set(fruits[slow], firstItem - 1);
      } else {
        map.delete(fruits[slow]);
      }
      slow++;
      count--;
    }

    if (count > max) {
      max = count;
    }
  }
 return max;
};

console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));
