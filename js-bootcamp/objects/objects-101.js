let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook)
console.log(myBook.title)

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)


//Challenege area
// name, age, location
// Andrew is 27 and lives in Philly.

let myFriend = {
    name: 'Joanie',
    location: 'Tampa',
    age: 32
}

console.log(`${myFriend.name} is ${myFriend.age} and lives in ${myFriend.location}.`)

myFriend.age = myFriend.age + 1 

console.log(`${myFriend.name} is ${myFriend.age} and lives in ${myFriend.location}.`)