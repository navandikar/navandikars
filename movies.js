
const express = require('express');
const route = express.Router();
const Joi = require('joi');




const movies = [
{id:1, name: 'star'},
{id:2, name: 'sun'},
{id:3, name: 'moon'}
]


route.use('/api/movies',(req,res,next) => {
console.log(req.url, req.method)
next();

})



route.get('/api/movies', (req,res) => {
res.send(movies);
})




route.post('/api/movies', (req,res) => {
const schema = Joi.object({
name : Joi.string().min(3).required()
});
const result = schema.validate(req.body);
console.log(result);
if(result.error)
{
res.status(400).send(result.error.details[0].message);
return;
}
if(!req.body.name || req.body.name.length < 3)
{
res.status(400).send('The name less than 3 chars');
return;
}
let movie = {
id : movies.length + 1,
name : req.body.name
}
movies.push(movie);
res.send(movies);
})









route.get('/api/movies/:id', (req,res) => {
let movie = movies.find(c => c.id === parseInt(req.params.id))
if(!movie) res.send(`Not found : ${req.params.id}`);
res.send(movie);
})


route.get('/api/movies/:id', (req,res) => {
let movie = movies.find(c => c.id === parseInt(req.params.id))
if(!movie) res.send(`Not found : ${req.params.id}`);
res.send(movie);
})


route.put('/api/movies/:id', (req,res) => {
let movie = movies.find(c => c.id === parseInt(req.params.id))
if(!movie) res.send(`Not found : ${req.params.id}`);
const schema = Joi.object({
name : Joi.string().min(3).required()
});
const result = schema.validate(req.body);
console.log(result);
if(result.error)
{
res.status(400).send(result.error.details[0].message);
return;
}
movie.name = req.body.name;
res.send(movie);
})










route.delete('/api/movies/:id', (req,res) => {
let movie = movies.find(c => c.id === parseInt(req.params.id))
if(!movie) res.send(`Not found : ${req.params.id}`);
const index = movies.indexOf(movie);
movies.splice(index,1);
res.send(movie);
})




module.exports = route;



















