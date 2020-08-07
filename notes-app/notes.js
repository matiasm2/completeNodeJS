const chalk = require('chalk')
const fs = require('fs')

const JSONNAME = 'notes.json'

const getNotes = () => {
  return 'Your notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title)

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
}

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
  getNotes: getNotes,
  addNote: addNote
}