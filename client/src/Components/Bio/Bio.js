import React, { Component } from "react";
import "./Bio.css";
import Faves from "../Faves";

class Bio extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div id="Bio" className="col s12">
          <div id="bio-wrapper" className="col s7">
            <h3 id="bio-head">My Accolades and Achievements</h3>
            {this.props.userinfo.bio && <p id="user-bio">{this.props.userinfo.bio}</p>}
            <ul id="achievement-list">
              {this.props.userinfo.achieve1 && <li><span role="img" aria-label="trophy emoji">🏆</span> {this.props.userinfo.achieve1}</li>}
              {this.props.userinfo.achieve2 && <li><span role="img" aria-label="trophy emoji">🏆</span> {this.props.userinfo.achieve2}</li>}
              {this.props.userinfo.achieve3 && <li><span role="img" aria-label="trophy emoji">🏆</span> {this.props.userinfo.achieve3}</li>}
            </ul>
          </div>
          <div className="col s5">
            <Faves {...this.props}/>
          </div>
        </div>
      </div>
    )
  }
};

export default Bio;