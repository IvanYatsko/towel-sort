
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length == 0) {
      return [];
    }

  for ( let i = 1; i < matrix.length; i = i + 2 ) {
    matrix[i] = matrix[i].reverse();
  }
  let ret = [];
  for ( let n = 0; n < matrix.length; n++) {
    for ( let m = 0; m < matrix[n].length; m++) {
        ret.push(matrix[n][m])
    }
  }

  return ret;
}
