const router = require('express').Router();
const uuid = require('../../helper/uuid.js');
//loclahost:3001/api/notes
const fs = require("fs");
const path = require("path");
const { readAndAppend } = require('../../../../WUSTL-VIRT-FSF-PT-06-2023-U-LOLC/11-Express/01-Activities/21-Ins_Modular-Routing/02_Modularized/helpers/fsUtils');
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
    const {title, text} = req.body;
    if (title && text) {
    const newNote = {
        title,
        text,
        noteid: uuid(),
    }
    readAndAppend(newNote, path.join(__dirname,"../../db/db.json"))
    const response = {
        status: "success",
        body: newNote,
    }
    res.json(response)
} else {
    res.json("Error in posting note")   

    
}})





module.exports = router;