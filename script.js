
function Gameboard(){

    let columns = 3;
    let rows = 3;
    let board = [];

    // Here I need to create the rows

    for(let i = 0; i < rows; i++){
        // Creates an empty array at that index of i (Makes a row)
        board[i] = []
        for (let j = 0; j < columns; j++){
            // in row i push an empy string into each column
            board[i].push(" ")
        }
    }
    console.table(board)
    console.log(board)

}