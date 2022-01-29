var firstName = 'Cole'
var lastName = 'Webster'
// similar to 'let' and can be reassigned

firstName = 'Matthew'
console.log(firstName)

//var is function scoped
if (10 === 10) {
    var firstName = 'Cole'
}

// Will create a syntax error
const setName = function () {
    var firstName = 'Matthew'
}

setName()
console.log(firstName)

//Next example
let age
console.log(age)

//Declartion will be hoisted to the top of the script
var ages
console.log(ages)

