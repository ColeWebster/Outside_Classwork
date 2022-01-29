//Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    //Local scope (farhenheit, celsius)
        //Local scope(isFreezing)

        
let convertFarenheitToCelsius = function(temp) {
    let Celsius = (temp - 32) * (5/9)
    
    if (Celsius <= 0) {
        let isFreezing = true
    }
    
    return Celsius
}

let tempOne = convertFarenheitToCelsius(32)
let tempTwo = convertFarenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)
