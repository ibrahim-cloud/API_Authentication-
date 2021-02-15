const Router = require("express").Router();
const usercontroller = require('../controller/usercontroller')
const auth = require('../middelware/auth')


Router.route("/").get(usercontroller.ApiGet);
Router.route("/api/login").post(usercontroller.ApiLogin);
Router.post('/api/addUser' ,usercontroller.AddUser);
Router.get('/api/user' ,usercontroller.FindUser);
module.exports = Router;