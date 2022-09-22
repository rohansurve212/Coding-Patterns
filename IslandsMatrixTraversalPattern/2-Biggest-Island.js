/** @format */

// DFS - Depth First Search (we'll update the input matrix to mark cells visited)

const visit_island_DFS = (matrix, x, y) => {
  if (x < 0 || x > matrix.length || y < 0 || y > matrix[0].length) {
    return 0
  }
  if (matrix[x][y] === 0) {
    return 0
  }
  matrix[x][y] = 0

  let area = 1
  area += visit_island_DFS(matrix, x + 1, y)
  area += visit_island_DFS(matrix, x - 1, y)
  area += visit_island_DFS(matrix, x, y + 1)
  area += visit_island_DFS(matrix, x, y - 1)

  return area
}

const max_area_islands_DFS = (matrix) => {
  const rows = matrix.length
  const cols = matrix[0].length
  let biggestIslandArea = -Infinity

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        biggestIslandArea = Math.max(
          biggestIslandArea,
          visit_island_DFS(matrix, i, j)
        )
      }
    }
  }

  return biggestIslandArea
}

console.log(
  max_area_islands_DFS([
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ])
)
