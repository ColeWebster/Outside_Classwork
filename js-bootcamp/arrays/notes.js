
//Section 2
// console.log(notes)
// console.log(notes.length)
// console.log(notes[0])
// console.log(notes[2])
// console.log(notes[notes.length - 1])

// Section 3
// notes.push('My New Note')
//  Adds to the end of the array

// notes.pop()
// Removes last item

//Removes last item and replaces it with new 'My New Note'
// console.log(notes.pop())
// notes.push('My New Note')


//Shift method - Removes first note
// console.log(notes.shift())
// notes.unshift('My First Note')

//Splice -
// notes.splice(1, 1, 'This is the new second item')
// Start at 1, Remove 1 item and replace with this string


//Section 3
// const notes = ['Note 1', 'Note 2', 'Note 3']


// notes[2] = 'This is our new note 3'

// (item, index)
// notes.forEach(function (item, index)  {
//     console.log(item)
//     console.log(index)
// })

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

// const findNote = function (notes,noteTitle) {
//     const index = notes.findIndex(function (notes, index) {
//         return notes.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const findNote = function (notes,noteTitle) {
//     return notes.find(function (notes, index) {
//         return notes.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

const findNotes = function(notes, query) {
     return notes.filter(function (note, index){
        const isTitleMatch = note.title.toLocaleLowerCase().includes(query)
        const isBodyMatch = note.body.toLocaleLowerCase().includes(query)
        return isTitleMatch || isBodyMatch
    })
}
    

console.log(findNotes(notes, "work"))
console.log(findNotes(notes, "eating"))

//  filter creates new array does not change the original

// const note = findNote(notes, "office modifications")
// console.log(note)

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (notes,index) {
//     console.log(notes)
//     return notes.title === 'Habbits to work on'
// })

// console.log(index)

