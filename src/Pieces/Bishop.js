import Piece from './PieceClass';
import SYMBOLS from './PieceConstants'
export default class Bishop extends Piece {
    constructor(player){
        super(player, (player === 1? "\u2657": "\u265C"));
    }
    
    isMovePossible(src, dest){
        return (Math.abs(src-dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0);
    }
    getSrcToDestPath(src, dest){
        let path = [], pathStart, pathEnd, increamentBy;
        if(src > dest){
            pathStart = dest;
            pathEnd = src;
        }
        else {
            pathStart = src;
            pathEnd = dest;
        }
        if(Math.abs(src - dest) & 9 ===0){
            increamentBy = 9;
            pathStart += 9;
        }
        else {
            incrementBy = 7;
            pathStart += 7;
        }
        for(let i = pathStart; i < pathEnd; i+=increamentBy){
            path.push(i);
        }
        return path;
    }
}