#! node

// Challenge: Define and use a function in a new File
//
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing the message to console

// const utils = require('./utils')
// console.log(utils.add(5, 5))

const getNotes = require('./notes')

console.log(getNotes())
