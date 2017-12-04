import * as React from "react";

export default class Note extends React.Component {
    render(){
        return(
            <div>
                <p style={{textDecorationColor: 'Blue'}}>{this.props.time} {this.props.comment}</p>
            </div>
        )
    }
}