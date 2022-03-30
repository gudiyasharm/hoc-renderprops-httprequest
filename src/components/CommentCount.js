import React, { Component } from 'react'
import HocComponent from './HocComponent';

class CommentCount extends Component {
    
    render() {
        return (
            <div>
                <h1>{this.props.countNumber}</h1> <br />
                Add Comment: <button onClick={this.props.handleClick}>Add Comment</button>
            </div>
        )
    }
}

const EnhancedComment = HocComponent(CommentCount)
export default EnhancedComment;