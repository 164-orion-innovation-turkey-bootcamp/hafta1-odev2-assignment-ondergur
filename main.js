let allTiles = document.querySelectorAll(".tile")
let tilesArray = Array.from(allTiles)

let alertText = document.querySelector("#alert")

// 0, 1, 2
// 3, 4, 5
// 6, 7, 8

let currentPlayerIcon = "X"
let turnCount = 0
let winnerPlayerIcon = ""

const allWinConditions = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function flipPlayerIcon() {
    if (currentPlayerIcon == "X")
    {
        currentPlayerIcon = "O"
    } else {
        currentPlayerIcon = "X"
    }
}

function checkWinner() {

    for (const winCondition of allWinConditions) {

        let one = tilesArray[winCondition[0]].innerText
        let two = tilesArray[winCondition[1]].innerText
        let three = tilesArray[winCondition[2]].innerText

        if (one === '' || two === '' || three === '') {
            continue;
        }

        if (one === two && two === three)
        {
            winnerPlayerIcon = one
        }
    }
}

function finishGame() {
    if (winnerPlayerIcon === "X" || winnerPlayerIcon === "O") {
        alertText.innerText = `${winnerPlayerIcon}  WON`
    } else if (turnCount >= 8) {
        alertText.innerText = "Game Over"
    }
}

function playTurn(tile) {
    if (winnerPlayerIcon === "" && turnCount < 9) // if the game is not over yet
    {
        tile.innerText = currentPlayerIcon
        flipPlayerIcon()
        turnCount++
        if (turnCount >= 5) {
            checkWinner()
        }
    }
    
    finishGame()
}

tilesArray.forEach( tile => {
    tile.addEventListener("click", () => playTurn(tile))
})