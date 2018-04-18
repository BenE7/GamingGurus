import React from "react";
import "./TwitchStream.css";
import BensPic from "./coach1.png"
import Coach2 from "./coach2.jpg"
import Coach3 from "./coach3.jpg"
import Coach4 from "./coach4.jpg"


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
    
     return <div>
        <div id="streamhead">
          <h1 id="streamheadtext">Your Stream</h1>
        </div>
         <div id="streambox">
           <div className="gamepagestream" id={props.targetID} />
         </div>

         <div id="connect">
           <div id="card1" class="card" style={{ width: 202 }}>
             <img class="card-img-top" src={BensPic} style={{ width: 200 }} alt="Card image cap" />
             <div className="card-body" style={{ width: 200 }}>
               <p class="card-text">Steve</p>

               <p className="therate">$50</p>
               <p className="perhour">per hour</p>
               <p id="stevebio">
                 - 8 Year MLG veteran
                 <br />
                 <br />
                 - Former game developer
                 <br />
                 <br />
                 - Loves hummus
               </p>
             </div>
           </div>

           <div id="card2" class="card" style={{ width: 202 }}>
             <img class="card-img-top" src={Coach2} style={{ width: 200 }} alt="Card image cap" />
             <div class="card-body" style={{ width: 200 }}>
               <p class="card-text">Brian</p>

               <p className="therate">$35</p>
               <p className="perhour">per hour</p>
               <p id="brianbio">
                 - PAX East Tourney winner
                 <br />
                 <br />
                 - Multi lingual
                 <br />
                 <br />
                 - Loves shrimp
               </p>
             </div>
           </div>

           <div id="card3" class="card" style={{ width: 202 }}>
             <img class="card-img-top" src={Coach3} style={{ width: 200 }} alt="Card image cap" />
             <div class="card-body" style={{ width: 200 }}>
               <p class="card-text">Sara</p>

               <p className="therate">$20</p>
               <p className="perhour">per hour</p>
               <p id="melissabio">
                 - Current Game Developer 
                 <br />
                 <br />
                 - Multiple MLG awards
                 <br />
                 <br />
                 - Loves Pizza
               </p>
             </div>
           </div>

           <div id="card4" class="card" style={{ width: 202 }}>
             <img class="card-img-top" src={Coach4} style={{ width: 200 }} alt="Card image cap" />
             <div class="card-body" style={{ width: 200 }}>
               <p class="card-text">Saji</p>

               <p className="therate">$20</p>
               <p className="perhour">per hour</p>
               <p id="sanjevbio">
                 - First year MLG player
                 <br />
                 <br />
                 - Quickest story completion
                 <br />
                 <br />
                 - Loves coding
               </p>
             </div>
           </div>
         </div>
       </div>;
      
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
