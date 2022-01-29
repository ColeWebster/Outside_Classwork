//Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguements
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
    // return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 150)
console.log(scoreText)

// //Challenge area
// total, tipPercent .2

let tipPercent = function (total, tip = .25) {
    return total * tip
}

let tip = tipPercent(120, .3)
console.log(tip)

//Lesson 25 - Template strings

console.log("Andrew" + 'Mead')
//Ok to mix but best to pick one style and stick with it.

let name = 'Jen'
let age = 28
console.log(`Hello, my name is ${name}! I am ${age} years old.`)
// ${} allows to access the variable

//Challenege area
// A 25% tip on $40 would be $10
let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(50)
console.log(tip)