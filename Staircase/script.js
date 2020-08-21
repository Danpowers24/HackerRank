
// console.log n - i spaces, and i hashes
        // i = 1 sss#
        // i = 2 ss##
        // i = 3 s###
        // i = 4 ####

function staircase(n) {
    let hashes = ''
    let result = ''
    for (let i = 1; i <= n; i++) { 
        hashes += '#'
        // concat n - i amount of spaces
        let spaces = " ".repeat(n - i)
        // add another line of correct amount of spaces and hashes
        result += spaces + hashes + "\n"
    }
    console.log(result)
}

staircase(14)