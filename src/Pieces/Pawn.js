import Piece from './PieceClass';
import SYMBOLS from './PieceConstants';

export default class Pawn extends Piece {
    constructor(player){
        super(player, (player === 1? '\u2659' : '\u265F'))
        this.initialPositions = {
            1: [48, 49, 50, 51, 52, 53, 54, 55],
            2: [8, 9, 10, 11, 12, 13, 14, 15]
        }
    }
}