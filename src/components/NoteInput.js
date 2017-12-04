import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Button, Form, FormControl, InputGroup, FormGroup} from 'react-bootstrap'

import {sendComment} from "../subsciberToNotes";

export default class NoteInput extends React.Component {
    constructor(props){
        super(props)
        this.submitMessage = this.submitMessage.bind(this);
        this.state = {
            valid: null,
            buttonStyle: 'info'
        }
    }

    submitMessage(event){
        event.preventDefault();
        let msg = event.target.inputMessage.value;
        if(msg.length > 1){
            console.log(msg);
            sendComment(msg);
            event.target.inputMessage.value = "";
            this.setState({
                buttonStyle: "info",
                valid: 'success'
            })
        }else{
            this.setState({
                valid: 'error',
                buttonStyle: "danger"
            })
        }
    }

    render(){
        return(
            <div>
                <Form inline onSubmit={this.submitMessage} autoComplete="off">
                    <FormGroup validationState={this.state.valid}>
                        <InputGroup>
                            <FormControl type="text" name="inputMessage"/>
                            <InputGroup.Button><Button type="submit" bsStyle={this.state.buttonStyle}>Post</Button></InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}