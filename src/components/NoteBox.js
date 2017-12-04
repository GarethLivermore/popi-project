import * as React from "react";
import {subscribeToComments} from "../subsciberToNotes";
import Comment from "./Note"
import CommentInput from "./NoteInput"
import {Grid, Row, Col} from 'react-bootstrap'
export default class NoteBox extends React.Component {
    constructor(props){
        super(props);
        subscribeToComments((err, data) => this.setState({
        comments: data
        }));
        this.state = {
            comments: []
        }
    }
    render(){
        return(
            <div>
                <h3>Notes</h3>
                <Grid style={{width: "50%"}}>
                {this.state.comments.map((note, i)=>{
                    return  <Row className="show-grid"><Col xs={8} md={6}><Comment comment={note.message} time={note.time} key={i} index={i}/></Col></Row>
                })}
                </Grid>
                <CommentInput/>
            </div>
        )
    }
}