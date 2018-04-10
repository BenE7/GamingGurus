import React, { Component } from "react";
import Nav from "../Nav"
import Search from "../SearchBar/Search"
import TwitchStream from "../TwitchStream"
import API from "../../utils/API"
import "./Home.css";


class Home extends Component {

    state = {
        targetID: 'twitch-embed',
        width: '940',
        height: '480',
        channel: '',
        twitchSearch : '',
        searched : 0
             
      }

      handleInputChange = event => {

        // deconstruction way
        //  aka
        // const name = event.target.name
        // const value = event.target.value
        const {name , value} = event.target;
        console.log('name', name, value)
        console.log(this.state)
        this.setState({
          [name] : value,
          channel: false
        })
      }


       
      handleSubmitForm = (event) => {
      //  this.setState({  searched: 1 })   
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.search(this.state.twitchSearch)
       

        .then(res => { 
            console.log(res)
            console.log(res.data)
            this.setState({  channel: res.data.streams[0].channel.display_name , searched: 0   });
       // this.handleVid()
        })  
    
    
          
          .catch(err => console.log(err));
      };
      
      
      dothingm = (event) => {
        //  this.setState({  searched: 1 })   
          // When the form is submitted, prevent its default behavior, get recipes update the recipes state
          event.preventDefault();
          API.searchTop
         
  
          .then(res => { 
              console.log(res)
              console.log(res.data)
             
         // this.handleVid()
          })  
      
      
            
            .catch(err => console.log(err));
        };
        
        


// componentDidMount() {
//   API.search('Starcraft')
//         .then(res => { 
//             console.log(res)
//             console.log(res.data)
//             this.setState({  channel: res.data.streams[0].channel.display_name });
     
//         })  
//     }
// chris code for testing
render() {
   return (

      <div>
      <Nav/>
       <Search name="twitchSearch" changeOnInput={this.handleInputChange} handleSubmit={this.handleSubmitForm}/>
       Home
       
       {
        (this.state.channel) 
        ? <TwitchStream {...this.state} />
        : <p>There are no results :( </p>
        }
     
        
       </div>
// end chris code testing
    <div className="home">
        <h1 id="mainhead">Genuine Game Gurus</h1>
        <h1 id="mainlogo"><img height="200" width="250" src={process.env.PUBLIC_URL + "./assets/images/logo2.png"}/></h1>
        <div id="wrapper">
            <div id="mainbox">
                <div id="games">
                    <h1 id="betheg">Be the</h1>
                    <h1 id="bethegamer">Gamer!</h1>
                    <img width="485" height="265" src={process.env.PUBLIC_URL + "./assets/images/horizon.jpeg"} />
                    <div id="inputbox" class="col-xs-3">
                        <label id="searchtext" for="ex2"></label>
                        <input placeholder="Search Your Game" class="form-control" id="ex2" type="text"/>
                    </div>
                </div>

                <div id="mario">
                    <h1 id="bethe">Be the</h1>
                    <h1 id="betheteacher">Teacher!</h1>
                    <img width="493" height="265" src={process.env.PUBLIC_URL + "./assets/images/mario.jpg"} />
                    <button type="button" id="teachersignup" class="btn btn-primary">Sign Up</button>
                    <button type="button" id="teacherlogin" class="btn btn-primary">Log In</button>
                </div>
            </div>

        </div>
    
    </div>

       
      );
    }
}
    export default Home;




    