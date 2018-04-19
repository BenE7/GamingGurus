import React, { Component } from "react";
import SingleInput from "../SingleInput/SingleInput";
import TextArea from "../TextArea/TextArea";
import CheckboxOrRadioGroup from "../CheckboxOrRadioGroup/CheckboxOrRadioGroup";
import API from "../../utils/API";
import history from "../../history";
import "./GamerForm.css";

class GamerForm extends Component {
  constructor(props) {
		super(props);
		this.state = {
      username: this.props.location.state.username,
      guru: this.props.location.state.guru,
      picture: this.props.location.state.picture,
      xbox: '',
      ps: '',
      steam: '',
      selectedGames: [],
      gameSelections: ["Rocket League", "Player Unknown's Battle Grounds", "Fortnite", "DOTA 2", "Counter Strike Global Offensive"],
      achieve1: '',
      achieve2: '',
      achieve3: '',
      bio:'',
      rate:''
    };
    
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleXboxChange = this.handleXboxChange.bind(this);
    this.handlePSChange = this.handlePSChange.bind(this);
    this.handleSteamChange = this.handleSteamChange.bind(this);
    this.handleAchieve1Change = this.handleAchieve1Change.bind(this);
    this.handleAchieve2Change = this.handleAchieve2Change.bind(this);
    this.handleAchieve3Change = this.handleAchieve3Change.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleGameSelection = this.handleGameSelection.bind(this);
    this.handleBioChange= this.handleBioChange.bind(this);
  }
  
  componentDidMount() {
    console.log("twitch", this.state.username)
    console.log("guru", this.state.guru)
    API.findUser(this.state.username);
  }

	handleXboxChange(e) {
		this.setState({ xbox: e.target.value }, () => console.log('xbox:', this.state.xbox));
  }
  
  handlePSChange(e) {
		this.setState({ ps: e.target.value }, () => console.log('ps:', this.state.ps));
  }
  
  handleSteamChange(e) {
		this.setState({ steam: e.target.value }, () => console.log('steam:', this.state.steam));
  }
  
  handleAchieve1Change(e) {
		this.setState({ achieve1: e.target.value }, () => console.log('achieve1:', this.state.achieve1));
  }
  
  handleAchieve2Change(e) {
		this.setState({ achieve2: e.target.value }, () => console.log('achieve2:', this.state.achieve2));
  }
  
  handleAchieve3Change(e) {
		this.setState({ achieve3: e.target.value }, () => console.log('achieve3:', this.state.achieve3));
  }
  
  handleRateChange(e) {
    this.setState({ rate: e.target.value }, () => console.log('rate:', this.state.rate));
  }

	handleGameSelection(e) {
    console.log(e)
		const newSelection = e.target.value;
		let newSelectionArray;
		if(this.state.selectedGames.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.selectedGames.filter(s => s !== newSelection)
		} else {
      newSelectionArray = [...this.state.selectedGames, newSelection];
      
		}
		this.setState({ selectedGames: newSelectionArray }, () => console.log('game selection', this.state.selectedGames));
	}
	
	handleBioChange(e) {
		const textArray = e.target.value.split('').filter(x => x !== 'e');
		console.log('string split into array of letters',textArray);
		const filteredText = textArray.join('');
		this.setState({ bio: filteredText }, () => console.log('description', this.state.bio));
		this.setState({ bio: e.target.value }, () => console.log('description', this.state.bio));
  }
  
	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			xbox: '',
      ps: '',
      steam: '',
      selectedGames: [],
      achieve1: '',
      achieve2: '',
      achieve3: '',
      bio: '',
      rate: ''
		});
  }
  
	handleFormSubmit(e) {
		e.preventDefault();

		const formPayload = {
      username: this.state.username,
      picture: this.state.picture,
      guru: this.state.guru,
			xbox: this.state.xbox || "",
      ps: this.state.ps || "",
      steam: this.state.steam || "",
      selectedGames: this.state.selectedGames || "",
      achieve1: this.state.achieve1 || "",
      achieve2: this.state.achieve2 || "",
      achieve3: this.state.achieve3 || "",
      bio: this.state.bio || "",
      rate: this.state.rate || ""
    };

    API.saveUser(formPayload)
    .then(() => {
      history.push({
        pathname: "/teacher",
        state: { username: this.state.username }
      })
    })
  }
  render(username) {
    return (
      <div style={{background: "#000000 url(" + process.env.PUBLIC_URL + "/assets/images/logo.gif) top center / 25% 50% no-repeat", minHeight : "680px"}}>
        <form id="gamer" style={{fontFamily:"Press Start 2P", fontSize:"20px", padding: "10px",textAlign: "center", position: "absolute", height: "100%", width:"90%", top:"50%", left:"50%", transform: "translate(-50%, -50%)"}} className="container" onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="game-form col s4">
              <h6>Answer truthfully to ensure smooth transactions!</h6>
              <SingleInput
                inputType={'text'}
                title={'Xbox Gamertag'}
                name={'xbox'}
                controlFunc={this.handleXboxChange}
                content={this.state.xbox}
                placeholder={"(Optional)"} />
              <SingleInput
                inputType={'text'}
                title={'PS Gamertag'}
                name={'ps'}
                controlFunc={this.handlePSChange}
                content={this.state.ps}
                placeholder={"(Optional)"} />
              <SingleInput
                inputType={'text'}
                title={'Steam Gamertag'}
                name={'steam'}
                controlFunc={this.handleSteamChange}
                content={this.state.steam}
                placeholder={"(Optional)"} />
              <CheckboxOrRadioGroup
                title={'Which games are you most interested in?'}
                setName={'selectedGames'}
                type={'checkbox'}
                controlFunc={this.handleGameSelection}
                options={this.state.gameSelections}
                selectedOptions={this.state.selectedGames} />
              {/* <div id="game-div">
              {this.state.selectedGames[0] && <span>{this.state.selectedGames[0]}</span>}
              {this.state.selectedGames[1] && <span>{this.state.selectedGames[1]}</span>}
              {this.state.selectedGames[2] && <span>{this.state.selectedGames[2]}</span>}
              {this.state.selectedGames[3] && <span>{this.state.selectedGames[3]}</span>}
              {this.state.selectedGames[4] && <span>{this.state.selectedGames[4]}</span>}
              </div> */}
            </div>
            <div className="game-form col s4 offset-s4">
              <h6>Share 1-3 of your top video game achievements!</h6>
              <SingleInput
                inputType={'text'}
                title={'Number 1'}
                name={'achieve1'}
                controlFunc={this.handleAchieve1Change}
                content={this.state.achieve1}
                placeholder={'(Optional)'} />
              <SingleInput
                inputType={'text'}
                title={'Number 2'}
                name={'achieve2'}
                controlFunc={this.handleAchieve2Change}
                content={this.state.achieve2}
                placeholder={'(Optional)'} />
              <SingleInput
                inputType={'text'}
                title={'Number 3'}
                name={'achieve3'}
                controlFunc={this.handleAchieve3Change}
                content={this.state.achieve3}
                placeholder={'(Optional)'} />  
              <TextArea 
                title={"Describe yourself briefly"}
                rows={54}
                content={this.state.bio}
                name={'bio'}
                controlFunc={this.handleBioChange}
                placeholder={''} />
            </div>
            {this.state.guru===true &&
            <div className="rate-schedule">
              <SingleInput
                inputType={'number'}
                title={'Hourly rate'}
                name={'rate'}
                controlFunc={this.handleRateChange}
                content={this.state.rate}
                placeholder={'$'} />
            </div>}
            {this.state.guru===true &&
            <div> 
              <span id="schedule2"><img className="img-responsive calendar" alt="calendar" src={process.env.PUBLIC_URL + "/assets/images/calendar-icon.png"} /></span>
            </div>
            }
            <div className="button-div">
              <input
                type="submit"
                className="btn btn-primary float-right"
              value="Submit"/>
              <button
                className="btn btn-link float-left"
                onClick={this.handleClearForm}>Clear form
              </button> 
            </div>
          </div>
        </form>
      </div>      
    )
  }
}

export default GamerForm;