#! node

// Chalenge: Use chalk library in your app.js
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Sucess!" to console in green
// 4. Test your work
//
// Bonus: Use does to mess around with other SVGElementInstanceList. Make text boldt and inversed

const chalk = require('chalk')

const validator = require('validator')

const emails = ['juan@pepe.com', 'pepe@pepa', 'sarasa@asda.c', 'asdads.com']

emails.forEach((email) =>{
  console.log(`${chalk.bold(email)} ${validator.isEmail(email) ? chalk.green('is an email') : chalk.red('is not an email')}`)
})}
