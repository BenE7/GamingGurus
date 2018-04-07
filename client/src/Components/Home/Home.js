import React, { Component } from "react";
import Nav from "../Nav";
import "./Home.css";

class Home extends Component {
render() {
   return (
    <div className="home">
        <h1 id="mainhead">Genuine Game Gurus</h1>
        <h1 id="mainlogo"><img height="200" width="250" src={process.env.PUBLIC_URL + "./assets/images/logo2.png"}/></h1>
        <div id="wrapper">
            <div id="mainbox">
                <div id="games">
                    <h1 id="betheg">Be the</h1>
                    <h1 id="bethegamer">Gamer!</h1>
                    <img width="485" height="265" src={process.env.PUBLIC_URL + "./assets/images/horizon.jpeg"} />
                    <div id="inputbox" class="col-xs-3">
                        <label id="searchtext" for="ex2"></label>
                        <input placeholder="Search Your Game" class="form-control" id="ex2" type="text"/>
                    </div>
                </div>

                <div id="mario">
                    <h1 id="bethe">Be the</h1>
                    <h1 id="betheteacher">Teacher!</h1>
                    <img width="493" height="265" src={process.env.PUBLIC_URL + "./assets/images/mario.jpg"} />
                    <button type="button" id="teachersignup" class="btn btn-primary">Sign Up</button>
                    <button type="button" id="teacherlogin" class="btn btn-primary">Log In</button>
                </div>
            </div>

        </div>
    
    </div>
       
      );
    }
}
    export default Home;