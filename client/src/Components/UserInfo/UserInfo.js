import React from "react";
import GuruRating from "../GuruRating/GuruRating.js";
import "./UserInfo.css";
import SchedulingModal from "../SchedulerModal/SchedulerModal"
import Scheduler from "../Scheduler/Scheduler"


 const UserInfo = (props) =>
   
  <div rating={props.rating} className="col s12">
     
     <div id="UserInfo" className="col s12">
     <div className="col s3">
       <img id="user-pic" className="img-responsive" src="http://via.placeholder.com/150x150" />      
       <GuruRating userinfo={props.userinfo}  updateRating={props.updateRating} createRating={props.createRating} ratingId={props.ratingId}/>
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
       <SchedulingModal/>
     </div>
     </div>
   </div>;

 export default UserInfo;



// export default class UserInfo extends React.Component { 
//   constructor(props) {
//     super(props)
//     this.state = {
//       open: false,
//     };
        
//     this.onOpenModal = () => {
//       this.setState({ open: true });
//     };
    
//     this.onCloseModal = () => {
//       this.setState({ open: false });
//     };


//   }
        
//      render() {
//        const { open } = this.state;
//        return (
//          <div>
    
//   <div rating={this.props.rating} className="col s12">
//      <SchedulingModal/>
//     <div id="UserInfo" className="col s12">
//     <div className="col s3">
//       <img id="user-pic" className="img-responsive" src="http://via.placeholder.com/150x150" />      
//       <GuruRating userinfo={this.props.userinfo}  updateRating={this.props.updateRating} createRating={this.props.createRating} ratingId={this.props.ratingId}/>
//     </div>

//     <div className="col s3">
//       <div id="gamertags">        
//           <span className="gt"><img className="img-responsive gt-pic" src={process.env.PUBLIC_URL + "/assets/images/xbox.gif"} />Xbox GT</span>
//           <span className="gt"><img className="img-responsive gt-pic" src={process.env.PUBLIC_URL + "/assets/images/playstation.png"} />Play Station GT</span>
//           <span className="gt"><img className="img-responsive gt-pic" src={process.env.PUBLIC_URL + "/assets/images/steam.png"} />Steam GT</span>
//       </div>
//     </div>
//     <div id="rate" className="col s2 offset-s1">
//       <span id="dollars">$25</span>
//       <span id="per">per hour</span>
//     </div>
//     <div className="col s2 offset-s1">
//       <span id="schedule"><img  onClick={this.onOpenModal} className="img-responsive calendar" src={process.env.PUBLIC_URL + "/assets/images/calendar-icon.png"} /></span>
//     </div>
//     </div>
//   </div>
//   </div>
//        )
//       }

  
// }
