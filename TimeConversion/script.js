let input = "11:05:45AM"

function timeConversion(s) {
    // Get the last two characters of the input (AM or PM)
    let dayCheck = input.substr(8, 2);
    // Get the first 8 characters of input (hours, minutes, seconds)
    let time = input.substr(0, 8);
    // Get the  last 6 characters - minutes and seconds
    let last6 = time.substr(2, 6);
    // Get first 2 characters (hour)
    let hour = time.substr(0, 2)
    // Declare a result variable
    let result = ''
    // console.log(hour);
    if (dayCheck === "AM") {
        if (hour === "12") {
            // it's gunna be midnight-ish, so 12:30:00AM should = 00:30:00
            result = "00" + last6
            console.log(result);
            return result
        }
        // if it's morning and not midnight, just return the time as is
        result = time.substr(0, 8)
        console.log(result);
    } else {
        // chop off the AM or PM from the input
        let justDigits = time.substr(0, 8)
        // parse the first two characters and add 12 to get the Military Time version of the hour section of the input
        let hourDigitMilitaryTime = (parseInt(s.substr(0, 2)) + 12).toString();
        result = `${hourDigitMilitaryTime}${last6}`
        return result
    }
}

timeConversion(input)