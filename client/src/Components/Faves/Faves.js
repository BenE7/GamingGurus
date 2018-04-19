import React, { Component } from "react";
import "./Faves.css";

class Faves extends Component {
  render(props) {
    return (
      <div id="Faves" className="col s12">  
        {/* <div className="col s12">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <a href="https://www.rocketleague.com/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZWhzJeOEm_7G6oc0fzY8eFj33YwpOWrS5tXTFCZD2kBHTVnjaA" alt="game art"/>    <span className="card-title home">Rocket League</span>
              </a>
            </div>
          </div>
        </div> */}
     {this.props.userinfo.selectedGames && this.props.userinfo.selectedGames.indexOf("Rocket League") > -1 && 
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <a rel="noopener noreferrer" target="_blank" href="https://www.rocketleague.com/">
                <img style={{height:"101.95px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZWhzJeOEm_7G6oc0fzY8eFj33YwpOWrS5tXTFCZD2kBHTVnjaA"alt="game art"/>
              </a>
            </div>
          </div>
        </div>
      }
      {this.props.userinfo.selectedGames && this.props.userinfo.selectedGames.indexOf("Fortnite") > -1 &&
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <a rel="noopener noreferrer" target="_blank" href="https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale">
                <img style={{height:"101.95px"}} src="https://i.ytimg.com/vi/wGB1aLDR2Es/maxresdefault.jpg" alt="game art"/>
              </a>
            </div>
          </div>
        </div>
      }
      {this.props.userinfo.selectedGames && this.props.userinfo.selectedGames.indexOf("Player Unknown's Battle Grounds") > -1 &&
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <a rel="noopener noreferrer" target="_blank" href="https://playbattlegrounds.com/main.pu">
                <img style={{height:"101.95px"}} src="http://i0.kym-cdn.com/entries/icons/original/000/023/421/PLAYERUNKNOWNS-BATTLEGROUNDS-12937706.jpg" alt="game art"/>    
              </a>
            </div>
          </div>
        </div>
      }
      {this.props.userinfo.selectedGames && this.props.userinfo.selectedGames.indexOf("DOTA 2") > -1 &&
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <a rel="noopener noreferrer" target="_blank" href="http://www.dota2.com/play/">
                <img style={{height:"101.95px"}} src="https://cdn.ndtv.com/tech/gadgets/dota-2-official.jpg?output-quality=80" alt="game art"/>
              </a>
            </div>
          </div>
        </div>
      }
      {this.props.userinfo.selectedGames && this.props.userinfo.selectedGames.indexOf("Counter Strike Global Offensive") > -1 &&
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <a rel="noopener noreferrer" target="_blank" href="http://blog.counter-strike.net/">
                <img style={{height:"101.95px"}} src="https://www.vonmerch.com/img/blog/custom/csgo.png" alt="game art"/>
              </a>
            </div>
          </div>
        </div>
      }
      </div>
      
    )
  }
};

export default Faves;