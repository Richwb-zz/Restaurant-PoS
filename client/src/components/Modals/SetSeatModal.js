import React from 'react';
// import PropTypes from 'prop-types';
import { Servers } from './Servers';
import { Button } from 'react-bootstrap';
import { Buttons, ConfirmSeats, CloseModal, CancelButton } from '../Buttons';
import { TableButtons } from '../Table/Table';



export class SetSeatModal extends React.Component {

  handleModalClose(e) {
    e.preventDefault();
    // this.modalToggle;
    {console.log("working")}
  }


  render() {

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div style={backdropStyle} id='modalDiv'>
        <div style={modalStyle}>
          {/* {this.props.children} */}

          <div>
            {/* <button onClick={this.handleModalClose.bind(this)}isOccupied={true}
            >Cancel</button> */}
            <CloseModal CloseModal={this.props.CloseModal}/>
            <div>Server <span><Servers key={this.props.server}/></span></div>
            <div>Number of Guests <span><input type="text" /></span></div>
            <ConfirmSeats />
          </div>
        </div>
      </div>
    );
  }
}

// SetSeatModal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   show: PropTypes.bool,
//   children: PropTypes.node
// };
// export default SetSeatModal;