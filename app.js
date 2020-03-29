console.log("starting node application")

const fs = require('fs')
const notes =require('./note')
const yargs=require('yargs')
const argv =yargs.argv

fs.appendFileSync("lfc.txt","Premiere league 2020")

//console.log(notes.add(7,7))
//console.log(notes.counter(7,7))



//console.log("Process",process.argv)
//console.log("Yargs",yargs.argv)


var title=yargs.argv.title
var body=yargs.argv.body
var command=yargs.argv._[0]

if (command==="add") {
    console.log("Note created")
    notes.addingNote(title,body)
} else if (command==="remove") {
    console.log("removing note")
    notes.removingNote(title)
}
else if (command==="read") {
    console.log("Note Found")
    notes.readingNote(title)
} 
else if (command==="list") {
    console.log("Printing all notes")
    notes.listAllNote(title)}

else {
    console.log("unkown command")
}