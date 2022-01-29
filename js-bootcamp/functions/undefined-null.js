//Undefined for variable
let name 

name = 'Cole'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

//Undefined for function arguments
let square = function (num) {
    console.log(num)
}


let result = square()
console.log(result)

//
let age = 27

age = null
//explicitly clear with null

console.log(age)