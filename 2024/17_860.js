/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const map = new Map([
    [5, 0],
    [10, 0],
    [20, 0],
  ]);

  for (const bill of bills) {
    map.set(bill, map.get(bill) + 1);
    let ret = bill - 5;

    while (ret >= 10 && map.get(10) !== 0) {
      map.set(10, map.get(10) - 1);
      ret -= 10;
    }

    while (ret >= 5) {
      if (map.get(5) === 0) {
        return false;
      }
      map.set(5, map.get(5) - 1);
      ret -= 5;
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
