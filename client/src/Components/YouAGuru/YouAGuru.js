import React, { Component } from "react";
import CheckboxOrRadioGroup from "../CheckboxOrRadioGroup/CheckboxOrRadioGroup";
import "./YouAGuru.css";
import history from "../../history";

class YouAGuru extends Component {
  constructor(props) {
		super(props);
		this.state = {
			typeOfUser: ""
		};
		this.handleGuruSelect = this.handleGuruSelect.bind(this);
	}
	componentDidMount() {
		fetch('./fake_db.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					typeOfUser: ''
				});
			});
	}
    
  handleGuruSelect(e) {
		this.setState({ typeOfUser: e.target.value }, () => console.log('type of user ', this.state.typeOfUser));
	
		const formPayload = {
			typeOfUser: this.state.typeOfUser
		};

    setTimeout(function(){history.push('/infoform')}, 500);
  }
  
  
  render() {
    return (
      <div style={{background: "#000000 url(" + process.env.PUBLIC_URL + '/assets/images/logo.gif' + ") top center / 25% 50% no-repeat", minHeight : "650px"}}>
      <form style={{fontFamily:"Press Start 2P", fontSize: "20px", padding: "10px",textAlign: "center", position: "absolute", height: "40%", width:"30%", top:"66%", left:"50%", transform: "translate(-50%, -50%)"}} className="container" onSubmit={this.handleFormSubmit}>
        <h4>What role would you like to create an account for?</h4>
        <CheckboxOrRadioGroup
          className="you-a-guru"
          title={''}
          setName={'usertype'}
          type={'radio'}
          controlFunc={this.handleGuruSelect}
          options={["Be a Guru 👨‍🏫", "Level Up 👨‍🎓"]}
          selectedOptions={[]} />
      </form>
      </div>
    )
  }
}

export default YouAGuru;