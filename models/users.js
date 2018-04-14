var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// This is similar to a Sequelize model
var UserSchema = new Schema({
 
  twitchToken: {
    type: 'Number',
    unique: true,
    //dropDups: true
  },

 guru : {
   type: 'Boolean',
   default : false
 },

saveDate: {
    type: 'Date',
    default: Date.now
  },

  ratings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Rating"
    }
  ]


  });
// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

User.on('index', function(error) {
    if (error) {
        console.log(error);
    }
  });


//module.exports = {UserSchema : UserSchema , User : User}

module.exports = User;
