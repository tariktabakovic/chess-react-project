// Black Pieces:
const king = 'k';
const queen = 'q';
const bishop = 'b';
const knight = 'n';
const rook = 'r';
const pawn = 'p';

// White Pieces:
const whiteKing = 'K';
const whiteQueen = 'Q';
const whiteBishop = 'B';
const whiteKnight = 'N';
const whiteRook = 'R';
const whitePawn = 'P';

// Unicode Characters for Chess: 'fileformat.info'
export const SYMBOLS = {
    [king]: '\u265A',
    [queen]: '\u265B',
    [bishop]: '\u265C',
    [knight]: '\u265D',
    [rook]: '\u265E',
    [pawn]: '\u265F',
    [whiteKing]: '\u2654',
    [whiteQueen]: '\u2655',
    [whiteBishop]: '\u2657',
    [whiteKnight]: '\u2658',
    [whiteRook]: '\u2656',
    [whitePawn]: '\u2659'
}



// Result Possibilities
const blackWins = '0-1';
const whiteWins = '1-0';
const tie = '1/2-1/2';

// Exports RESULT possibilities
export const RESULTS = {
    blackWins,
    whiteWins,
    tie
}

export const ANALYTICS_RESULTS = {
    [whiteWins]: 1,
    [blackWins]: 0,
    [tie]: -1
}