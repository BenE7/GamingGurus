import React from "react";

const TopGames = props => {
  
    return (
       <div>
       {props.TopGames.map((Game, index) => (
           <div key={index} className="card">
             <h5 className="card-header">
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