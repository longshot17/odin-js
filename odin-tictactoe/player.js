export function createPlayer(marker){
    const mark = marker
    let name = "none"
    let wins = 0

    const getMarker = () => mark;
    const giveWin = () => wins++;
    const getWins = () => wins;
    const getName = () => name;

    function setName(newName = none){
        name = newName;
    }

    return{getMarker,giveWin,getWins,getName, setName}
}
