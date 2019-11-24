const fs = require('fs')
const chalk = require('chalk')

function getNotes () {
    console.log('your notes')
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    
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

const removeNote = function (title) {
    const notes = loadNotes()
    const noteToRemove = notes.filter(function (note) {
        return note.title !== title
    })
    
    if (notes.length === noteToRemove.length) {
        console.log(chalk.yellow.underline('Note with title \"' + title + '\" was not found.'))

    } else {
        console.log(chalk.red.underline('Note with title \"' + title + '\" was removed.'))
    }
    saveNotes(noteToRemove)
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNote: removeNote
}