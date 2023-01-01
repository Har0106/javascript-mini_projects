let firstCard = 6
let secondCard = 10
let sum = firstCard + secondCard

let hasBlackjack = false
let isAlive = true
let message = ""

if (sum < 21) {
    message = "Do you want to draw a new card?"
} else if (sum == 21) {
    hasBlackJack = true
    message = "Wohoo! You've got Blackjack"
} else {
    isAlive = false
    message = "You're out of the game"
}