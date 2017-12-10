import React from 'react';
import {LineChart} from 'react-easy-chart';



class Graph extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.array);
  }
  render(){
    return(
      <LineChart
        axes

        axisLabels={{x: 'Time of the day', y: this.props.title}}
        width={600}
        height={300}
        interpolate={'cardinal'}

        data={[
          [
            { x: '0000', y: this.props.array[0] },
            { x: '0600', y: this.props.array[1] },
            { x: '1200', y: this.props.array[2] },
            { x: '1600', y: this.props.array[3] },
            { x: '2000', y: this.props.array[4] },
          ]
        ]}
      />
    );
  }
}


export default Graph;
