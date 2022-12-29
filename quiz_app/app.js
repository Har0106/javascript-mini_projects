const startButton = document.getElementById('start-btn')
const cardElement = document.getElementById('question-con')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-btn')
const nextButton = document.getElementById('next-btn')

var shuffledArray, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setQuestion()
})

// to display the question container and next button
function startGame() {
    startButton.classList.add('hide')
    cardElement.classList.remove('hide')
    nextButton.classList.remove('hide')
    setQuestion()
}

// to select a random question
function setQuestion() {
    resetState()
    shuffledArray = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    showQuestion(shuffledArray[currentQuestionIndex])
}

function showQuestion(question) {
    // to display the question
    questionElement.innerText = question.question
    // to display the answers
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerElement.appendChild(button)
    })
}

// to get the selected answer
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

// to check whether the answer is correct or wrong
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct == 'true') {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

// to clear correct or wrong status before displaying the next question
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// to clear the answers before displaying the next question
function resetState() {
    clearStatusClass(document.body)
    while (answerElement.firstChild) {
        answerElement.removeChild
        (answerElement.firstChild)
    }
}

// list of questions and answers
const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            {text: '<scripting>', correct: 'false'},
            {text: '<javascript>', correct: 'false'},
            {text: '<script>', correct: 'true'},
            {text: '<js>', correct: 'false'}
        ]
    }, 
    {
        question: 'Who is making the Web standards?',
        answers: [
            {text: 'Mozilla', correct: 'false'},
            {text: 'Google', correct: 'false'},
            {text: 'The World Wide Web Consortium', correct: 'true'},
            {text: 'Microsoft', correct: 'false'}
        ]
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        answers: [
            {text: '<h6>', correct: 'false'},
            {text: '<head>', correct: 'false'},
            {text: '<heading>', correct: 'false'},
            {text: '<h1>', correct: 'true'}
        ]
    },
    {
        question: 'Which HTML element defines the title of a document?',
        answers: [
            {text: '<title>', correct: 'true'},
            {text: '<heading>', correct: 'false'},
            {text: '<meta>', correct: 'false'},
            {text: '<head>', correct: 'false'}
        ]
    }, 
    {
        question: 'What is the correct HTML for making a text input field?',
        answers: [
            {text: '<textinput type="text">', correct: 'false'},
            {text: '<textfield>', correct: 'false'},
            {text: '<input type="textfield">', correct: 'false'},
            {text: '<input type="text">', correct: 'true'}
        ]
    }
]