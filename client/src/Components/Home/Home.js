import React, { Component } from "react";
import Search from "../SearchBar/Search";
import {Button } from 'react-bootstrap';
import "./Home.css";
import Checkout from "../../Checkout";
import request from "request" 

class Home extends Component {
  // buttonClick = () => {
  //   console.log("saveUser");
  //   let rando = Math.floor(Math.random() * 100000000000000 + 1);
  //   API.saveUser({
  //     twitchToken: rando
  //   }).then(() => {
  //     history.push({
  //       pathname: "/youaguru",
  //       state: { twitchToken: rando }
  //     })
  //   })
  // }
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  function(accessToken, ctx, cb) {
    console.log("fuckyou")
    request.get('https://api.twitch.tv/kraken/user', {
      headers: {
        'Authorization': 'OAuth ' + accessToken,
        'Accept': 'application/vnd.twitchtv.v3+json'
      }
    }, function(e, r, b) {
      if (e) return cb(e);
      if (r.statusCode !== 200) return cb(new Error('StatusCode: ' + r.statusCode));
      var profile = JSON.parse(b);
      console.log(profile)
      profile.id = profile._id;
      delete profile._id;
      profile.links = profile._links;
      console.log(profile)
      delete profile._links;
      console.log(profile)
      return cb(null, profile);
    });
  }

  render() {

    const { isAuthenticated } = this.props.auth;

    return (
      <div id="pixel">
        <div id="home">
          <div id="mainheadcontainer">
            <h1 id="mainhead">Genuine Game Gurus</h1>
            <h1 id="subhead">Powered by Twitch</h1>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </div>
          <h1 id="twitchbadge"><img height="130" width="130" alt="twitch symbol" src="./assets/images/twitchbadge.png"/></h1>
          <h1 id="thecontroller"><img height="600" width="620" alt="controller" src="./assets/images/classiccontroller.png"/></h1>
          <div id="wrapper" className="container">
            <div className="row">
              <div className="col s12">
                <div className="col s6">
                  <h1 id="bethe">Be the</h1>
                  <h1 id="betheteacher">Teacher!</h1>
                  <img id="mario" width="495" height="265" alt="mario background" src={process.env.PUBLIC_URL + "/assets/images/mario.jpg"} />
                </div>
                <hr/>
                <div className="col s6">
                  <h1 id="betheg">Be the</h1>
                  <h1 id="bethegamer">Gamer!</h1>
                  <img id="games" width="489" height="265" alt="horizon background" src={process.env.PUBLIC_URL + "/assets/images/horizon.jpeg"} />
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