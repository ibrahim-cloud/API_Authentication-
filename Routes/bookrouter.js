const Router = require("express").Router();
const bookcontroller = require('../controller/BookController')
const auth = require('../middelware/auth')


Router.post('/api/addBook' ,bookcontroller.AddBook);
Router.get('/' ,auth.verifyToken,bookcontroller.Findbook);
Router.post('/api/posts' ,);
bookcontroller.Findbook
module.exports = Router;


