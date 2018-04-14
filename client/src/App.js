import React from "react";
import {Router, Route , Switch} from "react-router-dom";
import Home from "./Components/Home/Home"
import Teacher from "./Components/Teacher/Teacher"
import Game from "./Components/Game/Game"
import history from "./history"

let gameBool = false;
const App = (props) =>
<Router history={history}>
<div>

    <Switch>
    
   
       <Route exact path = "/game" component={Game} />
       <Route exact path = "/" component={Home} />
     
   
    <Route exact path = "/teacher" component={Teacher} />
    
    </Switch>
</div>
  </Router>
 

export default App;
