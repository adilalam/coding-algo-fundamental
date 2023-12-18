/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

matrix = [[7], [9], [6]];

// var spiralOrder = function (matrix) {
//   let rows = matrix.length;
//   let columns = matrix[0].length;
//   let result = [];
//   let up = 0;
//   let left = 0;
//   let right = columns - 1;
//   let down = rows - 1;

//   while (result.length < rows * columns) {
//     // Traverse from left to right.
//     for (let col = left; col <= right; col++) {
//       result.push(matrix[up][col]);
//     }
//     // Traverse downwards.
//     for (let row = up + 1; row <= down; row++) {
//       result.push(matrix[row][right]);
//     }
//     // Make sure we are now on a different row.
//     if (up != down) {
//       // Traverse from right to left.
//       for (let col = right - 1; col >= left; col--) {
//         result.push(matrix[down][col]);
//       }
//     }
//     // Make sure we are now on a different column.
//     if (left != right) {
//       // Traverse upwards.
//       for (let row = down - 1; row > up; row--) {
//         result.push(matrix[row][left]);
//       }
//     }
//     left++;
//     right--;
//     up++;
//     down--;
//   }

//   return result;
// };

var spiralOrder = function (matrix) {
  let m = matrix.length; // row length
  let n = matrix[0].length; // column length
  let result = []; // my final ans

  let row = 0;
  let column = 0;
  while (m > 1) {
    // if column is 1, means we have to travel in row only
    if (n == 1) {
      for (let i = 0; i < m; i++) {
        result.push(matrix[row][column]);
        row++;
      }
    } else {
      // row is same, but column increment
      for (let i = 0; i < n - 1; i++) {
        result.push(matrix[row][column]);
        column++;
      }

      // row increment, but column same
      for (let i = 0; i < m - 1; i++) {
        result.push(matrix[row][column]);
        row++;
      }

      // row same, column decrese
      for (let i = 0; i < n - 1; i++) {
        result.push(matrix[row][column]);
        column--;
      }

      // row dcrese, column same
      for (let i = 0; i < m - 1; i++) {
        result.push(matrix[row][column]);
        row--;
      }
    }

    m = m - 2;
    n = n - 2;
    row++;
    column++;
  }
  //   console.log(m, n);

  if (m == 1) {
    for (let i = 0; i < n; i++) {
      result.push(matrix[row][column]);
      column++;
    }
  }

  return result;
};

console.log(spiralOrder(matrix));
