const playerOne = createPlayer("X")
const playerTwo = createPlayer("O")

const  gameBoard = (function(playerOne, playerTwo){
    activePlayer = playerOne
    let boardState = new Array(9).fill("");
    let markers = new Array(9).fill("");
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], 
        [0, 4, 8],
        [2, 4, 6]
      ];
    
    //puts the board into the html, and fills the board with tiles
    let boardContainer = document.querySelector(".gameboard")
    for (let i = 0; i < boardState.length; i++){
        let tile = document.createElement("div");
        tile.classList.add("tile");
        

        //adds attributes for tiles row and col
        tile.setAttribute("row",Math.floor((i/3)));
        tile.setAttribute("col", i % 3);
        tile.index = i;

         //add event listener to change on click 
        tile.addEventListener("click", () => {
            makeMove(i)
        })

        //adds a <p> tag to show marker
        let marker = document.createElement("p")
        marker.textContent = boardState[i]
        tile.append(marker)
        markers[i] = marker

        
        boardContainer.append(tile)
    }

    function refreshBoard(){
        for (let i = 0; i < boardState.length; i++){
            markers[i].textContent = boardState[i];
        }
    }


    function makeMove(index){
        if(boardState[index] == ""){
            boardState[index] = activePlayer.getMarker();
            swapActive();
            refreshBoard();
            checkBoard();
        }
    }

    function getBoard(){
        return boardState;
    }

    function checkBoard(){
        for(let i = 0; i < winPatterns.length;i++){
            if(boardState[winPatterns[i][0]] != ""){
                if(boardState[winPatterns[i][0]] == boardState[winPatterns[i][1]] && boardState[winPatterns[i][1]] == boardState[winPatterns[i][2]]) {
                    swapActive()
                    winner = activePlayer
                    gameOver(winner)
                    //implement game over handling
                }
            }
        }
        if(!boardState.includes("")){
            alert("tie") // implement tie handling
        }
    }

    function swapActive(){
        if(activePlayer.getMarker() == "X"){
            activePlayer = playerTwo
        }
        else{
            activePlayer = playerOne
        }
    }

    function resetBoard(){
        for(i = 0; i < boardState.length; i++){
            boardState[i] = ""
        }
        refreshBoard()
    }

    function gameOver(winner){
        winner.giveWin()
        updateScore()
        refreshBoard()
    }

    function updateScore(){
        score1 = document.querySelector(".p1score")
        score2 = document.querySelector(".p2score")
        score1.textContent = "Player One Score: " + playerOne.getWins()
        score2.textContent = "Player Two Score: " + playerTwo.getWins()

    }

    return {getBoard, makeMove, resetBoard}
})(playerOne, playerTwo);



function createPlayer(marker){
    const mark = marker
    let wins = 0

    const getMarker = () => mark;
    const giveWin = () => wins++;
    const getWins = () => wins;

    return{getMarker,giveWin,getWins}
}








//global to stop when game is completed 

function runGame(){
    const p1Name = prompt("Enter name", "name")
    alert("name")
    const playerOne = createPlayer("X")
    const playerTwo = createPlayer("O")
    let activePlayer = playerOne


    gameBoard.resetBoard()

}

const  gameSession = (function(playerOne, playerTwo){
    
})(playerOne, playerTwo);




