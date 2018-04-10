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
          <div>
            
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