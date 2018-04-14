import React, { Component } from "react";
import Nav from "../Nav";
import UserInfo from "../UserInfo";
import Bio from "../Bio";

class Teacher extends Component {
    state = {
        user: []
    }
    render() {
       return (
          <div style={{background: "url(" + process.env.PUBLIC_URL + '/assets/images/characters.png' + ") center / 100% 100% no-repeat fixed"}}>
            
          <Nav/>
           Teacher
           <div className="container">
           <div className="row">
           <UserInfo />
           </div>
           <Bio />
           
           </div>
           </div>
           
          );
        }
    }
        export default Teacher;