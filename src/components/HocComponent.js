import React, { Component } from "react";

const HocComponent = (Component, data) =>{
    return class extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
            };
        }
    
        handleClick = () => {
            this.setState({
                count: this.state.count + 1
            });
        };
        render(){
            return(
                <div>
                <Component countNumber={this.state.count } handleClick={this.handleClick}/>
                </div>
            )
        }
    }
}

export default HocComponent;