const ar = [4, 2, 3, 4];

function birthdayCakeCandles(ar) {
    let maxHeight = ar.reduce(function(a, b) {
        return Math.max(a, b)
    })
    let result = 0
    for (const candle of ar) {
        if (candle == maxHeight) {
            result += 1
        }
    }
    return result
}

birthdayCakeCandles(ar)