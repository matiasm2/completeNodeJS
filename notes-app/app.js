#! node
const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Matias M.')

/* Challenge: Append a message to notes.txt

1. Use fs.appendFileSync to append to the file
2. Run the Script
3. Checkout your work by opening the file and viewing the appending text */

fs.appendFileSync('notes.txt', ' I from Buenos Aires.')
console.log(fs.readFileSync('notes.txt', 'utf-8'))
