const express = require('express');
const app = express();
const expressEdge = require('express-edge');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const postDB = require('./database/models/Posts');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const mongoStore = connectMongo(expressSession);

const storeMiddleware = require('./middleware/storeController');

const aboutController = require('./controller/aboutController');
const contactController = require('./controller/contactController');
const createController = require('./controller/createController')
const postController = require('./controller/postController');
const indexController = require('./controller/indexController');
const storeController = require('./controller/storeController');
const storeUserController = require('./controller/storeUserController');
const registerController = require('./controller/registerController');
const loginController = require('./controller/loginController');
const loginUserController = require('./controller/loginUserController');
const auth = require('./middleware/authController');
const ifAuth = require('./middleware/redirectIfAuth');

mongoose.connect('mongodb://localhost/node-js-test-node');
app.use(express.static('public'));
app.use(expressEdge);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.set('views', `${__dirname}/views`);
app.use('/posts/store',storeMiddleware);
app.use(expressSession({
  secret: 'secret',
  store: new mongoStore({
    mongooseConnection: mongoose.connection
  })
}));

app.get('/',indexController);
app.get('/about',aboutController);
app.get('/contact',contactController);
app.get('/posts/new',auth, createController);
app.get('/post/:id',postController);
app.get('/auth/register',ifAuth ,registerController);
app.get('/auth/login',ifAuth ,loginController);
app.post('/posts/store',auth, storeController);
app.post('/user/register',ifAuth ,storeUserController);
app.post('/user/login',ifAuth ,loginUserController);
app.listen(5500);