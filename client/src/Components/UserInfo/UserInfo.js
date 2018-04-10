import React from "react";
import GuruRating from "../GuruRating/GuruRating.js";
import "./UserInfo.css";

const UserInfo = () =>

  <div className="col s12">
    <div id="UserInfo" className="col s12">
    <div className="col s3">
      <img id="user-pic" className="img-responsive" src="http://via.placeholder.com/150x150" />      
      <GuruRating />
    </div>

    <div className="col s3">
      <div id="gamertags">        
          <span className="gt"><img className="img-responsive gt-pic" src={process.env.PUBLIC_URL + "/assets/images/xbox.gif"} />Xbox GT</span>
          <span className="gt"><img className="img-responsive gt-pic" src={process.env.PUBLIC_URL + "/assets/images/playstation.png"} />Play Station GT</span>
          <span className="gt"><img className="img-responsive gt-pic" src={process.env.PUBLIC_URL + "/assets/images/steam.png"} />Steam GT</span>
      </div>
    </div>
    <div id="rate" className="col s2 offset-s1">
      <span id="dollars">$25</span>
      <span id="per">per hour</span>
    </div>
    <div className="col s2 offset-s1">
      <span id="schedule"><img className="img-responsive calendar" src={process.env.PUBLIC_URL + "/assets/images/calendar-icon.png"} /></span>
    </div>
    </div>
  </div>;

export default UserInfo;