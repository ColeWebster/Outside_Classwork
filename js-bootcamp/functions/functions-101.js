// function - input(argument), code(), output()

let greetUser = function() {
    console.log('Hello!')
}

greetUser()
greetUser()
greetUser()

// let numberSquared = function(num) {    
//     console.log(num)
// }

// let num = 3
// numberSquared(num) //output is 3 from num
// numberSquared(10) // output is 10 because it is a direct input

// let numberSquared = function (num) {
//     let result = num + num
//     return result
// }

// let value = numberSquared(3)
// let otheValue = numberSquared(10)
// console.log(value)
// console.log(otheValue)

// Challenge area
// Convert F to C - 32 -> 0 and 68-> 20
//Print converted values

let convertFarenheitToCelsius = function(temp) {
    let Celsius = (temp - 32) * (5/9)
    return Celsius
}

let tempOne = convertFarenheitToCelsius(32)
let tempTwo = convertFarenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)
