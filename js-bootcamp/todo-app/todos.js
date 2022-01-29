const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function(paragraph) {
    if (paragraph.textContent.includes(' the ')) {
        paragraph.remove()
    }
})

//Create a forEach loop with parameter paragraph created
// Loop through each P tag looking for the in the text content
// Remove the parameter

