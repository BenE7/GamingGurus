import React, { Component } from "react";
import Nav from "../Nav"
import Search from "../SearchBar/Search"
import TwitchStream from "../TwitchStream"
import API from "../../utils/API"

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
          [name] : value
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
      
      
      


// componentDidMount() {
//   API.search('Starcraft')
//         .then(res => { 
//             console.log(res)
//             console.log(res.data)
//             this.setState({  channel: res.data.streams[0].channel.display_name });
     
//         })  
//     }

render() {
   return (
      <div>
      <Nav/>
       <Search name="twitchSearch"  changeOnInput={this.handleInputChange} handleSubmit={this.handleSubmitForm}/>
       Home
       
       {
        (this.state.channel) 
        ? <TwitchStream {...this.state} />
        : <p>There are no results :( </p>
        }


       </div>
       
      );
    }
}
    export default Home;




    

