const Student = require('../models/students.model');

module.exports.findAllStudents = (req,res) => {
    console.log("findAll being run")
    Student.find()
        .then(allStudents => res.json({results: allStudents}))
        .catch(err => res.json({message: "Find all failed", err}))
}

module.exports.createStudent = (req, res) => {
    console.log("Create being run");
    Student.create(req.body)
        .then(newStudent => res.json({results: newStudent}))
        .catch(err => res.json({message: "Create failed", err}))
}

module.exports.findSingleStudent = (req,res) => {
    console.log("Find one being run");
    Student.findOne({_id: req.params._id})
    .then(singleStudent => res.json({results: singleStudent}))
    .catch(err => res.json({message: "Find one failed", err}))
}

module.exports.deleteSingleStudent = (req,res) => {
    console.log("Delete one being run")
    Student.deleteOne({_id: req.params._id})
        .then(results => res.json({results: results}))
        .catch(err => res.json({message: "Delete one failed", err}))
}

module.exports.updateSingleStudent = (req,res) => {
    console.log("Updating Student")
    // can use .updateOne here and remove the comma stuff
    Student.findOneAndUpdate({_id: req.params._id} , req.body, {new: true, runValidators: true})
        .then(singleStudent => res.json({results: singleStudent}))
        .catch(err => res.json({message: "Update one failed", err}))
}

// Push to arrays - checkout mongoose commands for this
module.exports.addToArray = (req,res) => {
    console.log("Adding to array")
    Student.updateOne({_id: req.params._id} , {$push: {classes: req.body.class}})
        .then(singleStudent => res.json({results: singleStudent}))
        .catch(err => res.json({message: "Add to array failed", err}))
}