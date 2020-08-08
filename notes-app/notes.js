'use strict'
const chalk = require('chalk')
const fs = require('fs')

const JSONNAME = 'notes.json'

const loadNotes = function () {
  try {
    const data = fs.readFileSync(JSONNAME)
    const dataJSON = data.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const saveNotes = function (notes) {
  const notesString = JSON.stringify(notes)
  fs.writeFileSync(JSONNAME, notesString)
}

module.exports = {
  listNotes() {
    const notes = loadNotes()
    if (notes.length === 0){
      console.error(chalk.red('There are not any notes'));
    } else {
      console.log(chalk.bgBlackBright.bold('Listing notes:'))
      loadNotes().forEach(note => {
        console.log(chalk.bgBlackBright(`  \u2022 ${note.title}`))
      })
    }
  },
  addNote(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)
  
    if (duplicateNotes.length === 0) {
      notes.push({
        title: title,
        body: body
      })
      saveNotes(notes)
      console.log(chalk.green('A new note has been added'))
    } else {
      console.error(chalk.red('Already exist a note with that title'))
    }
  },
  removeNote(title) {
    const notes = loadNotes()
    const temporalNotes = notes.filter(note => note.title !== title)
  
    if (notes.length === temporalNotes.length) {
      console.error(chalk.red('The note with that title does not exist'))
    } else {
      saveNotes(temporalNotes)
      console.log(chalk.green(`The note "${title}" has been removed`))
    }
  }
}