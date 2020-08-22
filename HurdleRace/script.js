let k = 88
let height = [1, 6, 3, 5, 2]


function hurdleRace(k, height) {
    let maxHeight = height.reduce(function(a, b) {
        return Math.max(a, b)
    })
    let result = maxHeight - k
    if (result < 0) {
        result = 0
    }
    return result
}

hurdleRace(k, height)