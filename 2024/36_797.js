/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const result = [];
  const list = [0];

  const dfs = function (currentGraph, index) {
    if (index >= graph.length - 1) {
      result.push(list.slice());
      return;
    }

    for (let i = 0; i < graph[index].length; i++) {
      list.push(graph[index][i]);
      dfs(currentGraph, graph[index][i]);
      list.pop();
    }
  };
  dfs(graph, 0);
  return result;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
