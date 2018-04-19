import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import Scheduler from "../Scheduler/Scheduler"
 
export default class SchedulingModal extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        
        <button style={{backgroundColor:"rgba(0,0,0,.7)", border:'0px'}} onClick={this.onOpenModal}> <span id="schedule"><img className="img-responsive calendar" src={process.env.PUBLIC_URL + "/assets/images/calendar-icon.png"} alt="calendar icon" /></span></button>
        <Modal open={open} onClose={this.onCloseModal} little>
        <Scheduler onClose={this.onCloseModal}/>
        </Modal>
      </div>
    );
  }
}