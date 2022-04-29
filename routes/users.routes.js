const router = require("express").Router();


router.get("/students", (req, res) => {
    res.render("students/students-list")
})

router.get("/students/new", (req, res) => {
    res.render("students/registro-students")
})

module.exports = router;