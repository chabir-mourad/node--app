
fs=require('fs')

var fetchNotes =()=>{
    try {
        return JSON.parse(fs.readFileSync("note.txt"))
    } catch (error) {
        return []
    }
}
var addingNote =(title,body)=>{
var notes=fetchNotes()
var note ={
    title,
    body

}
notes.push(note)
fs.writeFileSync("note.txt",JSON.stringify(notes))
}

var removingNote =(title)=>{
    var notes=fetchNotes()
  var filtredNotes=  notes.filter((note)=>note.title!==title) 
  fs.writeFileSync("note.txt",JSON.stringify(filtredNotes))

}
var readingNote=(title)=>{
var notes=fetchNotes()
var chekedNotes=  notes.filter((note)=>note.title===title) 
displayNote(chekedNotes[0])
}
var listAllNote =()=>{
    var notes=fetchNotes()
    notes.forEach(note => displayNote(note)
        
    );
}
var displayNote = (note)=>{
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports ={
    addingNote,
    removingNote,
   readingNote,
   listAllNote
}