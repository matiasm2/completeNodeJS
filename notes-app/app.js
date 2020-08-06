#! nodemon

// Chalenge: Use chalk library in your app.js
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Sucess!" to console in green
// 4. Test your work
//
// Bonus: Use does to mess around with other SVGElementInstanceList. Make text boldt and inversed

const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

/* const validator = require('validator')

const emails = ['juan@pepe.com', 'pepe@pepa', 'sarasa@asda.c', 'asdads.com']

emails.forEach((email) => {
  console.log(`${chalk.bold(email)} ${validator.isEmail(email) ? chalk.green('is an email') : chalk.red('is not an email')}`)
})
 */

/* console.log(process.argv)

const command = process.argv[2]

if (command === 'add') {
  console.log('Adding note')
} else if (command === 'remove') {
  console.log('Removing note')
}

console.log(yargs.argv)

 */
// Customize yargs version

yargs.version('1.1.1')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => console.log(`adding the note git"${argv.title}" with:\n${argv.body}`)
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: () => console.log('removing note')
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => console.log('listing notes')
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => console.log('reading note')
})

yargs.parse()
