import React, { Component } from "react";
import Nav from "../Nav";
import UserInfo from "../UserInfo";

class Teacher extends Component {
    state = {
        user: []
    }
    render() {
       return (
          <div>
          <Nav/>
           Teacher
           <UserInfo />
           </div>
           
          );
        }
    }
        export default Teacher;