const express = require('express');
const app = express();
const Joi = require('joi');
const movies = require('./movies');

app.use(express.json());



app.use('/abc', movies);


app.get('/',(req,res) => {
res.send('Hello Everyone');
})






const port = process.env.port || `3000`;
app.listen(port, () => console.log(`server at : ${port}`));












