const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//add version

yargs.version('1.1.0')

//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler(){
        notes.listNotes()
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'read the note',
    handler(){
        console.log('reading the note');
    }
})

//console.log(yargs.argv)
//console.log(process.argv)
yargs.parse()

