const db = require("../models")




// Defining methods for the 
module.exports = {
    findAll: function(req, res) {
        db.Rating
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
  
    // create: function(req, res) {
    //   console.log('create first rating')
    //   console.log(req.body)
    //   db.Rating
         
    //     .create(req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },


    updateRating : function(req, res) {
       console.log('inside update req.body', req.body)
       console.log('req params' , req.params)
         db.Rating
        // console.log('req.bod inside db.User' ,  req.body)
          // find one and update  twitchToken: req.body.twitchToken
          .findOneAndUpdate({ _id : req.params.id  }, req.body)
          .then(updatedRating => console.log('updated Rating' , updatedRating))
          .catch(err => res.status(422).json(err));
      
    },


     
      createRating : function(req, res) {
        console.log('line 24 req , create  first rating')
        console.log(req.body)
        console.log( 'create first rating ' , req.params)
        
       db.Rating
       .create(req.body)
       
            
       .then(function(rating2) {
         console.log('rating2', rating2)
        //  rating2 ={
        //    totalRatings: rating2.totalRatings,
        //     _id: rating2._id,
        //     rating: rating2.rating,
        //     __v: rating2.__v
        //  }
        
          console.log('creation first rating', rating2)
           return db.User.findOneAndUpdate({ twitchToken : req.params.id }, { $set: { ratings: rating2._id  }},  { $inc: {totalRatings:1}})
          .then(function(dbUser) {
        //   // If the User was updated successfully, send it back to the client
          res.json(dbUser);
         })
         })

      }
  
  

    
  
     
  
  };
  