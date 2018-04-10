const db = require("../models/ratings")



// Defining methods for the UsersController
module.exports = {
    findAll: function(req, res) {
        db.Rating
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
  
    create: function(req, res) {
      db.Rating
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
  
  

    
  
     
  
  };
  




