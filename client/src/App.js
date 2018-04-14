import React from "react";
import {Router, Route , Switch} from "react-router-dom";
import Home from "./Components/Home/Home";
import Teacher from "./Components/Teacher/Teacher";
import Game from "./Components/Game/Game";
import YouAGuru from "./Components/YouAGuru/YouAGuru";
import InfoForm from "./Components/InfoForm/InfoForm";
import history from "./history";

let gameBool = false;
const App = (props) =>
<Router history={history}>
<div style={{height:"100%"}}>

    <Switch>
    
   
       <Route exact path = "/Game" component={Game} />
       <Route exact path = "/" component={Home} />
     

    <Route exact path = "/teacher" component={Teacher} />
    <Route exact path = "/youaguru" component={YouAGuru} />
    <Route exact path = "/infoform" component ={InfoForm} />
    </Switch>
</div>
  </Router>
 

export default App;