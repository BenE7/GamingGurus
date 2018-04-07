import React, { Component } from "react";
import API from "../utils/API.js"

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';



    class TwitchStream extends React.Component {
      
        state = {
            targetID: 'twitch-embed',
            width: '940',
            height: '480',
            channel: 'UnderBlank'
          }

          handleInputChange = event => {
   
            // deconstruction way
            //  aka
            // const name = event.target.name
            // const value = event.target.value
            const {name , value} = event.target;
            console.log('name', name, value)
            this.setState({
              [name] : value
            })
          }
          
          


componentDidMount() {
      API.search('Starcraft')
            .then(res => { 
                console.log(res)
                console.log(res.data)
                this.setState({  channel: res.data.streams[0].channel.display_name });
            this.handleVid()
            })  
        }
        
            handleVid = event => {
        let embed;
        
        const script = document.createElement('script');
        script.setAttribute(
          'src',
          EMBED_URL
        );
        script.addEventListener('load', () => {
          embed = new window.Twitch.Embed(this.state.targetID, { ...this.state });
        });
        document.body.appendChild(script);
    
    }

    
      render() {
    
        return (
          <div>
            TwitchStream {this.state.channel}
            <div id={this.state.targetID}></div>
          </div>
        )
      }
    }
    
    // TwitchStream.defaultProps = {
    //   targetID: 'twitch-embed',
    //   width: '940',
    //   height: '480',
    //   channel: 'summit1g',
    // }
    

            // search = event => {
        //  API.search('starcraft')
        //  .then(res => { 
        //      console.log(res)
        //      console.log(res.data.streams[0].channel.display_name)
        //      this.setState({  channel: res.data.streams[0].channel.display_name });
        //  })

        // }


export default TwitchStream;

