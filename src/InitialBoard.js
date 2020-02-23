import Pawn from './Pieces/Pawn';
import Knight from './Pieces/Knight';
import Bishop from './Pieces/Bishop';
import Rook from './Pieces/Rook';
import Queen from './Pieces/Queen';
import King from './Pieces/King';

export default function initialBoard(){
    const squares = Array(64).fill(null);
    for(let i = 8; i < 16; i++){
        squares[i] = new Pawn(2);
        squares[i+40] = new Pawn(1);
    }
    squares [0] = new Rook (2);
    squares [7] = new Rook (2);
    squares [56] = new Rook(1);
    squares [63] = new Rook (1);
}