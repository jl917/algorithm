/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0) {
    return tasks.length;
  }
  let count = 0;
  const map = new Map();

  for (const task of tasks) {
    map.set(task, map.has(task) ? map.get(task) + 1 : 1);
  }

  while (map.size > 0) {
    const tmp = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < n + 1; i++) {
      if (map.size === 0) {
        return count;
      }

      if (tmp[i]) {
        if (map.get(tmp[i][0]) === 1) {
          map.delete(tmp[i][0]);
        } else {
          map.set(tmp[i][0], map.get(tmp[i][0]) - 1);
        }
      }

      count++;
    }
  }
  return count;
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 0));

console.log(
  leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)
);

console.log(leastInterval(["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"], 4));
