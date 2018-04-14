import React, { Component } from "react";

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';



const TwitchStream=(props) => {
  
      
 
        let embed;
        
        const script = document.createElement('script');
        script.setAttribute(
          'src',
          EMBED_URL
        );
        script.addEventListener('load', () => {
          console.log(props)
          embed = new window.Twitch.Embed(props.targetID, { ...props});
        });
        document.body.appendChild(script);
    
     return (
          <div>
            Hello {props.channel} {props.targetID} {props.width} {props.height}
            <div className="streambox" id={props.targetID}></div>
          </div>
        )
      
    }
    
export default TwitchStream;




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
