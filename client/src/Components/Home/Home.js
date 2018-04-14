import React, { Component } from "react";
import Nav from "../Nav"
import Search from "../SearchBar/Search"
import TwitchStream from "../TwitchStream"
import API from "../../utils/API"
import User from "../../Components/UserInfo"
import TopGames from "../TopGames"
import history from "../../history"
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
    });
  };

  handleSubmitForm = event => {
    // When the form is submitted, prevent its default behavior
    event.preventDefault();
    API.search(this.state.twitchSearch)

      .then(res => {
        console.log(res);
        console.log('streandd' ,res.data);
        this.setState({
          channel: res.data.streams[0].channel.display_name,
          searched: 0
        }, () => {
            history.push({
              pathname: "/game",
              state: { some: this.state }
            });
        });
        // this.handleVid()
      })

    
      .catch(err => console.log(err))

    //   .then (history.push({
    //     pathname: '/game',
    //     state: { some: this.state }
    //     })
    // );
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

//   componentDidUpdate(){
//       console.log('does thi get call');
//       console.log('channel ' + this.state.channel);
//   }

  render() {
    console.log(this.state.TopGames);
    return <div id="pixel">
        <div id="home">
            <div id="mainheadcontainer">
                <h1 id="mainhead">Genuine Game Gurus</h1>
                <h1 id="subhead">Powered by Twitch</h1>
          </div>
          <h1 id="twitchbadge"><img height="130" width="130" src="./assets/images/twitchbadge.png"/></h1>
          <h1 id="thecontroller"><img height="400" width="400" src="./assets/images/classiccontroller.png"/></h1>
          <div id="wrapper" className="container">
            <div className="row">
              <div className="col s12">
                <div className="col s6">
                  <h1 id="bethe">Be the</h1>
                  <h1 id="betheteacher">Teacher!</h1>
                  <img id="mario" width="495" height="265" src={process.env.PUBLIC_URL + "./assets/images/mario.jpg"} />
                  <div id="buttonsdiv" />
                </div>
                <hr/>

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
          </div>
        </div>
      </div>;
  }
}
    export default Home;




    