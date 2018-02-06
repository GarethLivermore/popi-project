import React from 'react';
import {Popover, Tooltip, Button, Modal, OverlayTrigger} from 'react-bootstrap';

class TipViewer extends React.Component{
  constructor(props){
    super(props);
    this.setState({showModal: false});
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.dynamicTips = this.dynamicTips.bind(this);
  }
  state = {
    showModal: false
  };
  getInitialState() {
    return { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  dynamicTips(){

  }
  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        Check your tips for the current readings!
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow look at these tips
      </Tooltip>
    );
    let tipContent;
    if(this.props.dataValues.humVal[4] > 64){
       tipContent = (
         <div>
           <h3>
             1. Ventilate your room
           </h3>
           <p>
             keep your home ventilated, especially in areas that usually create moisture such as your kitchen and the bathroom.
           </p>
           <h3>
             2. Line dry clothes outdoors
           </h3>
           <p>
             Hanging wet clothes indoors will increase indoor humidity levels, especially in rooms where ventilation is bad. The best option to reduce indoor humidity is to hang clothes to dry outdoors.
           </p>
           <h3>
             3. Crack a window open
           </h3>
           <p>
             The easiest trick to reduce indoor humidity is to crack a window open!
           </p>
         </div>
    )
  }else if(this.props.dataValues.tempVal[4] > 27){
    tipContent = (
      <div>
        <h3>1. Turn off your heating</h3>
        <p>Leaving your heating on for execsive amounts of tine could cause you higher bills than needed</p>
        <h3>2. Just had a shower?</h3>
        <p>Try turning your shower down this will also reduce the humidity of the room aswell</p>
        <h3>3. Crack a window open</h3>
        <p>An easy trick to reducing the t emperature inside</p>
      </div>
    )
  }else if(this.props.dataValues.tempVal[4] < 17){
    tipContent = (
      <div>
        <h3>
          Where does the heat escape from your house?
        </h3>
        <li>
          through the roof
        </li>
        <li>
          through windows
        </li>
        <li>
          through gaps around the door

        </li>
        <li>
          through the walls
        </li>
        <li>
          through the floor
        </li>
        <h3>
          1. Ensure no windows or doors are left open
        </h3>
        <p>
          Leaving windows and doors open leaks out warm air from your house.
        </p>
        <h3>
          2. Cover any gaps around doors
        </h3>
        <p>
          If you can feel cold air coming in from under your doors try covering them up.
        </p>
    </div>

    )
  }else{
     tipContent = (
       <div>
         <h3>Drying alot of clothes inside?</h3>
         <p>Then dont forget to open your windows to ensure the moisture leaves</p>
         <h3>Feeling a cold draft?</h3>
         <p>Check if you can block without causing any harm or phone your landlord</p>
         <h3>Heating on and windows open?</h3>
         <p>Dont forget to turn off your heating when or close your windows when not needed</p>
       </div>

   )
  }



    return (
      <div>
        <p>Click to view your suggested tips</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          View suggested tips
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Housing tips!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {tipContent}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default TipViewer;
