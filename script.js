function Gameboard() {

    let columns = 3;
    let rows = 3;
    let gameboard = [];

    // Here I need to create the rows
    for (let i = 0; i < rows; i++) {
        // Creates an empty array at that index of i (Makes a row)
        gameboard[i] = []
        for (let j = 0; j < columns; j++) {
            // in row i push an empty string into each column
            gameboard[i].push("")
        }
    }
    return { gameboard }
}

function Gamedisplay() {
    const gameStart = Gamecontroller()

    const gameContainer = document.querySelector('.gameboard')

    for (let i = 0; i < 9; i++) {
        const createBox = document.createElement('div')
        createBox.className = `test box${i + 1}`

        /* assigns each created box with a row and column */
        const row = Math.floor(i / 3);
        const column = (i % 3);
        createBox.dataset.row = row;
        createBox.dataset.column = column;

        createBox.addEventListener('click', gameStart.enableBoard)
        gameContainer.appendChild(createBox);
    }
}

function Gamecontroller() {
    const startButton = document.querySelector("button");
    const resetButton = document.querySelector(".reset")
    startButton.style.display = 'none';
    const whosTurn = document.querySelector(".turn")
    // const player1 = "Player One"
    // const player2 = "Player Two"
    const player1 = document.querySelector("#player1")
    const player2 = document.querySelector("#player2")
    player1.style.display = "none"
    player2.style.display = "none"
    const board = Gameboard();
    let rounds = 0;

    //Define players and symbols.
    const players = [
        {
            name: player1.value,
            symbol: "X"
        },
        {
            name: player2.value,
            symbol: "O"
        }
    ]

    const makeMove = (row, column, player) => {

        if (board.gameboard[row][column] !== '') {
            alert("That spot is already in use. Take an open spot!")
            console.table(board.gameboard)
            playRound()
        } else {
            board.gameboard[row][column] = player;
            console.table(board.gameboard)
        }

    }

    // Player one always goes first
    let myTurn = players[0]

    const currentPlayer = () => myTurn

    const playRound = (target) => {
        let currentPlayer = myTurn.symbol

        rounds++
        console.log(rounds)
        makeMove(target.dataset.row, target.dataset.column, currentPlayer)

        if (!winCondition()) {
            myTurn = (myTurn === players[0]) ? players[1] : players[0]
            whosTurn.innerHTML = `It is ${myTurn.name}'s turn!`;
        } 

        if (!winCondition() && rounds ===9){
            whosTurn.innerHTML = `It is a TIE!`;
            disableBoard()
            resetButton.style.display = "block";
        }
    }

    const enableBoard = (e) => {
        if (!e.target.innerHTML) {
            e.target.innerHTML = `${currentPlayer().symbol}`
            playRound(e.target)
        }
    }

    const disableBoard = () => {
        const allboxes = document.querySelectorAll(".test")
        allboxes.forEach((box) => {
            box.removeEventListener('click', enableBoard)
        })
    }

    const resetGame = () => {
        const gameContainer = document.querySelector('.gameboard')
        whosTurn.innerHTML = ""
        board
        console.table(board.gameboard)
        
        while (gameContainer.firstChild) {
            gameContainer.removeChild(gameContainer.firstChild);
        }

        Gamedisplay()
        resetButton.style.display = "none";

    }

    const winCondition = () => {
        // logic for rows, columns and diag
        for (let i = 0; i < 3; i++) {
            if ((board.gameboard[i][0] && board.gameboard[i][0] === board.gameboard[i][1]) && board.gameboard[i][1] === board.gameboard[i][2]) {
                whosTurn.innerHTML = `${myTurn.name} WINS!`
                disableBoard()
                resetButton.style.display = "block";
                return true
            } else if ((board.gameboard[0][i] && board.gameboard[0][i] === board.gameboard[1][i]) && board.gameboard[1][i] === board.gameboard[2][i]) {
                whosTurn.innerHTML = `${myTurn.name} WINS!`
                disableBoard()
                resetButton.style.display = "block";
                return true
            } else if ((board.gameboard[0][0] && board.gameboard[0][0] === (board.gameboard[1][1])) && board.gameboard[1][1] === board.gameboard[2][2]) {
                whosTurn.innerHTML = `${myTurn.name} WINS!`
                disableBoard()
                resetButton.style.display = "block";
                return true
            } else if ((board.gameboard[0][2] && board.gameboard[0][2] === (board.gameboard[1][1])) && board.gameboard[1][1] === board.gameboard[2][0]) {
                whosTurn.innerHTML = `${myTurn.name} WINS!`
                disableBoard()
                resetButton.style.display = "block";
                return true
            } 
            
        }

    }

    return { playRound, currentPlayer, enableBoard, resetGame }
}
