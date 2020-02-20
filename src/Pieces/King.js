import Piece from 'src/Pieces/PieceClass.js'
export default class King extends Piece {
    constructor (player){
        super(player, (player ===1 ? '\u2654' : '\u265A'));
    }
    isMovePossible(src, dest){
        return (
            src - 9 ===dest ||
            src - 8 === dest ||
            src - 7 === dest ||
            src + 1 ===dest ||
            src + 9 ===dest ||
            src + 8 ===dest ||
            src - 1 ===dest  );
    }
    getSrcToDestPath(src, dest){
        return [];
    }
}