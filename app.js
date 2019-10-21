const fs=require('fs');
const nts=require('./notes.js');
const yargs=require('yargs');
yargs.command({
    command:'add',
    builder:
    {
        title:{
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        nts.addNotes(argv.title,argv.body);
    }
});
yargs.command({
    command:'remove',
    builder:
    {
        title:{
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        nts.removeNotes(argv.title);
    }
})
yargs.command({
    command:'list',
    handler:()=>{
  nts.listNotes();
    }
})

yargs.command({
    command:'read',
    builder:
    {
        title:{
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        nts.readNotes(argv.title);
    }
})

yargs.parse();