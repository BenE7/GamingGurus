import React, { Component } from "react";
import Nav from "../Nav"
import Search from "../SearchBar/Search"
import TwitchStream from "../TwitchStream"
import API from "../../utils/API"
import User from "../../Components/UserInfo"
import TopGames from "../TopGames"
import "./Home.css";


class Home extends Component {

    state = {
        targetID: 'twitch-embed',
        width: '940',
        height: '480',
        layout: '',
        channel: '',
        twitchSearch : '',
        searched : 0,
        gameBool : false,
        TopGames : []
             
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
        // When the form is submitted, prevent its default behavior
        event.preventDefault();
        API.search(this.state.twitchSearch)
       

        .then(res => { 
            console.log(res)
            console.log(res.data)
            this.setState(function(prevState, currentProps) {
              return {
                 channel: res.data
              };
            });
       // this.handleVid()
       
        })  

        
    
    
          
          .catch(err => console.log(err));
      };
      
      
      dothing = (event) => {

         // event.preventDefault();
          API.searchTop()
         
  
          .then(res => { 
              console.log(res)
              console.log(res.data.top)
              this.setState({ TopGames : res.data.top  });
             
         // this.handleVid()
          })  
      
      
            
            .catch(err => console.log(err));
        };
        

        boxArtVideo = (event) => {
          console.log(event.target.name)
          API.search(event.target.name)

          .then(res => { 
            console.log(res)
            console.log(res.data)
            this.setState({  channel: res.data.streams[0].channel.display_name , layout:'video', searched: 0,  width: '235',
            height: '120'  });
       // this.handleVid()
       
        })  

        }
        
 componentDidMount() {
    this.dothing()
    console.log('saveUser')
    API.saveUser({
      twitchToken: Math.floor(Math.random() * 100000000000000 + 1)
     
    })
    }

render() {
  console.log(this.state.TopGames)
   return (


      <div>
  <div id="home">
       

        <h1 id="mainhead">Genuine Game Gurus</h1>
        <h1 id="mainlogo"><img height="200" width="250" src={process.env.PUBLIC_URL + "./assets/images/logo2.png"}/></h1>
        <div id="wrapper" className="container" >
            <div  className="row">
            <div className="col s12">
            <div className="col s6" >
                    <h1 id="bethe">Be the</h1>
                    <h1 id="betheteacher">Teacher!</h1>
                    <img id="mario" width="495" height="265" src={process.env.PUBLIC_URL + "./assets/images/mario.jpg"} />
                    <div id="buttonsdiv">
                    </div>
                </div>

                <div className="col s6" >
                    <h1 id="betheg">Be the</h1>
                    <h1 id="bethegamer">Gamer!</h1>
<<<<<<< HEAD
                    <img width="485" height="265" src={process.env.PUBLIC_URL + "./assets/images/horizon.jpeg"} />
                    <div id="inputbox" className="col-xs-3">
                    <Search name="twitchSearch" changeOnInput={this.handleInputChange} handleSubmit={this.handleSubmitForm}/>
                    </div>
                </div>

                <div id="mario">
                    <h1 id="bethe">Be the</h1>
                    <h1 id="betheteacher">Teacher!</h1>
                    <img width="493" height="265" src={process.env.PUBLIC_URL + "./assets/images/mario.jpg"} />
                    <button type="button" id="teachersignup" className="btn btn-primary">Sign Up</button>
                    <button type="button" id="teacherlogin" className="btn btn-primary">Log In</button>
                </div>

=======
                    <img id="games"  width="489" height="265" src={process.env.PUBLIC_URL + "./assets/images/horizon.jpeg"} />
                    <div id="inputbox" class="col-xs-3">
                    <Search id="search" name="twitchSearch" changeOnInput={this.handleInputChange} handleSubmit={this.handleSubmitForm}/>
                    </div>
                </div>
            </div>
                
            </div>
>>>>>>> master
                {
                  (this.state.channel) 
                  ? <TwitchStream {...this.state} />
                  : <p>There are no results :( </p>
                  }
<<<<<<< HEAD
                <TopGames boxArtVideo={this.boxArtVideo} TopGames={this.state.TopGames}/>
            </div>
=======
                <TopGames TopGames={this.state.TopGames}/>
            
>>>>>>> master

        </div>
    
    </div>
    </div>

       
      );
    }
}
    export default Home;




    