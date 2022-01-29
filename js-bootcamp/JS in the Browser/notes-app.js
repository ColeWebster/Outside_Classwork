console.log('This is from a different file');

//Document Object Model -- DOM
const notes = [{
    title: "My next trip",
    body: "I would like to go to Japan",
}, {
    title: "Habbits to work on",
    body: "Exercise. Eating better."
}, {
    title: "Office modifications",
    body: "Add better lights"
}]

document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = "The button was clicked"
})

document.querySelectorAll('button')[1].addEventListener('click', function () {
    console.log('Delete All Notes')
})