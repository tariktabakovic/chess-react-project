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
                    console.log('white dead pieces', whiteDeadPieces);
                    console.log('black dead pieces', blackDeadPieces);
                    squares[i]= squares[this.state.sourceSelection];
                    squares[this.state.sourceSelection] = null;
                    let player = this.state.player === 1? 2: 1;
                    let turn = this.state.turn === 'white'? 'black' : 'white';
                    this.setState({
                        sourceSelection: -1, 
                        squares: squares,
                        whiteDeadPieces: whiteDeadPieces,
                        blackDeadPieces: blackDeadPieces,
                        player: player,
                        status: '',
                        turn: turn
                    });
                }
                else{
                    this.setState({
                        status: 'Wrong selection.',
                        sourceSelection: -1
                    });
                }
            }
        }
    }

    isMoveLegal(srcToDestPath){
        let isLegal = true; 
        for(let i = 0; i < srcToDestPath.length; i++){
            if(this.state.squares[srcToDestPath[i]] !== null){
                isLegal = false;
            }
        }
        return isLegal;
    }
        
    }
    render() {
        <div>
            <div className = 'game'>
                <div className = 'game-board'>
                    <Board squares= {this.state.squares}
                    onClick = {(i) => this.handleClick(i)}
                    />
                </div>
                <div className = 'game-info'>
                    <h3>Turn</h3>
                    <div id = 'player-turn-box' style = {{backgroundColor: this.state.turn}}>
                </div>
                <div className = 'game-status'>{this.state.status}</div>
                <div className = 'dead-pieces'>
                    {<whiteDeadPieces
                    whiteDeadPieces = {this.state.whiteDeadPieces}
                    blackDeadPieces = {this.state.blackDeadPieces}
                    />
                    }
                </div>
                </div>
            </div>
        </div>
    }
}
