const router = require('express').Router();
const noteRoutes = require('./noteRoutes');
//localhost:3001/api
router.use("/notes", noteRoutes)
module.exports = router;