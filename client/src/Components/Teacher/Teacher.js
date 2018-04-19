import React, { Component } from "react";
import UserInfo from "../UserInfo";
import Bio from "../Bio";
import API from "../../utils/API";



class Teacher extends Component {
    constructor(props) {
    super(props);
    this.state = {
        user: {
           // twitchToken: this.props.location.state.twitchToken,
            guru: '',
            xbox: '',
            ps: '',
            steam: '',
            ratings : [0],
            selectedGames: [],
            gameSelections: ["Rocket League", "Player Unknown's Battle Grounds", "Fortnite", "League of Legends"],
            achieve1: '',
            achieve2: '',
            achieve3: '',
            bio:'',
            rate:'',
            ratingId : ''
        }
    }
}
    // getToke = () => {
    //     API.getloogedtoke()
    //     .then(res => this.setState({ loggedInToken : res.twitchToken}))
        
    // }
componentWillMount = () => {
  //  console.log(this.props.location.state.twitchToken)
    this.loadRating();
}
    
loadRating = event => {
   // console.log(this.state.twitchToken)
   API.findUser('63370564282625')
       //this.props.location.state.twitchToken)
    .then(res =>{this.setState(function(prevState, currentProps) {
        return {
           user: res.data
        };
      });
  //  this.setState({ user: res.data })
    
    })
    
    
    .catch(err => console.log(err))
  }



componentDidMount(rating) {
    
    // Just gets all the rating info stictly to test
    // API.getRatings()
    // .then(res => console.log('rating res' ,res))
    // this.loadRating()

    // //API.newRating({
    //    // rating : Math.floor(Math.random() * 5 + 1)
    //   console.log('inside didMount create, rating or update' , this.state.user )
    console.log(this.state)
      
       
       
       
    //  })
   
    }

   createRating = (newRating) =>{
    console.log(this.state.user.twitchToken)
    API.createRating(this.state.user.twitchToken, {
        rating : newRating
         })
      console.log(`rating of ${newRating} created`)

    }



    updateRating = ( currentRating, totalRatings, clickValue) =>{
        console.log('state of thing')
        console.log('total ratings', totalRatings , 'current rate' , currentRating, 'click', clickValue)
       let updatedRating =  ((((currentRating * totalRatings) + clickValue)  / (totalRatings + 1) * 1 ) / 1).toFixed(2)
       let newTotalRating = this.state.user.ratings[0].totalRatings + 1
       console.log('new total raitngs' , newTotalRating)
       console.log('new rating', updatedRating)
       API.updateRating(this.state.user.ratings[0]._id , {
         
         rating : updatedRating,
         totalRatings : newTotalRating
       })
      console.log(`Rating has now been updated to ${updatedRating}, and the total ratings this user recieved are ${newTotalRating}`)
    }
    


    render() {
        console.log(this.state.user)
       return (
          <div style={{ paddingTop: "10px", paddingBottom:"50px",background: "url(" + process.env.PUBLIC_URL + "/assets/images/characters.png) center / 100% 100% no-repeat fixed"}}>
            <h1 id="profile-header" style={{textAlign:"center", fontFamily:"Bungee Shade", color:"white", textShadow: "2px 1px black", margin: "10px auto 50px auto"}}>Profile</h1>
                 <div className="container">
                    <div className="row">
                        <UserInfo userinfo={this.state.user}  updateRating={this.updateRating} createRating={this.createRating} ratingId={this.state.ratingId} />
                    </div>
                    <Bio userinfo={this.state.user} />
           
                 </div>
           </div>
           
          );
        }
    }
        export default Teacher;