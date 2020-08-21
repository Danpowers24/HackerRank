const arr = [1, 2, 3, 4, 5, 6]
console.log(arr)

function simpleArraySum(arr) {
    let count = 0
    console.log(arr)
    // Cannot read property .length of undefined
    for (let i = 0; i < arr.length; i++) {
        count = count + i
    }
    return count
}

simpleArraySum()