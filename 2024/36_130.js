/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const visited = new Array(board.length)
    .fill()
    .map(() => new Array(board[0].length).fill(false));
  const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const dfs = function (x, y) {
    for (let i = 0; i < 4; i++) {
      const nextX = x + dir[i][0];
      const nextY = y + dir[i][1];

      if (
        nextX < 0 ||
        nextY < 0 ||
        nextX >= board.length ||
        nextY >= board[0].length
      ) {
        continue;
      }

      if(board[nextX][nextY] === 'O' && visited[nextX][nextY] === false){
        visited[nextX][nextY] = true;
        dfs(nextX, nextY)
      }
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (
        i === 0 ||
        j === 0 ||
        i === board.length - 1 ||
        j === board[0].length - 1
      ) {
        if (visited[i][j] === false && board[i][j] === "O") {
          visited[i][j] = true;
          dfs(i, j);
        }
      }
    }
  }

  for (let i = 1; i < board.length - 1; i++) {
    for (let j = 1; j < board[0].length - 1; j++) {
      if(board[i][j] === 'O' && visited[i][j] === false){
        board[i][j] = 'X'
      }
    }
  }

  return board;
};

console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);
console.log(solve([["X"]]));
