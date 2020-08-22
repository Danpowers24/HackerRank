
let bill = [3, 10, 2, 9]
let k = bill[1]
let b = 12

// we want 12 - 7 = 5

function bonAppetit(bill, k, b) {
    let total = 0
    for (const item of bill) {
        total += item
    }
    let anna = (total - k )/2
    // console.log(anna);
    // console.log(b);
    let result = b - anna
    if  (result === 0) {
        result = 'Bon Appetit'
    } else {
        console.log(result);
        return result
    }
}

bonAppetit(bill, k, b)