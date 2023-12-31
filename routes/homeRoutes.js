const path = require('path');
const router = require('express').Router();
//send an HTML VIEW
router.get("/", (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))
router.get("/notes", (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')))
router.delete("/notes", (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')))
module.exports = router;
