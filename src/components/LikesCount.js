import React, { Component } from 'react'
import HocComponent from './HocComponent';

class LikesCount extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.countNumber}</h1> <br />
                <button onClick={this.props.handleClick}>Click To Like</button>
            </div>
        );
    }
}


const EnhancedLikes = HocComponent(LikesCount)
export default EnhancedLikes;