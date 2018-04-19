var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var RatingSchema = new Schema({
 
  rating: {
    type: Number,
    unique: false,
    
    //dropDups: true
  },

 totalRatings : {
   type: Number,
   default : 1
 },



  });
// This creates our model from the above schema, using mongoose's model method
const Rating = mongoose.model("Rating", RatingSchema);

// Rating.on('index', function(error) {
//     if (error) {
//         console.log(error);
//     }
//   });


//module.exports = {RatingSchema : RatingSchema , Rating : Rating}

module.exports = Rating;