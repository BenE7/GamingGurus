import React from "react";
import "./TopGames.css"

const TopGames = props => {
  

    return <div id="topgames">
        {props.TopGames.map((Game, index) => (
          <div key={index} className="field">
            <div className="card-body">
              <img 
                id="twitchgame"
                onClick={props.boxArtVideo}
                name={Game.game.name}
                src={Game.game.box.medium}
                alt="game art"
              />
              <br />
              <br />
              <h5 className="viewers">Viewers: {Game.viewers} </h5>
            </div>
          </div>
        ))}
      </div>;

   
    }

    export default TopGames;