/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (k === 0) {
    return false;
  }
  const set = new Set();

  for(let i =0; i< nums.length; i++){
    const num = nums[i]
    if (set.has(num)) {
      return true;
    }

    if (set.size >= k) {
      const [first] = set;
      set.delete(first);
    }
    set.add(num);
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
