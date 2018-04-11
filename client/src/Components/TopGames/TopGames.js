import React from "react";
import "./TopGames.css"

const TopGames = props => {
  
    return (
       <div id="topgames">
       {props.TopGames.map((Game, index) => (
           <div key={index} className="field">
             <h5 className="field-header">
               {Game.game.name} 
               
             </h5>
           <div className="card-body">
             <img src ={Game.game.box.small}></img>
             <h5 className="card-title"> </h5>
             {Game.viewers}
           </div>
           </div>
         ))}
       </div>
     )
   
    }

    export default TopGames;