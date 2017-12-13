import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


class Graph extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    //change this to every 2 hours
    let data = [
          {name: '12am', light: this.props.light[0], temperature: this.props.temp[0], humidity: this.props.humidity[0]},
          {name: '6am', light: this.props.light[1], temperature: this.props.temp[1], humidity: this.props.humidity[1]},
          {name: '12pm', light: this.props.light[2], temperature: this.props.temp[2], humidity: this.props.humidity[2]},
          {name: '6pm', light: this.props.light[3], temperature: this.props.temp[3], humidity: this.props.humidity[3]},
          {name: '10pm', light: this.props.light[4], temperature: this.props.temp[4], humidity: this.props.humidity[4]},
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
