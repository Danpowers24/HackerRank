function even(start, n) {
    // # let until = n
    // # loop, that starts at start (if start % 2 = 1, then start+)  num
    let result = []
    let counter = 0
    for (let i = start; counter < n; i++) {
        // add conditional to check for even-ness
        if (i % 2 == 0) {
            result.push(i)
            counter++
        }
    }
    console.log(result);
}

even(5, 7)