
let arr = [
    [1,2,3,],
    [4,5,6,],
    [7,8,9]
  ];
  
  function diagonalDifference(arr) {
    let firstDiag = 0
    let secondDiag = 0
    // push in values of first diagonal
    for (let i = 0; i < arr.length; i++) {
      // push in arr[i][i] into firstDiag
      firstDiag += arr[i][i]
    }
    // push in values of second diagonal
    let z = arr.length - 1
      for (let j = 0; j < arr.length; j++) {
        secondDiag += arr[j][z]
        z--
      }
    return Math.abs(firstDiag - secondDiag)
  }

  diagonalDifference(arr);

