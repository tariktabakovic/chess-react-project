import Piece from './PieceClass';  
import SYMBOLS from './PieceConstants';

export default class Rook extends Piece {
    constructor(player){
        super (player, (player === 1? '\u2656' : '\u265E'));
    }
    
}