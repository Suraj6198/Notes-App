const fs=require('fs');
const chalk=require('chalk');
const addNotes=function(title,body)
{
    const notes=loadNotes();
    const count=notes.filter(function(note){
     return  title==note.title
    })
    if(count.length==0)
    {
        notes.push({
            title:title,
            body:body
        })
        save(notes);
console.log('saved');
    }
    else{
        console.log('Already exist');
    }
}

const loadNotes=function(){
    try{
         const buffer=fs.readFileSync('notes.json');
         const data=buffer.toString();
         const notes=JSON.parse(data);
         return notes;
       }catch(e)
       {
           return [];
       }
}
const save=function(notes)
{
    const note=JSON.stringify(notes);
    fs.writeFileSync('notes.json',note);
}
const removeNotes=(title)=>{
    const notes=loadNotes();
    const count=notes.filter((note)=>{
    return note.title!=title;
    })
    if(count.length==notes.length)
    {
        console.log(chalk.red.inverse('N0 Note found'));
    }
    else{
        save(count);
        console.log(chalk.green.inverse('Note Removed'));

    }
}
const listNotes=()=>{
    const notes=loadNotes();
    notes.forEach((note)=>
    {
       console.log(note.title);
    })
}
const readNotes=(title)=>{
    const notes=loadNotes();
     const count=notes.find((note)=>{
        return note.title==title;
     })
     if(count)
     {
        console.log(chalk.white.inverse(count.title));
        console.log(chalk(count.body));
     }
     else
     {
     console.log(chalk.red.inverse('Error'));
     }
}
module.exports={
    addNotes:addNotes,
    removeNotes : removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}