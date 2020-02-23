import Piece from './PieceClass';
import SYMBOLS from './PieceConstants';

export default class Knight extends Piece {
    constructor(player){
        super(player, (player === 1? '\u2658' : '\u265D'));

    
    }
}