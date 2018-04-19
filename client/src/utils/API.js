import axios from "axios";
import request from "request"
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

  getTwitchLogIn : function(accessToken, ctx, cb) {
    request.get('https://api.twitch.tv/kraken/user', {
      headers: {
        'Authorization': 'OAuth ' + accessToken,
        'Accept': 'application/vnd.twitchtv.v3+json',
        'Client-ID':'q1m75qqduluurj17mc4sxz1w8y9kuo'
      }
    }, function(e, r, b) {
      if (e) return cb(e);
      if (r.statusCode !== 200) return cb(new Error('StatusCode: ' + r.statusCode));
      var profile = JSON.parse(b);
      profile.id = profile._id;
      delete profile._id;
      profile.links = profile._links;
      delete profile._links;
      return cb(null, profile);
    });
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

      createRating : function(ratingData) {
        return axios.post("/api/postRating", ratingData)
      },

      updateRating : function(ratingData) {
        return axios.post("/api/updateRating", ratingData)
      }

      // updateRating : function() {
        
      // }




}

