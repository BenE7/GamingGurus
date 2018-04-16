import React, { Component } from "react";
import API from "../../utils/API";
import ClearElement from "../../utils/clearElement"
import history from "../../history";
import "./Search.css"


 class Search extends Component {
  state = {
    targetID: "twitch-embed",
    width: "940",
    height: "480",
    channel: "",
    game: "",
    twitchSearch: ""
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
    ClearElement("twitch-embed");
    (API.search(this.state.twitchSearch))

      .then(res => {
        console.log(res);
        console.log('streandd' ,res.data);
        this.setState({
          channel: res.data.streams[0].channel.display_name,
          game: res.data.streams[0].game,
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
  render(){
    return (
      <div>
    

      <div className="row">
      <div className="col s6">
        <div className="row">
          <div className="input-field col s6">
            <input name="twitchSearch"  onChange={this.handleInputChange}  type="text" id="autocomplete-input" className="autocomplete"/>
            <button onClick={this.handleSubmitForm} id="playbtn" className="btn waves-effect waves-light" type="submit" name="action">Submit
  <i className="material-icons right">send</i>

</button>
          </div>
        </div>
        
  
      
      </div>
    </div>
      </div>
    )
};
}
export default Search;