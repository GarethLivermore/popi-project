import React, { Component } from 'react';
import './App.css';
import {subscribeToSensors} from "./subscriberToSensors";
import Header from './components/Header';
import OrderQuantities from './components/SensorParameters';
import CommentBox from './components/NoteBox';
import {Grid, Row, Col, Panel, PanelGroup} from 'react-bootstrap';
import Graph from './components/Graph';


class App extends Component
{
    constructor(props)
    {
        super(props);
        subscribeToSensors((err, sensorData) => this.arrayCheck(err, sensorData));

        this.state = {
            tempVal:[10,20,30,30,31],
            humVal:[30,40,33,22,27],
            luxVal:[20,30,22,77,33]
        };
    }
    arrayCheck= (err,sensorData) => {
      if(err){
        console.log(err.message)
        return;
      }

      let humidity = sensorData.humidity;
      let lux = sensorData.lux;
      let temp = sensorData.temperature;

			let tempList = this.state.tempVal;
			tempList.push(temp);
			if (tempList.length >5) {
					tempList.splice(0,1);
			}
			this.setState({tempVal:tempList});

      let humList = this.state.humVal;
      humList.push(humidity);
      if(humList.length> 5){
        humList.splice(0,1);
      }
      this.setState({humVal: humList});


      let luxList = this.state.luxVal;
      luxList.push(lux);
      if(luxList.light> 5){
        luxList.splice(0,1);
      }
      this.setState({luxVal: luxList});
			console.log(this.state.tempVal);
	  }

    render()
    {
        return (
            <div className="App">
                <Header></Header>
                <Grid>
                    <Row className="grid">
                        <Col xs={16} md={12}>
                          <OrderQuantities header={'Light'} measurement={this.state.tempVal[4]} extension={' lux'}/>

                        </Col>

                    </Row>

                    <Row>
                        <Col xs={16} md={6}>
                          <OrderQuantities header={'Humidity'} measurement={this.state.humVal[4]} extension={' %'}/>
                        </Col>
                        <Col xs={16} md={6}>
                          <OrderQuantities header={'Temperature'} measurement={this.state.luxVal[4]} extension={' °C'}/>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs={2} md={2}>

                      </Col>
                      <Col xs={8} md={8} >
                        <div className="list-group">
                          <PanelGroup>
                            <Panel collapsible header="Temperature Graph">
                              <Graph array={this.state.tempVal} title={"Temperature"}/>
                            </Panel>
                            <Panel collapsible header="Light Graph">
                              <Graph array={this.state.luxVal} title={"Lux"}/>
                            </Panel>
                            <Panel collapsible header="Humidity Graph">
                              <Graph array={this.state.humVal} title={"humidity"}/>
                            </Panel>
                          </PanelGroup>
                        </div>
                      </Col>
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
