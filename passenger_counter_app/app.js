let incrementButton = document.getElementById('increment-btn')
let saveButton = document.getElementById('save-btn')
let countLabel = document.getElementById('count')
let entriesLabel = document.getElementById('entries')
let count = 0

incrementButton.addEventListener('click', increment)
saveButton.addEventListener('click', save)

// increasing the count
function increment() {
    count++
    countLabel.innerText = count
}

function save() {
    // display the previous entries
    let stringCount = " " + count + " -"
    entriesLabel.innerText += stringCount
    // setting the count back to 0
    count = 0
    countLabel.innerText = count
}