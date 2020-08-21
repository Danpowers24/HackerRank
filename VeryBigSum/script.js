// This first chunk is all assuming we didn't get an array as the input, instead, a long string of numbers as strings

// const ar = "1000000001 1000000002 1000000003 1000000004 1000000005"

// function aVeryBigSum(ar) {
//     // split the array up by space
//     let newAr = ar.split(" ");
//     let result = 0

//     console.log("ar is ",  newAr);
//     let newerAr = newAr.map(item => parseInt(item))
//     console.log(newerAr)
//     if (newerAr.length >= 1 && newerAr.length <= 10) {
//         console.log('array length is cool')
//         for (let i = 0; i < newerAr.length; i++) {
//             if (newerAr[i] >= 0 && newerAr[i] <= 10**10) {
//                 result += newerAr[i]
//             } else {
//                 console.log("failed")
//                 return false
//             } 
//         }
//     } else {
//         console.log("failed")
//         return false
//     }
//     return result
// }

// This passes HackerRank tests
const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {
    let result = 0
    // let newerAr = newAr.map(item => parseInt(item))
    // console.log(newerAr)
    if (ar.length >= 1 && ar.length <= 10) {
        console.log('array length is cool')
        for (let i = 0; i < ar.length; i++) {
            if (ar[i] >= 0 && ar[i] <= 10**10) {
                result += ar[i]
            } else {
                console.log("failed")
                return false
            } 
        }
    } else {
        console.log("failed")
        return false
    }
    return result
}

aVeryBigSum(ar)