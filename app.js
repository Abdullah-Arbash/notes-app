// const fs = require('fs'); // File system Modul (Nodejs-Module)// 

// fs.writeFileSync('notes.txt', 'dieses file wurde mit node.js erstellt'); 
//fs.appendFileSync('notes.txt', ' das ist die ergänzung'); 


//const validator = require ('validator');
const nodes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');
const { argv } = require('yargs');

//const msg = getNotes();
//console.log(msg);
//console.log(validator.isEmail('Abdullah.Arbash@hotmail.com'));
//const done = chalk.green.bold('Super!');
//console.log(done);

// anpassen von yargs version //
yargs.version('1.1.0');

// add commend //
yargs.command({ // befehl difinieren 
    command:'add',
    describe:'Add a new note',
    builder: { // für optionen(argument nach der command) hinzufungen die nach der commend kommen 
       title:{
           describe: 'note title',
           demandOption: true,
           type: 'string',
       },
       body:{
          describe:'body note',
          demandOption:true,
          type:'string'
       }
    },
    handler(argv){
        nodes.addNote(argv.title, argv.body); 
    }
});

// remove commend //
yargs.command({
   command:'remove',
   describe:'remove any note',
   builder:{
      title:{
          describe:'The titel, the note, how you wunt to removd',
          demandOption: true,
           type: 'string',
      }
   },
   handler(argv){
    nodes.removeNote(argv.title);
   }

});


// list commend //
yargs.command({
    command:'list',
    describe:'listing the notes',
    handler(){
        nodes.listNode();
    }
 
 });

 // read commend //
yargs.command({
    command:'read',
    describe:'read any note',
    builder:{
        title:{
            describe:'the title of note',
            demandOption: true,
            type:'string'
        }
    },
    handler(){
        nodes.readNote(argv.title);
    }
 
 });


yargs.parse();
