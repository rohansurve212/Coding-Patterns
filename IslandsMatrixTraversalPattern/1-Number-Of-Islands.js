/** @format */

// DFS - Depth First Search (we'll update the input matrix to mark cells visited)

const visit_island_DFS = (matrix, x, y) => {
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) {
    return //return if it's not a valid cell
  }
  if (matrix[x][y] === 0) {
    return //return if it's a water cell
  }

  matrix[x][y] = 0 //mark the cell visited by making it a water cell

  //recursively visit all neighboring cells (horizontally and vertically)
  visit_island_DFS(matrix, x + 1, y) //lower cell
  visit_island_DFS(matrix, x - 1, y) //upper cell
  visit_island_DFS(matrix, x, y - 1) //right cell
  visit_island_DFS(matrix, x, y + 1) //left cell
}

const count_islands_DFS = (matrix) => {
  const rows = matrix.length
  const cols = matrix[0].length
  let totalIslands = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        //only if the cell is a land, we've found an island
        totalIslands++
        visit_island_DFS(matrix, i, j)
      }
    }
  }
  return totalIslands
}

console.log(
  count_islands_DFS([
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
)
console.log(
  count_islands_DFS([
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ])
)
