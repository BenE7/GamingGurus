import axios from "axios";

let BASEURL = 'https://api.twitch.tv/kraken/search/streams?query=';
//let BASEURL = 'https://api.twitch.tv/helix/streams/?game=';

// headers: {
//   'Client-ID': 'zu8x28z97c4q9oz4xyb9i82u9l3fto'
// },

// zu8x28z97c4q9oz4xyb9i82u9l3fto

export default {
  search: function(query) {
    
    
    return axios.get(`${BASEURL}${query}`, {
      headers: {
        'Client-ID': 'zu8x28z97c4q9oz4xyb9i82u9l3fto'
      },
      
    });
  }


}

