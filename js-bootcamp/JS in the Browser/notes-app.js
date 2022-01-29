console.log('This is from a different file');

//Document Object Model -- DOM

// ---------- Query and remove - first item only. 
// const p = document.querySelector('p');
// p.remove();

// -------- Query all and remove
const ps = document.querySelectorAll('p');
ps.forEach(function(p) {
    p.remove();
})
// For each loops over each item to remove all p tags

// ------- Loop to add p tag and replace 
ps.forEach(function (p) {
    p.textContent = '*****'
    // console.log(p.textContent)
})