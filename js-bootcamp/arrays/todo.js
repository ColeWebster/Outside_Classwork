//Create an array with 5 todos
//Print message x todos
//Print first and second to last items --> Todo: "task"


// console.log(task)
// console.log('ToDo:' + task[0])

// Challenge 1
// console.log(`You have ${task.length} tasks to compelte.`)

// console.log(`Todo: ${task[0]}`)
// console.log(`Todo: ${task[task.length - 2]}`)


//Challenge 2
// Delete the third item
// Add new item on to the end
// Remove the first item from the list

// task.splice(2,1)
// task.push('Pick up medicine')
// task.shift()
// console.log(task)
// console.log(`You have ${task.length} tasks to complete.`)

// Challenege 3
// 1. the first item
// 2. the second item

// task.forEach(function (item,index) {
//     console.log(`${index + 1}. ${item}`)
// })

//Passing a function into a function is a "call back function"


//Challenge 4
//1. Order cat food
//2. Clean kitchen

// for (let count = 0; count < task.length; count++) {
//     const num = count + 1
//     const tasks = task[count]
//     console.log(`${num}. ${tasks}`)
// }

// notes.indexOf('Note 2')
// will return a number, the position in the array
// -1 if the item does not exist

//Challenge 5
// const task = ['Finish homework', 'Finish gundam model', "Finish cleaning room", 'Fold laundry', 'Clean bathroom']

// Convert array to array of objects -> text, completed

// Create variable to hold function
// Use the object to pull information, provide parameter
// const deleteTodo = function (todos, todoText) {
    // find the index of an item
    // const index = todos.findIndex(function (todo) {
        // check the item vs the text added later
        //     return todo.text.toLowerCase() === todoText.toLowerCase()
        // })
        // checking the location greater than -1 because index starts at  0
        // if (index > -1) {
            // Removing one item with the text
    //          todos.splice(index, 1)
    //     }
    // }
    // Create a function to remove a todo by text value
    // deleteTodo(todos, "Clean gutters")
    // console.log(todos)
    // returns all items since it does not appear in the object
    
    
const todos = [{
        text: "Finish homework",
        completed: false
    }, {
        text: "finish gundam model",
        completed: true
    }, {
        text: "Finish cleaning room",
        completed: true
    }, {
        text: "Fold laundry",
        completed: false
    }, {
        text: "Clean bathroom",
        completed: false
    }]
    
const getThingsToDo = function (todos) {
   return todos.filter(function(todo){
       return !todo.completed
   })
}
// console.log(getThingsToDo(todos, false))

//Sort by completed properties
const sortTodos = function (todos) {
    todos.sort(function(a,b){
        if (!a.completed && b.completed){
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}


sortTodos(todos)
console.log(todos)