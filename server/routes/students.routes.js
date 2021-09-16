const StudentController = require('../controllers/students.controller');

module.exports = app => {
    app.get("/api/students/all", StudentController.findAllStudents);
    app.post("/api/students/create", StudentController.createStudent);
    app.get("/api/students/:_id", StudentController.findSingleStudent);
    app.delete("/api/students/:_id/delete", StudentController.deleteSingleStudent);
    app.patch("/api/students/:_id/update", StudentController.updateSingleStudent);
    app.put("/api/students/:_id/addToArray", StudentController.addToArray);
}

