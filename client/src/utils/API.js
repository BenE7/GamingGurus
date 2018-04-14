import axios from "axios";
// const qs = require('qs');
let BASEURL = 'https://api.twitch.tv/kraken/search/streams?query=';
//let BASEURL = 'https://api.twitch.tv/helix/streams/?game=';


export default {
  search: function(query) {
    
    
    return axios.get(`${BASEURL}${query}`, {
      headers: {
        'Client-ID': 'zu8x28z97c4q9oz4xyb9i82u9l3fto'
      },
      
    });
  },

  searchTop : function(){
    return axios.get('https://api.twitch.tv/kraken/games/top?limit=4', {
      headers: {
        'Client-ID': 'zu8x28z97c4q9oz4xyb9i82u9l3fto'
      }
    })

  },



      // Gets all Users
      getUsers: function() {
        return axios.get("/api/users");
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


      getRatings: function() {
        return axios.get("/api/ratings")
      },

      createRating : function(ratingData) {
        return axios.post("/api/postRating", ratingData)
      },

      updateRating : function(ratingData) {
        return axios.post("/api/updateRating", ratingData)
      }

      // updateRating : function() {
        
      // }




}

