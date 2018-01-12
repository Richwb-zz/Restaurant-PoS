import React from 'react';
import { Button } from 'react-bootstrap';
import { Buttons, PlaceOrder, PrintCheck, Checkout, CloseModal, CancelButton } from '../Buttons';

export class SeatManager extends React.Component {

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
            {<CloseModal />}
            <div>Server <span>Server from table</span></div>
            <div>Number of Guests <span># of guests from table</span></div>
            {<Checkout/>}
            {<PlaceOrder/>}
            {/* {<PrintCheck/>} */}
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


// export class SeatManager extends React.Component {
//     render() {
//         return(

//         )
//     }
// }