const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');


const addNote = (title, body) => {
     const notes = loadNots();
     const deplicatNote = notes.filter(function(note){
         return note.title === title;
     });

      debugger

     if(deplicatNote.length === 0){
        notes.push({
            title: title,
            body: body,
         });
    
        saveNots(notes);
        console.log(chalk.green.inverse('New note si adding'));
     }else{
         console.log(chalk.red.inverse('Note title is Talen'));
     }
     
};

const saveNots = function(notes){
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNots = function(){
    try{
         const databuffer = fs.readFileSync('notes.json'); // return binary
         const dataJSON = databuffer.toString(); // return json String
         return JSON.parse(dataJSON); // return die orginal, objekt oder array
    }
    catch(e){
         return [];
    }
}

const removeNote = function(title){
     const notes= loadNots();
     const notesToKeep = notes.filter(function(note){
        return note.title !== title;
     });
     if(notesToKeep.length < notes.length){
        saveNots(notesToKeep);
        console.log(chalk.green.inverse('Note is removed'));

     }else{
         console.log(chalk.red.inverse('No Note is found'));
     }
     
}

const listNode = () => {
    let notes=loadNots();
    if(notes.length===0){
        console.log(chalk.green('es gibt kein notes '));
    }else{
        console.log(chalk.green('your note is ....'));
       notes.forEach((note)=>{
           console.log(note.title);
       })
    }   
}

const readNote = (title)=>{
    let notes = loadNots();
    let ergebins = notes.find((x)=>{
            return x.title==title;
    });
    if(!ergebins){
        console.log(chalk.red.inverse('there is no note wich this title'));
    }
    else{
        console.log('the title is ' + chalk.green.inverse(ergebins.title));
        console.log('the body is ' + chalk.green.inverse(ergebins.body));

    }
    
}

module.exports ={
    addNote: addNote,
    removeNote: removeNote,
    listNode:listNode,
    readNote:readNote
}
