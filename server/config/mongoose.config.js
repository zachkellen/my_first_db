const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/students', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() =>console.log('Connection made'))
    .catch(err=>console.log('Failed connection'))