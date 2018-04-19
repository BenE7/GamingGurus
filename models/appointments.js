var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// This is similar to a Sequelize model
var AppointmentsSchema = new Schema({
 
  name: {
    type: 'string',
    // unique: true,
    //dropDups: true
  },

 slot : {
   type: 'string',

 },

date: {
    type: 'string',
    
  },

  email : {
      type : 'string',
  },

  phone : {
      type : 'string'
  }





  });
// This creates our model from the above schema, using mongoose's model method
const Appointments = mongoose.model("Appointments", AppointmentsSchema);

Appointments.on('index', function(error) {
    if (error) {
        console.log(error);
    }
  });


//module.exports = {AppointmentsSchema : AppointmentsSchema , Appointments : Appointments}

module.exports = Appointments;
