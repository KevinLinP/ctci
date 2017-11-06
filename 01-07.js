const rotateMatrix = (matrix) => {
  let x, y;
  const lastIndex = matrix.length - 1;

  for (y = 0; y <= (Math.ceil(array.length / 2) - 1); y++) {
    for (x = 0; x <= (Math.floor(array.length / 2) - 1); x++) {
      buffer = array[y][x];

      // jfc
      array[y][x] = array[lastIndex - x][y]
      array[lastIndex - x][y] = array[lastIndex- y][lastIndex - x]
      array[lastIndex- y][lastIndex - x] = array[x][lastIndex - y]
      array[x][lastIndex - y] = buffer
    }
  }
};

const array = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];
rotateMatrix(array);

console.log(array);
