var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// This is similar to a Sequelize model
var UserSchema = new Schema({
 
  username: {
    type: 'String',
    unique: true,
    //dropDups: true
  },
  picture: {
    type: 'String'
  },
  
  guru : {
    type: 'Boolean',
  },

  saveDate: {
    type: 'Date',
    default: Date.now
  },

  xbox: {
    type: 'String'
  },

  ps: {
    type: 'String'
  },

  steam: {
    type: 'String'
  },

  selectedGames: {
    type: []
  },

  achieve1: {
    type: 'String'
  },

  achieve2: {
    type: 'String'
  },

  achieve3: {
    type: 'String'
  },

  bio: {
    type: 'String'
  },

  rate: {
    type: 'Number'
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