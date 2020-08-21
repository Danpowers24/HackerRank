const a = [1, 2, 3]
const b = [3, 2, 1]

function compareTriplets(a, b) {
    let aliceBob = [0, 0]
    console.log(aliceBob)
    for (let i = 0; i <= 2; i++)
        if (a[i] > b[i]) {
            aliceBob[0]++
            console.log('ALICEBob added by 1', aliceBob)
        } else if (a[i] < b[i]) {
            aliceBob[1]++
            console.log('aliceBOB added by 1', aliceBob)
        }
    return aliceBob
}

compareTriplets(a, b)