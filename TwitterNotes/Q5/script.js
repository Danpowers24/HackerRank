function maxEvents(arrival, duration) {
    // first method: schedule the shortest meetings first
    // loop to find the lowest duration = shortest
    
    let total = 0
    let shortest = Infinity
    let allCompanies = []
    
    const createCompanyMatrix = () => {
        for (let i = 0; i < arrival.length; i++) {
            for (let j = 0; j < duration.length; j++) {
                if (i===j) {
                    allCompanies.push([arrival[i], duration[j]])
                }
            }
        }
    }
    createCompanyMatrix()
    console.log(allCompanies)
    
    const findCurrentShortest = (companies) => {
        for (let i = 0; i < companies.length; i++) {
            // console.log('allCompanies[i][1]', allCompanies[i][1])
            if (companies[i][1] < shortest) {
                shortest = companies[i]
            }
        }
    }
    findCurrentShortest(allCompanies)
    console.log(shortest)
    
    const fillSchedule = () => {
        // maybe unecessary but we can make a toBeScheduled array in here to keep track of companies
        let toBeScheduled = allCompanies
        findCurrentShortest(toBeScheduled)
        // for loop - 
        for (let i = 0; i < toBeScheduled.length; i++) {
            if (toBeScheduled[i][1] === shortest) {
                total++
                // remove that comapny and others in that time slot
            }
        }
        // schedule the company
            // increment total
            // remove the scheduled comapny from the companies array
        findCurrentShortest(toBeScheduled)
    }
    // once we know the shortest of the group, we can start to work with those
    // schedule shortest, then move up to the next shortest, and schedule those
    // while (arrival.length > 0) {
    //     for (let i = 0; i < arrival.length; i++) {
    //        if (shortest === arrival[i]) {
    //         // schedule them, 
    //         total++
    //         // remove them from the array
            
    //         // remove other longer meetings from the array
    //         // increment total
    //         console.log('this fn called')
    //         } 
    //     }
        
    // }
 return total
    
}