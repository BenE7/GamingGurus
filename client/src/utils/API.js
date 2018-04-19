import axios from "axios";
// const qs = require('qs');
let BASEURL = 'https://api.twitch.tv/kraken/search/streams?query=';
//let BASEURL = 'https://api.twitch.tv/helix/streams/?game=';


export default {
  search: function(query) {
    console.log(`${BASEURL}${query}`)
    
    return axios.get(`${BASEURL}${query}`, {
      headers: {
        'Client-ID': 'zu8x28z97c4q9oz4xyb9i82u9l3fto'
      },
      
    });
  },

  searchTop : function(){
    return axios.get('https://api.twitch.tv/kraken/games/top?limit=2', {
      headers: {
        'Client-ID': 'zu8x28z97c4q9oz4xyb9i82u9l3fto'
      }
    })

  },



      // Gets all Users
      getUsers: function() {
        return axios.get("/api/users").then((response)=>console.log(response));
      },
   
      // Deletes the User with the given id
      deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
      },
      // Saves a User to the database
      saveUser: function(UserData) {
        return axios.post("/api/users", UserData);
      },

      findUser : function(id){
        return axios.get("/api/getUser/" + id);
      },

      updateUser: function(id, formPayload){
        return axios.post("/api/users/" + id, formPayload)
      },


      getRatings: function() {
        return axios.get("/api/ratings")
      },

      createRating : function( id , ratingData) {
        return axios.post("/api/postRating/" + id, ratingData)
      },

      updateRating : function(id, ratingData) {
        return axios.post("/api/updateRating/" +id, ratingData)
      },

      beGuru : function(UserData) {
        return axios.post("/api/isGuru", UserData)
      },

      getAppointments : function(appointments) {
        return axios.get("/api/appointments" , appointments)
      },

      createAppointment : function(appointment) {
        return axios.post("/api/appointments" , appointment)
      }

      // updateRating : function() {
        
      // }




}

