
function Gameboard() {

    let columns = 3;
    let rows = 3;
    let board = [];

    // Here I need to create the rows

    for (let i = 0; i < rows; i++) {
        // Creates an empty array at that index of i (Makes a row)
        board[i] = []
        for (let j = 0; j < columns; j++) {
            // in row i push an empty string into each column
            board[i].push(" ")
        }
    }


    const makeMove = (row, column, player) => {
        board[row][column] = player
        console.table(board)
    }
    return { makeMove }
}

function GameController{
    const player1 = "Player One"
    const player2 = "player Two"

    const players = [
        {
            name: player1,
            symbol: "X"
        }
    {
            name: player2,
            symbol: "O"
        }
    ]


}

const test = Gameboard()