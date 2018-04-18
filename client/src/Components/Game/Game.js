import React, { Component } from "react";
import Nav from "../Nav"
import TwitchStream from "../TwitchStream"
import "./Game.css"

class Game extends Component {
render(some) {
    console.log(this.props.location.state.some);
   return (
    <div id="pagewrapper">
      <div>

      <div id="thetwitchbox">
      </div>
 
       <TwitchStream {...this.props.location.state.some}/>
      

       </div>
       </div>
       
      );
    };
}
    export default Game;
