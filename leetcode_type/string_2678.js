/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let count = 0;

  for (const detail of details) {
    if (parseInt(detail.slice(11, 13), 10) > 60) {
      count++;
    }
  }

  return count;
};
console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
);
console.log(countSeniors(["1313579440F2036", "2921522980M5644"]));
