let firstCard = 6
let secondCard = 10
let sum = firstCard + secondCard

let hasBlackjack = false
let isAlive = true
let message = ""

const messageEl = document.getElementById("message")
const startGameButton = document.getElementById("start-game")
const sumEl = document.getElementById("sum")

startGameButton.addEventListener("click", startGame)

function startGame() {
    sumEl.innerText = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum == 21) {
        hasBlackJack = true
        message = "You've got Blackjack"
    } else {
        isAlive = false
        message = "You're out of the game"
    }
    messageEl.innerText = message
}
