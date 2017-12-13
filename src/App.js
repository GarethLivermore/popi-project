import React, { Component } from 'react';
import './App.css';
import {subscribeToSensors} from "./subscriberToSensors";
import Header from './components/Header';
import OrderQuantities from './components/SensorParameters';
import CommentBox from './components/NoteBox';
import {Grid, Row, Col, Panel, PanelGroup} from 'react-bootstrap';
import Graph from './components/GraphV2';


class App extends Component
{
    constructor(props)
    {
        super(props);
        subscribeToSensors((err, sensorData) => this.arrayCheck(err, sensorData));

        this.state = {
            tempVal:[10,20,30,30,31],
            humVal:[30,40,33,22,27],
            luxVal:[20,30,22,77,33],
            popiState: {
              popiImage:require('./images/normalPopi.png'),
              visibility: "true"
        }};
        this.changePopiState = this.changePopiState.bind(this);
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
      if(luxList.length> 5){
        luxList.splice(0,1);
      }
      this.setState({luxVal: luxList});
			// console.log(this.state.tempVal);
      // console.log(this.state.luxVal);
      // console.log(this.state.humVal);

      this.imageChanger();
	  }
    imageChanger(){
      console.log("image changer");
      if(this.state.tempVal[4] > 28){
        this.setState({
          popiState:{
            popiImage: require('./images/hotPopi.png')
          }
        })

      }else if(this.state.tempVal[4] < 16){
        this.setState({
          popiState:{
            popiImage: require('./images/coldPopi.png')
          }
        })
      }else if(this.state.humVal[4] > 65){
        this.setState({
          popiState:{
            popiImage: require('./images/wetPopi.png')
          }
        })
      }else{
        this.setState({
          popiState:{
            popiImage: require('./images/normalPopi.png')
          }
        })
      }
    }
    changePopiState(){
      console.log(this.state.popiState);
      if(this.state.popiState.visibility === "true"){
        console.log(this.state.popiState);
        this.setState({
          popiState:{
            visibility: "false"
          }
        }, function() {
          console.log("Successfully updated state");
        })
      }else if(this.state.popiState.visibility === "false"){
        this.setState({
          popiState:{
            visibility: "true"
          }
        })
      } else {
        console.log("Errors");
      }
    }
    render()
    {
        return (
            <div className="App">
              <Header popiState= {this.state.popiState} popiStateChanger={this.changePopiState}></Header>
              <div className="container">

              <div id="meas-cont"><h1 id="meas">measurements</h1></div>
              <Row className="grid" id="measurement-container">
                <Col xs={4} md={4}>
                  <OrderQuantities header={'Light'} measurement={this.state.luxVal[4]} extension={' lux'}/>
                </Col>
                <Col xs={4} md={4}>
                  <OrderQuantities header={'Humidity'} measurement={this.state.humVal[4]} extension={' %'}/>
                </Col>
                <Col xs={4} md={4}>
                  <OrderQuantities header={'Temperature'} measurement={this.state.tempVal[4]} extension={' °C'}/>
                </Col>
              </Row>


              <div id="center">
                  <div className="list-group">
                    <Graph light={this.state.luxVal} temp={this.state.tempVal} humidity={this.state.humVal} id="center"/>
                    {/* <PanelGroup>
                      <Panel collapsible header="Temperature Graph">
                        <Graph array={this.state.tempVal} title={"Temperature"}/>
                      </Panel>
                      <Panel collapsible header="Light Graph">
                        <Graph array={this.state.luxVal} title={"Lux"}/>
                      </Panel>
                      <Panel collapsible header="Humidity Graph">
                        <Graph array={this.state.humVal} title={"humidity"}/>
                      </Panel>
                    </PanelGroup> */}
                  </div>
              </div>
              <CommentBox/>
            </div>

            </div>
        );
    }
  }


export default App;
