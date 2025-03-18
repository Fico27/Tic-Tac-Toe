
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

function GameController(){
    const player1 = "Player One"
    const player2 = "player Two"
    const board = Gameboard();
    let rounds = 0;

    //Define players and symbols.

    const players = [
        {
            name: player1,
            symbol: "X"
        },
    {
            name: player2,
            symbol: "O"
        }
    ]
    // Player one always goes first
    let myTurn = players[0]

    // Cycles between players
    const nextRound = () => {
        myTurn = (myTurn === players[0]) ? players[1] : players[0]
    }

    const playRound = () => {
        let userRowinput = prompt('Enter a row');
        let usercolumninput = prompt('Enter a column');
        let currentPlayer = myTurn.symbol

        makeMove(userRowinput, usercolumninput, currentPlayer)
        nextRound()
        rounds++
    }


    return {nextRound, playRound}
}


