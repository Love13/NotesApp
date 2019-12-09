const fs = require('fs')
const chalk = require('chalk')

getNotes = () => console.log('your notes')


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.underline('New add note added with title \'' + title +'\''))
    } else {
        console.log(chalk.yellow.underline('Note title taken, note was not added.'))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const noteToRemove = notes.filter((note) => note.title !== title)
    
    if (notes.length === noteToRemove.length) {
        console.log(chalk.yellow.underline('Note with title \"' + title + '\" was not found.'))
 
    } else {
        console.log(chalk.red.underline('Note with title \"' + title + '\" was removed.'))
    }
    saveNotes(noteToRemove)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(e => console.log(chalk.magenta(e.title)))
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}