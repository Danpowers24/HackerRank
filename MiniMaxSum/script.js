let arr = [-5, 3, 2, 1, 4]

function miniMaxSum(arr) {
    let total = 0
    for (const item of arr) {
        total += item
    }
        let newLargestEl = 0
        let largestEl = 0
        let largestSum = 0
        let smallestSum = 0
        // Determine smallestSum
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largestEl) {
                largestEl = arr[i]
            }
        smallestSum = total - largestEl 
        newLargestEl = largestEl
        }
        let smallestEl = newLargestEl
        // Determine largestSum
        for (let i = arr.length; i >= 0; i--) {
            // find smallest element in array
            if (arr[i] < smallestEl) {
                smallestEl = arr[i]
            }
            largestSum = total - smallestEl   
        }
    console.log(smallestSum, largestSum)
}

miniMaxSum(arr)
