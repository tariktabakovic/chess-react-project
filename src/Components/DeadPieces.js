import React from 'react';
import '/Users/tariktabakovic/chess-react-project/src/App.css';
import Square from './Square';

export default class DeadPieces extends React.Component {
    renderSquare (square, i, squareShade){
        return <Square 
        piece={square}
        style= {square.style}
        />
    }
    render(){
        return(
            <div>
                <p>Pieces seized by player 2:</p>
                <div className = 'board-row'>{this.props.whiteDeadPieces.map((ws,index) => this.renderSquare(ws,index))}
                </div>
                <p>Pieces seized by player 1:</p>
                <div className = 'board-row'>{this.props.blackDeadPieces.map((bs, index) => this.renderSquare(bs,index))}
                </div>
            </div>
        )
    }
}