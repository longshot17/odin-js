export function  createGameBoard (playerOne, playerTwo){
    let activePlayer = playerOne
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
                    let winner = activePlayer
                    gameOver(winner)
                    //implement game over handling
                }
            }
        }
        if(!boardState.includes("")){
            alert("tie") // implement tie handling
            gameOver()
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
        for(let i = 0; i < boardState.length; i++){
            boardState[i] = ""
        }
        refreshBoard()
    }

    function gameOver(winner = null){
        if(winner != null){
            winner.giveWin()
            updateScore()
        }
        resetBoard()
    }

    function updateScore(){
        let score1 = document.querySelector(".p1score")
        let score2 = document.querySelector(".p2score")

        if(playerOne.getName() != "none" & playerTwo.getName() != "none"){
            score1.textContent = playerOne.getName() + playerOne.getWins()
            score2.textContent =  playerTwo.getName()  + playerTwo.getWins()
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
            //make name change form appear
            nameForm.classList.add("active");   
        })
    
        resetBtn.addEventListener("click", () => {
            resetBoard()
        })
        
        nameSubmitBtn.addEventListener("click", () => {
            const player1Name = document.querySelector("#p1Name").value;
            const player2Name = document.querySelector("#p2Name").value;
            const message_div = document.querySelector("#message-div");
            if(player1Name != "" & player2Name != ""){
                playerOne.setName(player1Name)
                playerTwo.setName(player2Name)
                document.querySelector("#p1Name").value = "";
                document.querySelector("#p2Name").value = "";
                let score1 = document.querySelector(".p1score")
                let score2 = document.querySelector(".p2score")
                score1.textContent = `${player1Name}: ${playerOne.getWins()}`
                score2.textContent = `${player2Name}: ${playerTwo.getWins()}`

                nameForm.classList.remove("active");   
                message_div.classList.remove("active");
            }
            else{
                message_div.classList.add("active");
            }

            
        })

    })();


    return {getBoard, makeMove, resetBoard, getPlayers}
}







