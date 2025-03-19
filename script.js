
function Gameboard() {

    let columns = 3;
    let rows = 3;
    let gameboard = [];

    
    const gameContainer = document.querySelector('.gameboard')

    // Here I need to create the rows
    for (let i = 0; i < rows; i++) {
        // Creates an empty array at that index of i (Makes a row)
        gameboard[i] = []
        for (let j = 0; j < columns; j++) {
            // in row i push an empty string into each column
            gameboard[i].push("")
        }
    }

    for(let i = 0; i < 9; i++){
        const createBox = document.createElement('div')
        createBox.className = `test box${i + 1}`
        createBox.addEventListener('click', )
        gameContainer.appendChild(createBox);
    }


    const playerMove = (){

    }

    return {gameboard}
}


function GameDisplay(){

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

    const makeMove = (row, column, player) => {
       
        if(board.gameboard[row][column] !== ''){
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

    // Cycles between players
    const nextRound = () => {
        myTurn = (myTurn === players[0]) ? players[1] : players[0]
        // winCondition()
        if (rounds === 9){
            alert(`It's a tie!`)
            alert(`Game Over!`)
        }  else if (winCondition() === true){
            alert(`Game Over!`)
        }else {
            playRound()
        }
        
    }

    const playRound = () => {
        let userRowinput = prompt('Enter a row');
        let userColumninput = prompt('Enter a column');
        let currentPlayer = myTurn.symbol

        rounds++
        console.log(rounds)
        makeMove(userRowinput, userColumninput, currentPlayer)

        nextRound()

    }

    const winCondition = () =>{
        // const bord = board.gameboard
        // logic for rows
        for(let i = 0; i < 3; i ++){
            if((board.gameboard[i][0] && board.gameboard[i][0] === board.gameboard[i][1]) && board.gameboard[i][1] === board.gameboard[i][2]){
                alert(`${board.gameboard[i][0]}wins!`)
                return true
            } else if ((board.gameboard[0][i] && board.gameboard[0][i] === board.gameboard[1][i]) && board.gameboard[1][i] === board.gameboard[2][i]){
                alert(`${board.gameboard[0][i]} wins!`)
                return true
            } else if ((board.gameboard[0][0] && board.gameboard[0][0] === (board.gameboard[1][1])) && board.gameboard[1][1] === board.gameboard[2][2]){
                alert(`${board.gameboard[1][1]} wins!`)
                return true
            } else if ((board.gameboard[0][2] && board.gameboard[0][2] === (board.gameboard[1][1])) && board.gameboard[1][1] === board.gameboard[2][0]){
                alert(`${board.gameboard[1][1]} wins!`)
                return true
            }
        }
    }

    return {nextRound, playRound}
}


