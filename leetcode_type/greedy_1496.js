/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const xy = [0, 0];
  const set = new Set([xy.join("-")]);

  for (const p of path) {
    if (p === "N") {
      xy[1]++;
    } else if (p === "E") {
      xy[0]++;
    } else if (p === "S") {
      xy[1]--;
    } else {
      xy[0]--;
    }

    const current = xy.join("-");
    if (set.has(current)) {
      return true;
    }

    set.add(current);
  }
  return false;
};

console.log(isPathCrossing("NES"));
console.log(isPathCrossing("NESWW"));
