// in a 4x4 matrix, Array.length = 15
// to find the diagnol of any given size matrix, 
// matrix size ---  n = square root of (array.length + 1)
// to traverse the matrix diagonally, we need to find every


let arr = [
    [1,
    2,
    3,],
    [4,
    5,
    6,],
    [7,
    8,
    9]
  ];
  // let newAr = ar.split(' ');
  //     let result = 0
  //     console.log("ar is ",  newAr);
  //     let newerAr = newAr.map(item => parseInt(item))
  //     console.log(newerAr)
  // let arr = '11 2 4 4 5 6 10 8 -12';
  function diagonalDifference(arr) {
      console.log(arr)
    let newArr = arr.flat();
    console.log(newArr);
    // let newAr = arr.split(' ');
    // let newerAr = newAr.map((item) => parseInt(item));
    let n = Math.sqrt(newArr.length);
    let countOne = 0;
    let countTwo = 0;
    for (let i = 0; i <= newArr.length; i += n + 1) {
      countOne += newArr[i];
      console.log(countOne);
    }
    for (let j = n - 1; j <= newArr.length - n; j += n - 1) {
      countTwo += newArr[j];
      console.log(countTwo);
    }
    let result = Math.abs(countOne - countTwo);
    return result;
  }
  diagonalDifference(arr);