import { createPlayer } from './player.js';
import { createGameBoard} from './gameboard.js';


function createGame(){
    const playerOne = createPlayer("X", "Player One")
    const playerTwo = createPlayer("O", "Player Two")

    const gameboard = createGameBoard(playerOne, playerTwo)



}



createGame()