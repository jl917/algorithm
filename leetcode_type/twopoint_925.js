/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  if (typed.length < name.length) {
    return false;
  }
  let start = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === name[start]) {
      start++;
    } else {
      start--;
      if (typed[i] !== name[start]) {
        return false;
      } else {
        start++;
      }
    }
  }

  return name.length === start;
};

console.log(isLongPressedName("alex", "aaleex"));
console.log(isLongPressedName("saeed", "ssaaedd"));
console.log(isLongPressedName("pyplrz", "ppyypllr"));
