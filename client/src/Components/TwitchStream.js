import React, { Component } from "react";
import API from "../utils/API.js"

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';



const TwitchStream=(props) => {
  
      
 
        let embed;
        
        const script = document.createElement('script');
        script.setAttribute(
          'src',
          EMBED_URL
        );
        script.addEventListener('load', () => {
          embed = new window.Twitch.Embed(props.targetID, { ...props});
        });
        document.body.appendChild(script);
    
    

    
 
    
        return (
          <div>
            Hello {props.channel} {props.targetID} {props.width} {props.height}
            <div id={props.targetID}></div>
          </div>
        )
      
    }
    
    // TwitchStream.defaultProps = {
    //    targetID: 'twitch-embed',
    //    width: '940',
    //    height: '480',
    //    channel: 'summit1g',
    //  }
    

            // search = event => {
        //  API.search('starcraft')
        //  .then(res => { 
        //      console.log(res)
        //      console.log(res.data.streams[0].channel.display_name)
        //      this.setState({  channel: res.data.streams[0].channel.display_name });
        //  })

        // }


export default TwitchStream;

