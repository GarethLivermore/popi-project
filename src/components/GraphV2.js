import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


class Graph extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    //change this to every 2 hours
    let data = [
          {name: this.props.dataValues.time[0], light: this.props.dataValues.luxVal[0], temperature: this.props.dataValues.tempVal[0], humidity: this.props.dataValues.humVal[0]},
          {name: this.props.dataValues.time[1], light: this.props.dataValues.luxVal[1], temperature: this.props.dataValues.tempVal[1], humidity: this.props.dataValues.humVal[1]},
          {name: this.props.dataValues.time[2], light: this.props.dataValues.luxVal[2], temperature: this.props.dataValues.tempVal[2], humidity: this.props.dataValues.humVal[2]},
          {name: this.props.dataValues.time[3], light: this.props.dataValues.luxVal[3], temperature: this.props.dataValues.tempVal[3], humidity: this.props.dataValues.humVal[3]},
          {name: this.props.dataValues.time[4], light: this.props.dataValues.luxVal[4], temperature: this.props.dataValues.tempVal[4], humidity: this.props.dataValues.humVal[4]},
    ];
    return (
      <LineChart width={900} height={400} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="temperature" stroke="#ff0000" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="light" stroke="#72ea36" />
       <Line type="monotone" dataKey="humidity" stroke="#ea36d9" activeDot={{r: 8}}/>
      </LineChart>
    );
  }
}

export default Graph;
