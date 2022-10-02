let gameBoard = (() =>{
    let gameBoardFrame = [];
    return {gameBoardFrame};
})();

let displayController = (() => {
    let testF = () => {
        console.log("Testing 1 2 3")
    }
    return {testF}
})();

displayController.testF()
console.log(gameBoard.gameBoardFrame)

let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = {
        playerName : function(){console.log("This player name is " + playerName + " " + assignedXO )}
    }
    return {getPlayerName, playerName, playerNumber}
}

let playerOne = createPlayer("Kunle", 5, "O")

console.log(playerOne)

console.log(playerOne.getPlayerName.playerName())