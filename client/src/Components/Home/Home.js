import React, { Component } from "react";
import Nav from "../Nav"
import Search from "../SearchBar/Search"
import TwitchStream from "../TwitchStream"
import API from "../../utils/API"
import User from "../../Components/UserInfo"
import TopGames from "../../Components/TopGames"

class Home extends Component {

    state = {
        targetID: 'twitch-embed',
        width: '940',
        height: '480',
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
            this.setState({  channel: res.data.streams[0].channel.display_name , searched: 0   });
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
      <Nav/>
       <Search name="twitchSearch" changeOnInput={this.handleInputChange} handleSubmit={this.handleSubmitForm}/>
       Home
       
       {
        (this.state.channel) 
        ? <TwitchStream {...this.state} />
        : <p>There are no results :( </p>
        }
        <User/>
        <TopGames TopGames={this.state.TopGames}/>
        
       </div>
       
      );
    }
}
    export default Home;




    