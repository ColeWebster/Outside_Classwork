// const paragraphs = document.querySelectorAll('p')

const todos = [{
    text: "Finish homework",
    completed: false
}, {
    text: "Finish gundam model",
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

// You have two todos left
const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})
 
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

// print a paragraph for each one above
todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

document.querySelector('button').addEventListener('click', function (e) {
    // e.target.textContent = 'Hi Friend! Have a good day!!!'
    console.log('Add a new todo....')
})