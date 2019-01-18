const express = require('express');
const app = express();
const expressEdge = require('express-edge');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const postDB = require('./database/models/Posts');
const fileUpload = require('express-fileupload');

const aboutController = require('./controller/aboutController');
const contactController = require('./controller/contactController');
const createController = require('./controller/createController')
const postController = require('./controller/postController');
const indexController = require('./controller/indexController');
const storeController = require('./controller/storeController');

mongoose.connect('mongodb://localhost/node-js-test-node');
app.use(express.static('public'));
app.use(expressEdge);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.set('views', `${__dirname}/views`);

app.get('/',indexController);
app.get('/about',aboutController);
app.get('/contact',contactController);
app.get('/posts/new',createController);
app.get('/post/:id',postController);
app.post('/posts/store',storeController);
app.listen(5500);