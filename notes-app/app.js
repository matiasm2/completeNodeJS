#! node
'use strict'

const yargs = require('yargs')
const notes = require('./notes')

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
  handler: (argv) => notes.addNote(argv.title, argv.body)
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
  handler: (argv) => notes.removeNote(argv.title)
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
