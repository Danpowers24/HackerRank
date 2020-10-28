let arrival = [1, 1, 1, 1, 4]
let duration = [10, 3, 6, 4, 2]


function maxEvents(arrival, duration) {
    // first method: schedule the shortest meetings first
    // loop to find the lowest duration = shortest
    
    let total = 0
    let shortest = [1, Infinity]
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

    // create a schedule that will be big enough for all the companies
    // create a giant array with adding up all the times 
    // let scheduleLength = 0
        // loop through the all companies array
        // if companies[i][0] + companies[i][1] > scheduleLength
        // scheduleLength = companies[i][0] + companies[i][1]
    // once we have the max scheduleLength, make a real schedule, 
    // i.e. scheduleLength = 10  =>  schedule = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    // when scheduling, only schedule if that time slot is open
    // say you are scheduling a company [arrival 4, duration 3]
    // check if there are hours 4,5,and 6 are open
        // check if schedule[4] + 3 indexes = schedule[6]
    // if so, schedule the company, splice it out of the toBeScheduled array, and splice the hour/time slots out of the schedule array
    // now the schedule array will be [0, 1, 2, 3, 7, 8, 9, 10]
    // next shortest is company [arrival 1, duration 4]
    // check to see if we have the available time slots, 
        // we are setting the targetendslot equal to:  arrival hour + duration - 1 (account for added value from indexing)
        // let targetEndHourSlot = company[0] + company[1] - 1   
        // for this example, this should equal 4
        // now we compare the target hourendslot with what is actually there, if it's different, we know that there is not enough time
        // 
    // for scheduling companies after the after an already scheduled company, I have to put logic in that  will grab the time slot and set it to the arrival hour
        // this way we are always starting at the corect time
    

    const findInitialShortest = (companies) => {
        let tempShortest = shortest
        for (let i = 0; i < companies.length; i++) {
            // console.log('company in line to be initial shortest', companies[i])
            if (companies[i][1] < tempShortest[1]) {
                tempShortest = companies[i]
                // console.log('current tempShortest is: ', tempShortest)            
            } 
        }
        shortest = tempShortest
        return shortest
    }
    findInitialShortest(allCompanies)
    console.log('initial real shortest', shortest)

    const findCurrentShortest = (companies) => {
        let tempShortest = [0, Infinity]
        for (let i = 0; i < companies.length; i++) {
            console.log('in findCurrentShortest, companies[i] is', companies[i])
            if (companies[i][1] <= tempShortest[1]) {
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
        // keep track of scheduled companies and their time slots, only schedule companies that don't conflict with already scheduled companies/time slots
        let alreadyScheduled = []
        
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
                    console.log('companies still yet to be schedule in toBeScheduled is', toBeScheduled)

                    findCurrentShortest(toBeScheduled)
                    console.log('new shortest is', shortest)
                    fillSchedule()
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