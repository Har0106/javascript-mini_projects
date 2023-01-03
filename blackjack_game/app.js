let firstCard, secondCard, sum, hasBlackjack, isAlive, message

const messageEl = document.getElementById("message")
const sumEl = document.getElementById("sum")
const cardsEl = document.getElementById("cards")

const startGameButton = document.getElementById("start-game")
const newCardButton = document.getElementById("new-card")

// disabling newCardButton before the game starts
newCardButton.disabled = true

startGameButton.addEventListener("click", startGame)
newCardButton.addEventListener("click", newCard)

function startGame() {
    // initializing the variables when the game is started
    hasBlackjack = false
    isAlive = true
    message = ""

    // drawing two random cards and storing their some on a variable
    firstCard = drawCard()
    secondCard = drawCard()
    sum = firstCard + secondCard

    //enabling the newCardButton after game starts
    newCardButton.disabled = false

    // displaying the sum and cards in the UI
    sumEl.innerText = "Sum: " + sum
    cardsEl.innerText = "Cards: " + firstCard + " " + secondCard
    showMessage()
}

function showMessage() {
    // displaying the messages according to the sum of the cards drawn
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
    if (hasBlackjack === false && isAlive) {
        // drawing a new card and adding it to the sum
        let anotherCard = drawCard()
        sum += anotherCard

        // displaying the new card and sum on the screen
        cardsEl.innerText += " " + anotherCard
        sumEl.innerText = "Sum: " + sum
        showMessage()
    }
}

// drawing a random card
function drawCard() {
    return Math.floor(Math.random() * 11 + 1)
}