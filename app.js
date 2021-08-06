const logger = require('./logger')
const courses = require('./routes/courses')
const express = require('express')
const app = express();
app.use(express.json());
app.use(logger);
app.use(express.static('public'));
app.use('/api/courses',courses);


app.get('/',(req,res)=>{
    res.send('Hello World!')
});

//PORT
const port = process.env.PORT || 3000
app.listen(port,()=> console.log(`Listening on port ${port}....`));