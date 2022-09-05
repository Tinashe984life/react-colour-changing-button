import React from "react";

const green = 'green';
let i = 0;

const colors = ['red', 'yellow', 'green', 'blue'];

export default class Butt extends React.Component{
    constructor (props){
        super(props);
        this.state = { color: green };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){
        const newColor =  colors[i] //this.state.color === green ? yellow : green; 
        i++;
        if (i > colors.length){
            i = 0;
        }
        this.setState({ color: newColor}) 
    }

    render(){
        return (
            <div>
                <button style={{background: this.state.color}} onClick={this.changeColor}>Click ME</button>
            </div>
        )
    }
    
}

    
