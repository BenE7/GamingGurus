import React, { Component } from "react";
import Search from "../SearchBar/Search";
import API from "../../utils/API";
import history from "../../history";
import "./Home.css";
import Checkout from "../../Checkout";
import { Navbar, Button } from 'react-bootstrap';
const request = require('request');


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
    request.get('https://api.twitch.tv/kraken/user', {
      headers: {
        'Authorization': 'OAuth ' + accessToken,
        'Accept': 'application/vnd.twitchtv.v3+json'
      }
    }, function(e, r, b) {
      if (e) return cb(e);
      if (r.statusCode !== 200) return cb(new Error('StatusCode: ' + r.statusCode));
      var profile = JSON.parse(b);
      profile.id = profile._id;
      delete profile._id;
      profile.links = profile._links;
      delete profile._links;
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
          </div>
          <h1 id="twitchbadge"><img height="130" width="130" alt="twitch symbol" src="./assets/images/twitchbadge.png"/></h1>
          <h1 id="thecontroller"><img height="400" width="400" alt="controller" src="./assets/images/classiccontroller.png"/></h1>
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
                    {/* <button onClick={this.buttonClick} id="placeholderbtn" className="btn waves-effect waves-light" type="submit" name="action">log in<i className="material-icons right">send</i></button> */}
                  </div>
                </div>
                <hr/>
                <div className="col s6">
                  <h1 id="betheg">Be the</h1>
                  <h1 id="bethegamer">Gamer!</h1>
                  <img id="games" width="489" height="265" alt="horizon background" src={process.env.PUBLIC_URL + "./assets/images/horizon.jpeg"} />
                  <div id="inputbox" className="col-xs-3">
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