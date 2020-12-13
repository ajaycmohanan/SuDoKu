function initiate() {
    // populate the board with whatever the user inputted
    var startingBoard = [[]]
    var j = 0
    for (var i = 1; i <= 81; i++){
        const val = document.getElementById(String(i)).value
        if(val >= 1 && val <= 9){
            if (val == ""){
                startingBoard[j].push(null)
            }
            else {
                startingBoard[j].push(Number(val))
            }
            if (i % 9 == 0 && i < 81){
                startingBoard.push([])
                j++
            }
        } else {
            inputIsInvalid();
        }
        
    }
    const inputValid = validBoard(startingBoard)
    if (!inputValid){
        inputIsInvalid()
    }
    else{
        const answer = solve(startingBoard)
        updateBoard(answer, inputValid)
    }
}

function updateBoard(board) {
    // update the DOM with the answer
    if (board == false){
        for (i = 1; i <= 9; i++){
            document.getElementById("row " + String(i)).innerHTML = "NO SOLUTION EXISTS TO THE GIVEN BOARD"
        }
    }
    else{
        for (var i = 1; i <= 9; i++){
            var row = ""
            for (var j = 0; j < 9; j++){
                if (row == ""){
                    row = row + String(board[i - 1][j])
                }
                else {
                    row = row + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + String(board[i - 1][j])
                }
            }
            document.getElementById("row " + String(i)).innerHTML = row
        }
    }
}

function inputIsInvalid(){
    // starting board is invalid or puzzle is insolvable
    for (i = 1; i <= 9; i++){
        document.getElementById("row " + String(i)).innerHTML = "THE GIVEN BOARD IS INVALID"
    }
}
