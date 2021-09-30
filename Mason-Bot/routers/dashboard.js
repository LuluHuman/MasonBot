const { Router } = require('express');
const router = Router();
const path = require("path")
router.use('/', (req, res) => {
    const url = req.url.toLowerCase().split("/")// result = db/something
    res.sendFile(path.join(__dirname + '/../website/dashboard.html'))
});

module.exports = router;