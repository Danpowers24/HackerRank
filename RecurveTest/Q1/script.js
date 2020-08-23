function even(start, n) {
    // # may need to add in constraints
    // # let until = n
    // # loop, that starts at start (if start % 2 = 1, then start+)  num
    let result = []
    let counter = 0
    for (i = 0; i <= 100; i++) {
        // add conditional to 
        if (i % 2 == 0 && i >= start && counter <= n) {
            console.log(i)
            result.push(i)
            counter++
        }
    }
    console.log(result);
    //     # prints n times
    //     # conditional checking for even-ness
    //     # if i % 2 = 0 
    //     # push i into return list array
    //     # return a list (array?)
}

even(96, 4)