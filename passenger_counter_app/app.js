let incrementButton = document.getElementById('increment-btn')
let saveButton = document.getElementById('save-btn')
let countLabel = document.getElementById('count')
let count = 0

incrementButton.addEventListener('click', increment)
saveButton.addEventListener('click', save)

// increasing the count
function increment() {
    count++
    countLabel.innerText = count
}

function save() {
    count = 0
    countLabel.innerText = count
}