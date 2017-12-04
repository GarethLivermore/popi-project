import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h2 className="display-3">Living with Popi</h2>
                </Jumbotron>
            </div>
        );
    }
}
export default Header;