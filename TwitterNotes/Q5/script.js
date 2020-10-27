let arrival = [1, 1, 1, 4]
let duration = [10, 2, 4, 2]


function maxEvents(arrival, duration) {
    // first method: schedule the shortest meetings first
    // loop to find the lowest duration = shortest
    
    let total = 0
    let shortest = [0, Infinity]
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
    console.log('allCompanies is', allCompanies)


    const findInitialShortest = (companies) => {
        let tempShortest = shortest
        for (let i = 0; i < companies.length; i++) {
            console.log('company in line to be initial shortest', companies[i])
            if (companies[i][1] < tempShortest[1]) {
                tempShortest = companies[i]
                console.log('current tempShortest is: ', tempShortest)            } 
        }
        shortest = tempShortest
        return shortest
    }
    findInitialShortest(allCompanies)
    console.log('initial real shortest', shortest)

    const findCurrentShortest = (companies) => {
        let tempShortest
        for (let i = 0; i < companies.length; i++) {
            // console.log('companies[i][1]', companies[i][1])
            if (companies[i][1] <= shortest[1]) {
                tempShortest = companies[i]
                // return shortest
            } 
        }
        shortest = tempShortest
        return shortest
    }
    // findCurrentShortest(allCompanies)

    const fillSchedule = () => {
        // start a list of companies to be scheduled
        let toBeScheduled = allCompanies

        // findCurrentShortest(toBeScheduled)
        
        // let i = 0
        // while (toBeScheduled.length > 0) {
            for (let i = 0; i < toBeScheduled.length; i++) {
                console.log('current company being looked at to be scheduled is: ', toBeScheduled[i])
                console.log('scheduling ... comparing current company to current shortest which is: ', shortest)
                if (toBeScheduled[i] === shortest) {
                    total++
                    // get new shortest
                    console.log('a company has been scheduled!!!!')
                    console.log('total is currently: ', total)
                    // remove that company 
                    toBeScheduled.splice(i, 1)                   
                    // and others in that time slot
                        // code here
                    findCurrentShortest(toBeScheduled)
                    console.log('companies still yet to be schedule in toBeScheduled is', toBeScheduled)
                    console.log('new shortest is', shortest)
                    i--
                }
                // i++
            // }
            // schedule the company
                // increment total
                // remove the scheduled comapny from the companies array
        }
    }
    fillSchedule()
    return total  
}


maxEvents(arrival, duration)







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