import React from 'react';
import '/Users/tariktabakovic/chess-react-project/src/App.css';

export default function Square(props){
    return (
        <button className = {'square ' + props.shade}
        onClick = {props.onClick}
        style = {props.style}>
        </button>
    );
}


