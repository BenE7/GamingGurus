import React from "react";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Nav from "./Components/Nav"
import Home from "./Components/Home/Home"
import Teacher from "./Components/Teacher/Teacher"
import Game from "./Components/Game/Game"

const App = () =>
<Router>
<div>

    <Switch>
    <Route exact path = "/" component={Home} />
    <Route exact path = "/teacher" component={Teacher} />
    <Route exact path = "/Game" component={Game} />
    </Switch>
</div>
  </Router>
 

export default App;
