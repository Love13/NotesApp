const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

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
    handler: function(argv){
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note');
        
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler(){
        console.log('listing the notes');
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
// console.log(process.argv)
yargs.parse()

