const express = require('express')
const app = express();
const port = 8000

require('./server/config/mongoose.config');

app.use(express.json(), express.urlencoded({extended:true}));

require('./server/routes/students.routes')(app);

app.listen(port, ()=>console.log(`Running on port ${port}`));