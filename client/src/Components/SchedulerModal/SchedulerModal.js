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
      
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} little>
        <Scheduler/>
        </Modal>
      </div>
    );
  }
}