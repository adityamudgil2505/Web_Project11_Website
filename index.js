const express = require('express');
const path = require('path');
const app = express();
const expressEdge = require('express-edge');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node-js-test-node');
app.use(express.static('public'));
app.use(expressEdge);

app.set('views', `${__dirname}/views`);
app.get('/',(req,res)=>{
  res.render('index');
  //res.sendFile(path.resolve(__dirname,'pages/index.html'));
});
app.get('/about',(req,res)=>{
  res.render('about');
  //res.sendFile(path.resolve(__dirname,'pages/about.html'));
});
app.get('/contact',(req,res)=>{
  res.render('contact');
  //res.sendFile(path.resolve(__dirname,'pages/contact.html'));
});
app.get('/post',(req,res)=>{
  res.render('post');
  //res.sendFile(path.resolve(__dirname,'pages/post.html'));
});
app.get('/posts/new',(req,res)=>{
  res.render('create');
  //res.sendFile(path.resolve(__dirname,'pages/post.html'));
});
app.listen(5500);