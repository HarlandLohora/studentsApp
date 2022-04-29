const router = require("express").Router();
const Student = require('../models/Student.model')

router.get("/students", (req, res) => {
    Student.find()
        .then(students => {
            res.render("students/students-list", { students })
        })
        .catch(console.log)
})

router.get("/students/new", (req, res) => {
    res.render("students/registro-students")
})

router.post("/students/new", (req, res) => {
    Student.create(req.body)
        .then(data => {
            console.log("Yeyyyyy", data)
            res.send(data)
        })
        .catch(console.log)
})


module.exports = router;