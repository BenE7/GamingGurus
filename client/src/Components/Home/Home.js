import React, { Component } from "react";
import Nav from "../Nav"
import Search from "../SearchBar/Search"
import TwitchStream from "../TwitchStream"
import API from "../../utils/API"
import User from "../../Components/UserInfo"
import TopGames from "../TopGames"
import "./Home.css";


class Home extends Component {
  state = {
    targetID: "twitch-embed",
    width: "940",
    height: "480",
    channel: "",
    twitchSearch: "",
    searched: 0,
    gameBool: false,
    TopGames: []
  };

  handleInputChange = event => {
    // deconstruction way
    //  aka
    // const name = event.target.name
    // const value = event.target.value
    const { name, value } = event.target;
    console.log("name", name, value);
    console.log(this.state);
    this.setState({
      [name]: value,
      channel: false
    });
  };

  handleSubmitForm = event => {
    //  this.setState({  searched: 1 })
    // When the form is submitted, prevent its default behavior
    event.preventDefault();
    API.search(this.state.twitchSearch)

      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          channel: res.data.streams[0].channel.display_name,
          searched: 0
        });
        // this.handleVid()
      })

      .catch(err => console.log(err));
  };

  dothing = event => {
    // event.preventDefault();
    API.searchTop()

      .then(res => {
        console.log(res);
        console.log(res.data.top);
        this.setState({ TopGames: res.data.top });

        // this.handleVid()
      })

      .catch(err => console.log(err));
  };

  boxArtVideo = event => {
    this.setState({
        channel:""
    });
    console.log(event.target.name);
    API.search(event.target.name)
    .then(res => {
      console.log(res);
      console.log(res.data);
        this.setState({
          channel: res.data.streams[0].channel.display_name,
          layout: "video",
          searched: 0,
          width: "300",
          height: "200"
        });
      // this.handleVid()
    });
  };

  componentDidMount() {
    this.dothing();
    console.log("saveUser");
    API.saveUser({
      twitchToken: Math.floor(Math.random() * 100000000000000 + 1)
    });
  }

  render() {
    console.log(this.state.TopGames);
    return <div id="pixel">
        <div id="home">
          <h1 id="mainhead">Genuine Game Gurus</h1>
          <h1 id="twitchlogo">
            <img height="200" width="200" src={process.env.PUBLIC_URL + "./assets/images/twitchlogo.png"} />
          </h1>
          <h1 id="mainlogo">
            <img height="200" width="250" src={process.env.PUBLIC_URL + "./assets/images/logo2.png"} />
          </h1>
          <h1 id="topgametext">Top Games</h1>
          <div id="wrapper" className="container">
            <div className="row">
              <div className="col s12">
                <div className="col s6">
                  <h1 id="bethe">Be the</h1>
                  <h1 id="betheteacher">Teacher!</h1>
                  <img id="mario" width="495" height="265" src={process.env.PUBLIC_URL + "./assets/images/mario.jpg"} />
                  <div id="buttonsdiv" />
                </div>

                <div className="col s6">
                  <h1 id="betheg">Be the</h1>
                  <h1 id="bethegamer">Gamer!</h1>
                  <img id="games" width="489" height="265" src={process.env.PUBLIC_URL + "./assets/images/horizon.jpeg"} />
                  <div id="inputbox" class="col-xs-3">
                    <Search id="search" name="twitchSearch" changeOnInput={this.handleInputChange} handleSubmit={this.handleSubmitForm} />
                  </div>
                </div>
              </div>
            </div>
            <div className="streambox">
            {this.state.channel ? <TwitchStream {...this.state} /> : <p />}
            </div>
            <TopGames boxArtVideo={this.boxArtVideo} TopGames={this.state.TopGames} />
          </div>
        </div>
      </div>;
  }
}
    export default Home;




    