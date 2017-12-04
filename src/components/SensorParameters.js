import * as React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Button} from 'react-bootstrap'

export default class SensorParameters extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            limit: 1000,
            show: 'yes',
            style: {display: 'block'}
        };
        this.buttonClick = this.buttonClick.bind(this);
        this.changeLimit = this.changeLimit.bind(this);
    }

    changeLimit(event) {
        let value = event.target.value;
        console.log('value is ' + value);
        this.setState({
            limit: value
        });
    }

    buttonClick(){
        console.log("show state " + this.state.show);
        if (this.state.show === 'yes') {
                this.setState({
                    show: 'no',
                    style: {display: 'none',
                    }
                });
            return
        }
        if (this.state.show === 'no'){
            this.setState( prev =>({
                show: 'yes',
                style: {display: 'block',
                }
            }));
        }
    }

    render(){
        let show = this.state.show;
        let limit = this.state.limit;
        let style = {
            color: limit < this.props.measurement ? 'red' : 'skyblue',
        };
        return (
            <div >
                <h1 style={style} >{this.props.header}</h1>
                    <p>{this.props.measurement}{this.props.extension}</p>
                <div style={this.state.style}>

                    Alert when level exceeds: <br></br><input type='text' onBlur={this.changeLimit}/>
                </div>
                <Button bsStyle="info" onClick={this.buttonClick} style={{marginTop: 10}}>{show === 'yes' ? 'Hide' : 'View Tips'}</Button>
            </div>
        )
    }
}