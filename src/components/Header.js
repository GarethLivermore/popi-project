import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';

class Header extends Component {
  constructor(props){
    super(props);
    this.changePopiState = this.changePopiState.bind(this);
    }

    changePopiState = (e) => {
      console.log("Popi");
      this.props.popiStateChanger();
    }

    render() {
        return (
            <div>
                <Jumbotron>
                  <Row className="grid">
                    <Col xs={4} md={4}>
                    </Col>
                    <Col xs={4} md={4}>
                      <h2 className="display-3">Living with Popi</h2>
                    </Col>
                    <Col xs={2} md={4}>
                      <img id="popiImage" src={this.props.popiState.popiImage} height="120"/>
                      <Button onClick={this.changePopiState}>Turn off popi</Button>
                    </Col>
                  </Row>
                </Jumbotron>
            </div>
        );
    }
}
export default Header;
