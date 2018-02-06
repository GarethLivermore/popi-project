import React, { Component } from 'react';
import './App.css';
import {subscribeToSensors} from "./subscriberToSensors";
import Header from './components/Header';
import OrderQuantities from './components/SensorParameters';
import CommentBox from './components/NoteBox';
import {Grid, Row, Col, Panel, PanelGroup} from 'react-bootstrap';
import Graph from './components/GraphV2';
import TipViewer from './components/tipViewer';

class App extends Component
{
    constructor(props)
    {
        super(props);
        subscribeToSensors((err, sensorData) => this.arrayCheck(err, sensorData));

        this.state = {
            popiState: {
              popiImage:require('./images/normalPopi.png'),
              visibility: "true"
            },
            dataValues:{
              tempVal:[10,20,30,30,14],
              humVal:[30,40,33,22,33],
              luxVal:[20,30,22,77,33],
              time:["12am","6am", "12pm", "6pm", "10pm"]
            }
      };
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

			let tempList = this.state.dataValues.tempVal;
			tempList.push(temp);
			if (tempList.length >5) {
          console.log("Worked")
					tempList.splice(0,1);
			}
			// this.setState({tempVal:tempList});

      let humList = this.state.dataValues.humVal;
      humList.push(humidity);
      if(humList.length> 5){
        humList.splice(0,1);
      }
      // this.setState({humVal: humList});


      let luxList = this.state.dataValues.luxVal;
      luxList.push(lux);
      if(luxList.length> 5){
        luxList.splice(0,1);
      }
      let time = this.state.dataValues.time;
      let oldtime = this.state.dataValues.time[0];
      time.push(oldtime);
      if(time.length > 5){
        time.splice(0,1);
      }
      this.setState({
        dataValues:{
          tempVal:tempList,
          humVal: humList,
          luxVal:luxList,
          time:time
        }
      })
      console.log(this.state.dataValues);
      // this.setState({luxVal: luxList});
			// console.log(this.state.tempVal);
      // console.log(this.state.luxVal);
      // console.log(this.state.humVal);

      this.imageChanger();
	  }
    imageChanger(){
      console.log("image changer");
      if(this.state.dataValues.tempVal[4] > 28){
        this.setState({
          popiState:{
            popiImage: require('./images/hotPopi.png')
          }
        })

      }else if(this.state.dataValues.tempVal[4] < 16){
        this.setState({
          popiState:{
            popiImage: require('./images/coldPopi.png')
          }
        })
      }else if(this.state.dataValues.humVal[4] > 65){
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

              <Row className="show-grid" id="measurement-container">
                <div id="meas-cont"><h1 id="meas">Measurements</h1></div>

                <Col xs={4} md={4}>
                  <OrderQuantities header={'Light'} measurement={this.state.dataValues.luxVal[4]} extension={' lux'}/>
                </Col>
                <Col xs={4} md={4}>
                  <OrderQuantities header={'Humidity'} measurement={this.state.dataValues.humVal[4]} extension={' %'}/>
                </Col>
                <Col xs={4} md={4}>
                  <OrderQuantities header={'Temperature'} measurement={this.state.dataValues.tempVal[4]} extension={' °C'}/>
                </Col>
                <TipViewer dataValues={this.state.dataValues}/>

              </Row>


              <div id="center">
                  <div className="list-group">
                    <Graph dataValues={this.state.dataValues} id="center"/>
                  </div>
              </div>
              <CommentBox/>
            </div>

            </div>
        );
    }
  }


export default App;
