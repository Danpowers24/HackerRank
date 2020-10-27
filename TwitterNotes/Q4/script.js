
// A manufacturer purchases fragile components that must be shipped using expensive containers. The manufacturer agrees to provide customers with a free container of components for returning a certain number of containers. Determine the maximum number of containers a customer can receive given a budget, the cost per container, and the number of empty containers that must be returned for a free container. Assume each container is immediately emptied and returned for credit. 

// scenarios will always be an array with three elements: each a space-separated string of 3 digits

// for each element, first digit is the budget, second is the 

let scenarios = [ '10 2 5', '12 4 4', '6 2 2' ]

function maximumContainers(scenarios) {
    // Loop through each scenario
    for (let i = 0; i < scenarios.length; i++) {
        // declare current scenario and convert into a comma separated array
        let currentScenario = scenarios[i].split(' ')
              
        // budget
        let n = parseInt(currentScenario[0])
        // cost
        let cost = parseInt(currentScenario[1])
        // container return rate
        let m = parseInt(currentScenario[2])
        
        // declare a total tally (the answer)
        let total = 0
        // keep track of number of containers on hand
        let containersOnHand = 0
        
        // while we still have currency, or while we still have enough containers to trade in,
        while (n >= cost || containersOnHand >= m) {
            // if we have currency, buy as many containers as we can
            if (n > 0) {
                // pay for a container
                n = n - cost
                // receive a container 
                containersOnHand++
                // increase the total tally
                total++
            }       
            // if we still have enough containers to trade in, trade them in
            if (containersOnHand >= m) {
                // trade in the containers
                containersOnHand = containersOnHand - m
                // receive a container back
                containersOnHand++
                // increase the total tally
                total++
            }
        }
    // print answer for each scenario on a new line
    console.log(total)
    }
}