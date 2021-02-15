let User = require("../models/User");
const jwt = require('jsonwebtoken');


const ApiGet =(req,res)=>{
    res.json({
        message: 'Welcome to the API'
      });
}
const ApiLogin = (req,res)=>{
    const {phone, password} = req.body

    User.findOne({phone}, (err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error : "User not found with this email, Please Singup"
            })
        }
    jwt.sign({user}, 'secretkey', { expiresIn: '20s' }, (err, token) => {
      res.json({
        token
      });
    });
});
}
///// find User
const FindUser = (req,res) =>{
    User.find()
    .then((User) => res.json(User))
    .catch((err) => res.status(400).json("Error :" + err));
}
  ///////ADD user
const AddUser = (req,res) =>{
    const name = req.body.name;
    const phone = req.body.phone;
    const password = req.body.password;
    console.log(name)
    const newUser = new User({
        name,
        phone,
        password
    });
    newUser
    .save()
    .then(() => res.json("newUser successfully added"))
    .catch((err) => res.status(400).json("Error :" + err));
}




module.exports = { ApiGet ,ApiLogin , AddUser,FindUser}
