import React, { Component } from 'react'
import "./Square.css";

export default class Square_class extends Component {
    render() {
        
        return (
            <div>
                <button
                className= "square" 
                onClick={props.onClick}
                >
                {props.value}
                </button>   
            </div>
        )
    }
}
