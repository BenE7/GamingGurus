import React from "react";
import {Router, Route , Switch} from "react-router-dom";
import Home from "./Components/Home/Home";
import Teacher from "./Components/Teacher/Teacher";
import Game from "./Components/Game/Game";
import YouAGuru from "./Components/YouAGuru/YouAGuru";
import GamerForm from "./Components/GamerForm/GamerForm";
import Callback from "./Callback/Callback"
import history from "./history";
import Auth from "./Auth/Auth";

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const App = (props) =>
  <Router history={history}>
    <div style={{height:"100%"}}>
      <Switch>
        <Route exact path = "/game" render={(props) => <Game auth={auth} {...props} />} />
        <Route exact path = "/" render={(props) => <Home auth={auth} {...props} />} />
        <Route exact path = "/teacher" render={(props) => <Teacher auth={auth} {...props} />} />
        <Route exact path = "/youaguru" render={(props) => <YouAGuru auth={auth} {...props} />}/>
        <Route exact path = "/infoform" render={(props) => <GamerForm auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
      </Switch>
    </div>
  </Router>
  
export default App;