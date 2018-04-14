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
         db.User
          // find one and update  twitchToken: req.body.twitchToken
          .findOneAndUpdate({ twitchToken : 63370564282625  }, req.body)
          .then(dbArticle => res.json(dbArticle))
          .catch(err => res.status(422).json(err));
      
    },


     
      createRating : function(req, res) {
        console.log('line 24 req , update rating')
        console.log(req.body)
        
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
        
          console.log('updated rating', rating2)
           return db.User.findOneAndUpdate({twitchToken : 63370564282625 }, { $set: { ratings: rating2._id  }})
          .then(function(dbUser) {
        //   // If the User was updated successfully, send it back to the client
          res.json(dbUser);
         })
         })

      }
  
  

    
  
     
  
  };
  

  // app.post("/addNote", function(req, res) {
  //   console.log('req dat bodddyy first', req.body)
  //   var note = {
  //       body : req.body.note
  //   }
  //   // Create a new Note in the database
  //   db.Note.Note.create(note)
  //     .then(function(dbNote) {
  //         console.log(dbNote)
  //         console.log('req dat bodddyy second', req.body)
  //         console.log('dbNote', dbNote)
  //       // If a .Note was created successfully, find one headlines (there's only one) and push the new Note's _id to the headlines's `Notes` array
  //       // { new: true } tells the query that we want it to return the updated headline -- it returns the original by default
  //       // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
  //       console.log("WWWWWWWW" + req.body.note);
  //       return db.Headline.Headline.findOneAndUpdate({_id : req.body._id }, { $push: { notes: dbNote._id } }, { new: true });
  //     })

