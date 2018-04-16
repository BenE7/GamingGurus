import React, { Component } from "react";
import Nav from "../Nav";
import TwitchStream from "../TwitchStream";
import Search from "../SearchBar/Search";
import API from "../../utils/API";
import "./Game.css";

class Game extends Component {
    render(some) {
    let statebool = this.props.location.state;
    console.log(statebool);
   return (
    <div id="pagewrapper">
      <div>
        {statebool && <h1 style={{textAlign:"center", fontFamily:"Bungee Shade", color:"white", textShadow: "2px 1px black", margin: "10px auto 50px auto"}}>{this.props.location.state.some.game}</h1>}
        <div id="gamepagesearch">
            <Search name="twitchSearch" />
        </div>
        {statebool ? (<TwitchStream {...this.props.location.state.some} />):(<div id="twitch-embed" style={{background: "#000000 url(" + process.env.PUBLIC_URL + "/assets/images/logo.gif) top center / 25% 50% no-repeat", marginTop: "-230px", minHeight : "680px"}}><h1 style={{textAlign:"center", fontFamily:"Bungee Shade", color:"white", position:"absolute", textShadow: "2px 1px black",left:"50%", top:"52%", transform:"translate(-50%, -50%)", margin: "10px auto 50px auto"}}>Search for a Game!</h1></div>)}
      </div>
    </div>
       
      );
    };
}
    export default Game;
