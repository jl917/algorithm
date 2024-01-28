/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = new Map();
  let min = 9999;
  let result = [];
  const [smallList, largeList] =
    list1.length <= list2.length ? [list1, list2] : [list2, list1];

  let length = smallList.length;

  for (let i = 0; i < smallList.length; i++) {
    map.set(smallList[i], i);
  }

  for (let i = 0; i < largeList.length; i++) {
    if (length <= 0) {
      break;
    }

    if (map.has(largeList[i])) {
      const indexSum = map.get(largeList[i]) + i;
      length--;

      if (indexSum < min) {
        result = [largeList[i]];
        min = indexSum;
      } else if (indexSum === min) {
        result.push(largeList[i]);
      }
    }
  }
  return result;
};

findRestaurant(
  ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
);
findRestaurant(
  ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  ["KFC", "Shogun", "Burger King"]
);
