import React from "react";
import GuruRating from "../GuruRating/GuruRating.js";
import "./UserInfo.css";

const UserInfo = (props) =>
  
  <div rating={props.userinfo.rating} className="col s12">
    <div id="UserInfo" className="col s12">
    <div className="col s3">
      <img id="user-pic" className="img-responsive" src="http://via.placeholder.com/150x150" alt="user" />      
      {props.userinfo.rating ? <GuruRating userinfo={props.userinfo}  updateRating={props.updateRating} createRating={props.createRating} /> : <GuruRating />}
    </div>

    <div className="col s3">
      <div id="gamertags">        
          {props.userinfo.xbox && <span className="gt"><img className="img-responsive gt-pic" src={process.env.PUBLIC_URL + "/assets/images/xbox.gif"} alt="xbox symbol" />{props.userinfo.xbox}</span>}
          {props.userinfo.ps && <span className="gt"><img id="ps" className="img-responsive gt-pic" src={process.env.PUBLIC_URL + "/assets/images/ps.png"} alt="playstation symbol" />{props.userinfo.ps}</span>}
          {props.userinfo.steam && <span className="gt"><img className="img-responsive gt-pic" src={process.env.PUBLIC_URL + "/assets/images/steam.png"} alt="steam symbol" />{props.userinfo.steam}</span>}
      </div>
    </div>
    {props.userinfo.guru && 
    <div id="rate" className="col s2 offset-s1">
      <span id="dollars">${props.userinfo.rate}</span>
      <span id="per">per hour</span>
    </div>}
    {props.userinfo.guru &&
    <div className="col s2 offset-s1">
      <span id="schedule"><img className="img-responsive calendar" src={process.env.PUBLIC_URL + "/assets/images/calendar-icon.png"} alt="calendar icon" /></span>
    </div>}
    </div>
  </div>;

export default UserInfo;