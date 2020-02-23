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
                <div className = 'board-row'>{this.props.whiteDeadPieces.map((ws,index) => this.renderSquare(ws,index))}
                Pieces seized by player 1:
                </div>
                <div className = 'board-row'>{this.props.blackDeadPieces.map((bs, index) => this.renderSquare(bs,index))}
                Pieces seized by player 2:
                </div>
            </div>
        )
    }
}