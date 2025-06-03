import { createPlayer } from './player.js';
import { createGameBoard} from './gameboard.js';


function createGame(){
    const playerOne = createPlayer("X")
    const playerTwo = createPlayer("O")

    const gameboard = createGameBoard(playerOne, playerTwo)

    

}



createGame()