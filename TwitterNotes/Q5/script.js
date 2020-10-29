let arrival = [1, 3, 5]
let duration = [2, 2, 2]


function maxEvents(arrival, duration) {

    let maxEvents = []
    let allCompanies = []

    // create matrix of each company, arrival times paired with corresponding duration times
    for (let i = 0; i < arrival.length; i++) {
        for (let j = 0; j < duration.length; j++) {
            if (i===j) {
                allCompanies.push([arrival[i], duration[j]])
            }
        }
    }
    // sort the matrix by arrival time
    // if the arrival times are the same, then sort by shortest duration first
    const allCompaniesSorted = allCompanies.sort(function(a, b) {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        }
            return a[0]-b[0]
        })    // console.log('allCompaniesSorted', allCompaniesSorted)
    // split the matrix back up into 2 different (now sorted) arrays 
    let arrivalTimesSorted = []
    let durationTimesSorted = []
    for (let i = 0; i < allCompaniesSorted.length; i++) {
        arrivalTimesSorted.push(allCompaniesSorted[i][0])
        durationTimesSorted.push(allCompaniesSorted[i][1])
    }
    // console.log('arrivalTimesSorted', arrivalTimesSorted)
    // console.log('durationTimesSorted', durationTimesSorted)

    // start scheduling
    for (let i = 0; i < allCompaniesSorted.length; i++) {
        // maxEvents.push(i)
        console.log('current comapny being evaluated: ', allCompaniesSorted[i])
        console.log('arrivalTimesSorted[i+1] undefined? ', arrivalTimesSorted[i+1])
        if ((arrivalTimesSorted[i] - 1) + (durationTimesSorted[i] - 1) <= arrivalTimesSorted[i+1] || arrivalTimesSorted[i+1]=== undefined) {
            maxEvents.push(allCompaniesSorted[i])
            console.log('hit first if ... maxEvents:', maxEvents)
        } else if ((arrivalTimesSorted[i] - 1) + (durationTimesSorted[i] - 1) >= (arrivalTimesSorted[i + 1] - 1) + (durationTimesSorted[i + 1] - 1)) {
            maxEvents.pop()
            console.log('hit second if ... maxEvents after pop:', maxEvents)

            maxEvents.push(allCompaniesSorted[i])
            console.log('hit second if ... maxEvents after push:', maxEvents)

        }
    }
    console.log('maxEvents.length', maxEvents.length)
}

maxEvents(arrival, duration)
