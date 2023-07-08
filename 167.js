// 167. 两数之和 II - 输入有序数组
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const map = new Map()
  map.set(target - numbers[0], 0);

  for (let i = 1; i < numbers.length; i++) {
    const index = map.get(numbers[i]);

    if (index !== undefined) {
      return [index + 1, i + 1];
    } else {
      map.set(target - numbers[i], i);
    }
  }
};

twoSum([2, 7, 11, 15], 9);
console.log(twoSum([2, 7, 11, 15], 9));
// twoSum([2,3,4], 6);
console.log(twoSum([2,3,4], 6));
// twoSum([-1,0], -1);
console.log(twoSum([-1,0], -1))