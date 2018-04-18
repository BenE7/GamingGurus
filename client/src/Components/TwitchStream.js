import React from "react";
import "./TwitchStream.css";


const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';



const TwitchStream=(props) => {
  const script = document.createElement('script');
  script.setAttribute(
    'src',
    EMBED_URL
  );
  script.addEventListener('load', () => {
    console.log(props)
    let embed = new window.Twitch.Embed(props.targetID, { ...props});
  });
  document.body.appendChild(script);
    
  return (
    <div>
      <div className="gamepagestream" id={props.targetID}></div>
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
