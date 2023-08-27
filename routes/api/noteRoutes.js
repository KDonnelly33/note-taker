const router = require('express').Router();
//loclahost:3001/api/notes
const fs = require("fs");
const path = require("path");
router.get("/", (req, res) => {
    console.log("HIT MY API NOTES READ ENPOITN")
    console.log(__dirname)
    const notes = fs.readFileSync(path.join(__dirname,"../../db/db.json"),"utf-8" )
    console.log(notes)
    const parsedNotes = JSON.parse(notes)
console.log(parsedNotes)
res.json(parsedNotes)
})
router.post("/", (req, res) => {
    
})


module.exports = router;