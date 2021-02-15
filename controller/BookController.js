let Book = require("../models/Books");
const jwt = require('jsonwebtoken');


///////get book
const Findbook = (req,res) =>{
    jwt.verify(req.token, 'secretkey', (err, authData) => {

        if(err) {
          res.sendStatus(403);
        } else {
    
          Book.find()
          .then((Book) => res.json(Book))
          .catch((err) => res.status(400).json("Error :" + err));
    
       }
    }); 
}
  ///////ADD book
  const AddBook = (req,res) =>{
    const name = req.body.name;
    const author = req.body.author;
    const price = req.body.price;
 
    const newBook = new Book({
        name,
        author,
        price
    });
    newBook
    .save()
    .then(() => res.json("Book successfully added"))
    .catch((err) => res.status(400).json("Error :" + err));
}

module.exports = { AddBook,Findbook }