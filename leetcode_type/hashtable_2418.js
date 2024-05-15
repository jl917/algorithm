/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const datas = [];

  for (let i = 0; i < names.length; i++) {
    datas.push([names[i], heights[i]]);
  }

  datas.sort((a, b) => b[1] - a[1]);

  return datas.map((e) => e[0]);
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
