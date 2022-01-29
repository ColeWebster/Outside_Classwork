const notes = [{
    title: "my next trip",
    body: "I would like to go to Japan",
}, {
    title: "Habbits to work on",
    body: "Exercise. Eating better."
}, {
    title: "Office modifications",
    body: "Add better lights"
}]

// console.log("a" < "A")
//  capitalized comes first compares in order

const sortNotes = function (notes) {
    notes.sort(function (a,b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1 // -1 0 1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

const findNotes = function(notes, query) {
    return notes.filter(function (note, index){
       const isTitleMatch = note.title.toLocaleLowerCase().includes(query)
       const isBodyMatch = note.body.toLocaleLowerCase().includes(query)
       return isTitleMatch || isBodyMatch
   })
}
   

// console.log(findNotes(notes, "work"))
// console.log(findNotes(notes, "eating"))