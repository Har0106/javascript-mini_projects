let firstCard, secondCard, sum, hasBlackjack, isAlive, message

const messageEl = document.getElementById("message")
const sumEl = document.getElementById("sum")
const cardsEl = document.getElementById("cards")

const startGameButton = document.getElementById("start-game")
const newCardButton = document.getElementById("new-card")

startGameButton.addEventListener("click", startGame)
newCardButton.addEventListener("click", newCard)

function startGame() {
    hasBlackjack = false
    isAlive = true
    message = ""

    firstCard = drawCard()
    secondCard = drawCard()
    sum = firstCard + secondCard
    sumEl.innerText = "Sum: " + sum
    cardsEl.innerText = "Cards: " + firstCard + " " + secondCard
    showMessage()
}

function showMessage() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum == 21) {
        hasBlackjack = true
        message = "You've got Blackjack"
    } else {
        isAlive = false
        message = "You're out of the game"
    }
    messageEl.innerText = message
}

function newCard() {
    let anotherCard = drawCard()
    sum += anotherCard
    cardsEl.innerText = cardsEl.innerText + " " + anotherCard
    sumEl.innerText = "Sum: " + sum
    showMessage()
}

function drawCard() {
    return Math.floor(Math.random() * 12)
}