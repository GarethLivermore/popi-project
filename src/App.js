import React, { Component } from 'react';
import './App.css';
import {subscribeToSensors} from "./subscriberToSensors";
import Header from './components/Header';
import OrderQuantities from './components/SensorParameters';
import CommentBox from './components/NoteBox';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component
{
    constructor(props)
    {
        super(props);
        subscribeToSensors((err, sensorData) => this.setState({
            humidity: sensorData.humidity,
            lux: sensorData.lux,
            temperature: sensorData.temperature
        }));

        this.state = {
            humidity: 'No reading',
            lux: 'No reading',
            temperature: 'No reading'
        };
    }

    render()
    {
        return (
            <div className="App">
                <Header></Header>
                <Grid>
                    <Row className="grid">
                        <Col xs={16} md={12}><OrderQuantities header={'Light'} measurement={this.state.lux} extension={' lux'}/></Col>
                    </Row>
                    <Row>
                        <Col xs={16} md={6}><OrderQuantities header={'Humidity'} measurement={this.state.humidity} extension={' %'}/></Col>
                        <Col xs={16} md={6}><OrderQuantities header={'Temperature'} measurement={this.state.temperature} extension={' °C'}/></Col>
                    </Row>
                    <Row className="grid">
                        <CommentBox/>
                    </Row>
                </Grid>
            </div>
        );
    }
  }


export default App;
