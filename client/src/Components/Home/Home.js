import React, { Component } from "react";
import Search from "../SearchBar/Search";
import API from "../../utils/API";
import history from "../../history";
import "./Home.css";
import Checkout from "../../Checkout";


class Home extends Component {
  buttonClick = () => {
    console.log("saveUser");
    let rando = Math.floor(Math.random() * 100000000000000 + 1);
    API.saveUser({
      twitchToken: rando
    }).then(() => {
      history.push({
        pathname: "/youaguru",
        state: { twitchToken: rando }
      })
    })
  }
  render() {
    return (
      <div id="pixel">
        <div id="home">
          <div id="mainheadcontainer">
            <h1 id="mainhead">Genuine Game Gurus</h1>
            <h1 id="subhead">Powered by Twitch</h1>
          </div>
          <h1 id="twitchbadge"><img height="130" width="130" alt="twitch symbol" src="./assets/images/twitchbadge.png"/></h1>
          <h1 id="thecontroller"><img height="600" width="620" alt="controller" src="./assets/images/classiccontroller.png"/></h1>
          <div id="wrapper" className="container">
            <div className="row">
              <div className="col s12">
                <div className="col s6">
                  <h1 id="bethe">Be the</h1>
                  <h1 id="betheteacher">Teacher!</h1>
                  <img id="mario" width="495" height="265" alt="mario background" src={process.env.PUBLIC_URL + "./assets/images/mario.jpg"} />
                  <div id="buttonsdiv">
                  <Checkout
            name={'The Road to learn React'}
            description={'Only the Book'}
            amount={1}
          />
                    <button onClick={this.buttonClick} id="placeholderbtn" className="btn waves-effect waves-light" type="submit" name="action">log in<i className="material-icons right">send</i></button>
                  </div>
                </div>
                <hr/>
                <div className="col s6">
                  <h1 id="betheg">Be the</h1>
                  <h1 id="bethegamer">Gamer!</h1>
                  <img id="games" width="489" height="265" alt="horizon background" src={process.env.PUBLIC_URL + "./assets/images/horizon.jpeg"} />
                  <div id="inputbox" className="col-xs-3">
                  <div id="searchyourstream">Search for Streams</div>
                    <Search id="search" name="twitchSearch" />
                  </div>
                </div>
                <div id="twitch-embed"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;