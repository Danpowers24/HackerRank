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
    

    const findCurrentShortest = (companies) => {
        for (let i = 0; i < companies.length; i++) {
            // console.log('companies[i][1]', companies[i][1])
            if (companies[i][1] <= shortest[1]) {
                shortest = companies[i]
                return shortest
            }
            
        }
    }
    findCurrentShortest(allCompanies)
    console.log('initial shortest', shortest)

    const fillSchedule = () => {
        // start a list of companies to be scheduled
        let toBeScheduled = allCompanies

        // This finds 
        function isShortestAndSameArrivalCheck(company) {
            return company[i][0] === toBeScheduled[i][0]
        }

        findCurrentShortest(toBeScheduled)
        
        // let i = 0
        // while (toBeScheduled.length > 0) {
            for (let i = 0; i < toBeScheduled.length; i++) {
                console.log('current comapny being looked at to be scheduled is: ', toBeScheduled[i])
                if (toBeScheduled[i] === shortest) {
                    total++
                    // get new shortest
                    console.log('a company has been scheduled!!!!')
                    console.log('total is currently: ', total)
                    // remove that company and others in that time slot
                    toBeScheduled.splice(i, 1)
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