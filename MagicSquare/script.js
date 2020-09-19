
// always going to be given a 3x3 magic square
// so first, let's make sure we can just make a magic square - maybe from scratch
// then let's see if we can make a magic square given an input, will this be harder?
// then we can optimize it (the answer to the problem) by finding lowest costs 

let s = [[4, 9, 2], [3, 5, 7], [8, 1, 5]]

// let s = [[4, 9, 2], 
//          [3, 5, 7], 
//          [8, 1, 5*]] change s[2][2]  5 -> 6

function formingMagicSquare(s) {
    
    // going to have to access each row, column, and diagonal
    let row1 = [s[0][0], s[0][1], s[0][2]]
    let row2 = [s[1][0], s[1][1], s[1][2]]
    let row3 = [s[2][0], s[2][1], s[2][2]]
    let col1 = [s[0][0], s[1][0], s[2][0]]
    let col2 = [s[0][1], s[1][1], s[2][1]]
    let col3 = [s[0][2], s[1][2], s[2][2]]
    let diag1 = [s[0][0], s[1][1], s[2][2]]
    let diag2 = [s[0][2], s[1][1], s[2][0]]
    // going to have to sum each row, column, and diagonal
    let row1Sum = 0
    for (const num of row1) {
        row1Sum += num
    }
    let row2Sum = 0
    for (const num of row2) {
        row2Sum += num
    }
    let row3Sum = 0
    for (const num of row3) {
        row3Sum += num
    }
    let col1Sum = 0
    for (const num of col1) {
        col1Sum += num
    }
    let col2Sum = 0
    for (const num of col2) {
        col2Sum += num
    }
    let col3Sum = 0
    for (const num of col3) {
        col3Sum += num
    }
    let diag1Sum = 0
    for (const num of diag1) {
        diag1Sum += num
    }
    let diag2Sum = 0
    for (const num of diag2) {
        diag2Sum += num
    }
    console.log(row1Sum)
    console.log(row2Sum)
    console.log(row3Sum)
    console.log(col1Sum)
    console.log(col2Sum)
    console.log(col3Sum)
    console.log(diag1Sum)
    console.log(diag2Sum)
// going to have to find the magic constant
// magic constant is always going to be 15?
// so if a sum does not equal the magic constant, we need to fix it
// add or subtract a number to make it equal 15, and have the new number not equal any other number in the matrix
// once we find the difference between the sum of a given row/col/diag, then I need to loop through each one to find which number I can manipulate the least

}

formingMagicSquare(s)











