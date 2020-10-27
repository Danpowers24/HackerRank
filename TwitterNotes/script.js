
// A manufacturer purchases fragile components that must be shipped using expensive containers. The manufacturer agrees to provide customers with a free container of components for returning a certain number of containers. Determine the maximum number of containers a customer can receive given a budget, the cost per container, and the number of empty containers that must be returned for a free container. Assume each container is immediately emptied and returned for credit. 

let scenarios = [ '10 2 5', '12 4 4', '6 2 2' ]

function maximumContainers(scenarios) {
    // Might have to do some type conversion to get the input into usable data
    // console.log(scenarios)
    for (let i = 0; i < scenarios.length; i++) {
        
        let currentScenario = scenarios[i].split(' ')
        // console.log(currentScenario)
        
        // budget
        let n = parseInt(currentScenario[0])
        // cost
        let cost = parseInt(currentScenario[1])
        // redemption conversion rate
        let m = parseInt(currentScenario[2])
        
        // declare the answer
        let total = 0
        let containersOnHand = 0
        
        // while we still have currency
        while (n >= cost || containersOnHand >= m) {
            // buy as many containers as we can
            if (n > 0) {
               total++
               containersOnHand++
               n = n - cost 
            }            
            // if containers on hand is more than or equal to the redemtion value 
            if (containersOnHand >= m) {
                containersOnHand = containersOnHand - m
                total++
                containersOnHand++
            }
        }
    console.log(total)

    }
}