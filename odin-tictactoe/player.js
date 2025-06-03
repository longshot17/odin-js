function createPlayer(marker){
    const mark = marker
    let wins = 0

    const getMarker = () => mark;
    const giveWin = () => wins++;
    const getWins = () => wins;

    return{getMarker,giveWin,getWins}
}
