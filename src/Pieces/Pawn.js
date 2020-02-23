import Piece from './PieceClass';
import SYMBOLS from './PieceConstants';

export default class Pawn extends Piece {
    constructor(player){
        super(player, (player === 1? '\u2659' : '\u265F'))
    }
}