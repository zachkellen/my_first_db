const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    // What does a Student need entered here
    name: {type: String, required: [true, "Name is required"], minlength: [4, "Name must be at least 4 characters long."]},
    home_state: String,
    lucky_number: Number,
    classes: [String]
    // birthday: {month: Number, day: Number, year: Number}
}, {timestamps: true}
)

// Schema gets passed as mongoose model
const Student = mongoose.model('Student', StudentSchema);

// Other files will use this to access
module.exports = Student;