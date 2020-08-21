const arr = [2, 1, 0, -1, -2, -3]

function plusMinus(arr) {

    const n = arr.length
    // define pos, neg, and zero variables
        // each value is going to have to be divided by n (number of elements in array)
    let pos = 0
    let neg = 0
    let zero = 0

    // loop through each element of the array
        for (const number of arr) {
            if (number > 0) {
                pos++
            } else if (number < 0) {
                neg++
            } else if (number === 0) {
                zero++
            }
        }
    console.log((pos/n).toFixed(6))
    console.log((neg/n).toFixed(6))
console.log((zero/n).toFixed(6))

}

plusMinus(arr)