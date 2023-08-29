const router = require("express").Router();
const uuid = require("../../helper/uuid.js");
//loclahost:3001/api/notes
const fs = require("fs");
const path = require("path");
const {
  readAndAppend,
} = require("../../helper/fsutils.js");

router.get("/", (req, res) => {
  console.log("HIT MY API NOTES READ ENPOITN");
  console.log(__dirname);
  const notes = fs.readFileSync(
    path.join(__dirname, "../../db/db.json"),
    "utf-8"
  );
  console.log(notes);
  const parsedNotes = JSON.parse(notes);
  console.log(parsedNotes);
  res.json(parsedNotes);
});
router.post("/", (req, res) => {
  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };
    readAndAppend(newNote, path.join(__dirname, "../../db/db.json"));
    const response = {
      status: "success",
      body: newNote,
    };
    res.json(response);
  } else {
    res.json("Error in posting note");
  }
});
router.delete("/:id", (req, res) => {
  const noteId = req.params.id;
  fs.readFile(
    path.join(__dirname, "../../db/db.json"),
    "utf-8",
    (err, data) => {
      if (err) {
        res.status(500).json({ error: "Failed to read the database file" });
        return;
      }

      const jsonData = JSON.parse(data);
      const updatedData = jsonData.filter((note) => note.id !== noteId);

      fs.writeFile(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify(updatedData),
        (err) => {
          if (err) {
            res
              .status(500)
              .json({ error: "Failed to write to the database file" });
            return;
          }

          res.json(`Item ${noteId} has been deleted 🗑️`);
        }
      );
    }
  );
});

module.exports = router;
