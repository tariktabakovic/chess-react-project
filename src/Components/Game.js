import React from 'react';
import 'src/App.css';
import Board from './Board';
import DeadPieces from './DeadPieces';
import InitialBoard from 'src/InitialBoard.js';

export default class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            squares: InitialBoard(),
            whiteDeadPieces: [],
            blackDeadPieces: [],
            player: 1,
            sourceSelection: -1,
            turn: 'white'
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice();

        if(this.state.sourceSelection === -1){
            if(!squares[i] || squares[i].player !== this.state.player){
                this.setState({status: 'Wrong player, choose another player' + this.state.player + 'pieces'});
                squares[i]? delete squares[i].style.backgroundColor: null;
            }
            else {
                squares[i].style = {...squares[i].style, backgroundColor: '128, 0, 0'};
                this.setState({
                    status: 'Choose a square',
                    sourceSelection: i
                });
            }
        }
        else if(this.state.sourceSelection > -1){
            delete squares [this.state.sourceSelection].style.backgroundColor;
            if(squares[i] && squares[i].player === this.state.player){
                this.setState({
                    status: 'Wrong player, choose another player',
                    sourceSelection: -1
                });
            }
        else {
            const squares = this.state.squares.slice();
            const whiteDeadPieces = this.state.whiteDeadPieces.slice();
            const blackDeadPieces = this.state.blackDeadPieces.slice();
            const isDestEnemyOccupied = squares[i]? true : false;
            const isMovePossible = squares [this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied);
            const srcToDestPath = squares [this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i);
            const isMoveLegal = this.isMoveLegal(srcToDestPath);

            if(isMovePossible && isMoveLegal){
                if(squares[i] !== null){
                    if(squares[i].player ===1){
                        whiteDeadPieces.push(squares[i]);
                    }
                    else{
                        blackDeadPieces.push(squares[i]);
                    }
                }
            }
        }
        }
        
    }
    render() {
        <div>

        </div>
    }
}