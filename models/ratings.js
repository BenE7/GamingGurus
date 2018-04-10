var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// This is similar to a Sequelize model
var RatingSchema = new Schema({
 
  rating: {
    type: 'Number',
    unique: true,
    //dropDups: true
  },

 totalRatings : {
   type: 'Number',
   default : 0
 },



  });
// This creates our model from the above schema, using mongoose's model method
var Rating = mongoose.model("Rating", RatingSchema);

Rating.on('index', function(error) {
    if (error) {
        console.log(error);
    }
  });


module.exports = {RatingSchema : RatingSchema , Rating : Rating}