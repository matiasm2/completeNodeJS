const fs = require('fs')

/* const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday'
}
const bookJSON = JSON.stringify(book)

fs.writeFileSync('1-json.json', bookJSON) */

/* const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.author)
 */

const JSONFILE = '1-json.json'

const dataBuffer = fs.readFileSync(JSONFILE)
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Matias M.'
data.age = 26

const personJSON = JSON.stringify(data)
fs.writeFileSync(JSONFILE, personJSON)
