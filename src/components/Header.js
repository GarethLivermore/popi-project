import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';

class Header extends Component {
  constructor(props){
    super(props);

    }

    render() {
      const colour = {
        color: '#337ab7'
      }
        return (
            <div className="header" >
              <div className="page-header" id="headerJumbo">

                {/* <Jumbotron> */}
                  <Row className="grid">
                    <Col xs={4} md={4}>
                    </Col>
                    <Col xs={4} md={4}>
                      <h1 className="display-3" style={colour}>Living with Popi</h1>
                    </Col>
                    <Col xs={2} md={4}>
                      <img id="popiImage" src={this.props.popiState.popiImage} height="120"/>
                    </Col>
                  </Row>
                {/* </Jumbotron> */}
              </div>

            </div>
        );
    }
}
export default Header;
