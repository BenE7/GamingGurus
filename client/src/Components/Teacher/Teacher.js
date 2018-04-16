import React, { Component } from "react";
import UserInfo from "../UserInfo";
import Bio from "../Bio";
import API from "../../utils/API";



class Teacher extends Component {
    state = {
        user: {
            guru : '',
            ratings: [0],
            saveDate : '',
            twitchToken : '',
            _id : ''
        }

    }

    // getToke = () => {
    //     API.getloogedtoke()
    //     .then(res => this.setState({ loggedInToken : res.twitchToken}))
        
    // }

    
loadRating = event => {
   API.findUser('63370564282625')
    .then(res =>{ console.log(res.data)
    console.log('user rating on get req' , res.data.ratings[0])
    console.log('all the user response obj', res.data)
    this.setState(function(prevState, currentProps) {
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
    API.getRatings()
    .then(res => console.log('rating res' ,res))
    this.loadRating()

    //API.newRating({
       // rating : Math.floor(Math.random() * 5 + 1)
      console.log('inside didMount create, rating or update' , this.state.user )
      
      
       
       
       
    //  })
   
    }

   createRating = (newRating) =>{
    API.createRating({
        rating : newRating
         })
      console.log(`rating of ${newRating} created`)

    }

    updateRating = ( currentRating, totalRatings, clickValue) =>{
        console.log('total ratings', totalRatings , 'current rate' , currentRating, 'click', clickValue)
       let newRating =   Math.floor((((currentRating * totalRatings) + clickValue)  / (totalRatings + 1) * 100 ) / 100)
    //   API.updateRating({
         
    //   })
      console.log(`rating updated rating now ${newRating}`)
    }


    render() {
        console.log(this.state.user)
       return (
          <div style={{ paddingTop: "10px", paddingBottom:"50px",background: "url(" + process.env.PUBLIC_URL + "/assets/images/characters.png) center / 100% 100% no-repeat fixed"}}>
            <h1 id="profile-header" style={{textAlign:"center", fontFamily:"Bungee Shade", color:"white", textShadow: "2px 1px black", margin: "10px auto 50px auto"}}>Profile</h1>
                 <div className="container">
                    <div className="row">
                        <UserInfo userinfo={this.state.user}  updateRating={this.updateRating} createRating={this.createRating} />
                    </div>
                    <Bio />
           
                 </div>
           </div>
           
          );
        }
    }
        export default Teacher;