let incrementButton = document.getElementById('increment-btn')
let countLabel = document.getElementById('count')
let count = 0

incrementButton.addEventListener('click', increment)

// increasing the count
function increment() {
    count++
    countLabel.innerText = count
}