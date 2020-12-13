//Tanupreet Kaur
//200440642

// finds the first emply square and generates 9 different boards filling in that square with numbers 1...9
function nextBoards(board){
    var res = []
    const firstEmpty = findEmptySquare(board)
    if (firstEmpty != undefined){
        const y = firstEmpty[0]
        const x = firstEmpty[1]
        for (var i = 1; i <= 9; i++){
            var newBoard = [...board]
            var row = [...newBoard[y]]
            row[x] = i
            newBoard[y] = row
            res.push(newBoard)
        }
    }
    return res
}

// (get the i j coordinates for the first empty square)
function findEmptySquare(board){
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            if (board[i][j] == null) {
                return [i, j]
            }
        }
    }
}

// filters out all of the invalid boards from the list
function keepOnlyValid(boards){
    var res = []
    for (var i = 0; i < boards.length; i++){
        if (validBoard(boards[i])){
            res.push(boards[i])
        }
    }
    return res
}

// THIS FUNCTION WORKS.
// Board -> Boolean
// checks to see if given board is valid
function validBoard(board){
    return rowsGood(board) && columnsGood(board) && boxesGood(board)
}