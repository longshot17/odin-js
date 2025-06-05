export function  createGameBoard (playerOne, playerTwo){
    let activePlayer = playerOne
    let activeBoard = true
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
        
         //add event listener to change on click 
        tile.addEventListener("click", () => {
            makeMove(i)
        })

        //adds a <p> tag to show marker
        let marker = document.createElement("p")
        marker.textContent = boardState[i]
        tile.append(marker)
        tile.classList.add("marker")
        markers[i] = marker

        
        boardContainer.append(tile)
    }

    function refreshBoard(){
        for (let i = 0; i < boardState.length; i++){
            markers[i].textContent = boardState[i];
        }
    }


    function makeMove(index){
        if(activeBoard){
            if(boardState[index] == ""){
                boardState[index] = activePlayer.getMarker();
                swapActive();
                refreshBoard();
                checkBoard();
            }
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
                    let winner = activePlayer
                    gameOver(winner)
                    return
                }
            }
        }
        if(!boardState.includes("")){
            gameOver()
        }
        return
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
        for(let i = 0; i < boardState.length; i++){
            boardState[i] = ""
        }
        activeBoard = true
        refreshBoard()
        let gameoverText = document.querySelector("#gameover-text")
        gameoverText.textContent = ""
    }

    function gameOver(winner = null){
        let gameoverText = document.querySelector("#gameover-text")
        if(winner != null){
            winner.giveWin()
            updateScore()
            let name = winner.getName()
            gameoverText.textContent = `${name} Wins!`
        }
        else{
            gameoverText.textContent = `Tie!`
        }
        activeBoard = false
    }

    function updateScore(){
        let score1 = document.querySelector("#p1score")
        let score2 = document.querySelector("#p2score")

        if(playerOne.getName() != "none" & playerTwo.getName() != "none"){
            score1.textContent = `${playerOne.getName()}'s Score: ${playerOne.getWins()}`
            score2.textContent = `${playerTwo.getName()}'s Score: ${playerTwo.getWins()}`
        }
        else{
            score1.textContent = "Player One Score: " + playerOne.getWins()
            score2.textContent =  "Player Two Score: "  + playerTwo.getWins()
        }
        
    }

    function getPlayers(){
        let players = new Array(2);
        players[0] = playerOne;
        players[1] = playerTwo;
        return players
    }

    const interfaceButtons = (function (){
        let changeNameBtn = document.querySelector("#name-button")
        let resetBtn = document.querySelector("#reset-button")
        let nameSubmitBtn = document.querySelector("#name-change-submit")
        let nameForm = document.querySelector("#name-form")
     
        changeNameBtn.addEventListener("click", () => {
            nameForm.classList.add("active");   
        })
    
        resetBtn.addEventListener("click", () => {
            resetBoard()
        })
        
        nameSubmitBtn.addEventListener("click", () => {
            const player1Name = document.querySelector("#p1Name").value;
            const player2Name = document.querySelector("#p2Name").value;

            if(player1Name != "" & player2Name != ""){
                playerOne.setName(player1Name)
                playerTwo.setName(player2Name)
                document.querySelector("#p1Name").value = "";
                document.querySelector("#p2Name").value = "";
                let score1 = document.querySelector("#p1score")
                let score2 = document.querySelector("#p2score")
                score1.textContent = `${playerOne.getName()}'s Score: ${playerOne.getWins()}`
                score2.textContent = `${playerTwo.getName()}'s Score: ${playerTwo.getWins()}`
                nameForm.classList.remove("active");   
            }
            else{
                alert("Both players need a name!")
            }

            
        })

    })();


    return {getBoard, makeMove, resetBoard, getPlayers}
}







