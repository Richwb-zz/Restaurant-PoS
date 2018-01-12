import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { SetSeatModal } from '../Modals/SetSeatModal';
// import tables from './tables.json';


const green = '#59f442';
// const red = '#f44141';

export class MainPage extends React.Component {

    state = {
        seatColor: green,
        modalToggle: false,
    };


    // handleColorChange = event =>{
    //     console.log(event.target);
    //     const colorChange = this.state.seatColor === green ? red : green;
    //     this.setState({seatColor: colorChange});
    // };

    closeModal(e) {
        console.log("working closeModal")
        e.preventDefault();
        this.setState({
            modalToggle: false
        });
    }

    handleTableClick(e) {
        e.preventDefault();
        const modalAction = !this.state.modalToggle;
        // const seatCheck = this.state.isOccupied ? false : true;


        this.setState({
            modalToggle: modalAction
        });

    }




    // handleTableDisplay = (tables) => {
    //      console.log("tables ", Object.entries(tables));
    //     return
    //     (
    //         Object.entries(tables).map(table =>

    //             {
    //                 <a key={table.name} onClick={this.handleTableClick.bind(this)}
    //                     isOccupied={table.isOccupied} modalOpen={true}
    //                 >
    //                     <Button style={{ background: this.state.seatColor }}>
    //                         {this.props.tables}
    //                     </Button>
    //                 </a>
    //             })

    //     )
    // }

    render() {

        const tables = Object.entries(this.props.tables);
 console.log("tables ", tables);
        const tableDisplay = tables.map(table => (
            <a key={table.name} onClick={this.handleTableClick.bind(this)}
            isOccupied={table.isOccupied} modalOpen={true}
            >
                <Button style={{background: this.state.seatColor}}>
                    {table[0]}
                </Button>
            </a>
        ))

        return (

            <div>
                <div className='show-grid'>
                    {this.state.modalToggle
                        ?
                        <SetSeatModal CloseModal={this.closeModal.bind(this)} />
                        :
                        ""}
                    <Col md={6} lg={8} mdOffset={2}>
                        {tableDisplay}
                        {/* {this.handleTableDisplay(this.props.tables)} */}
                    </Col>
                </div>
            </div>
        );
    }
}
export default MainPage;

        