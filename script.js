const startBtn = document.querySelector('.start input')
const backBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const submitBtn = document.querySelector('.finish')

const questionsAll = document.querySelectorAll('.square-quiz')

let firstQuestion = document.querySelector('.square-quiz')



let correctAnswers = ['c', 'c', 'c', 'd', 'a', 'd', 'b', 'c', 'c', 'c']

const showGame = event => {
    event.preventDefault()
    const home = document.querySelector('.home-screen')
    home.classList.add('hide')

    const functionButton = document.querySelector('.button')
    functionButton.classList.remove('hide')

    firstQuestion.classList.remove('hide')
    submitBtn.classList.remove('hide')
}

const specialsconditions = () => {
    const lastQuiz = document.getElementById('10')
    const firstQuiz = document.getElementById('1')
    if (firstQuestion.id > 10) {
        firstQuestion.id = 11
        lastQuiz.classList.remove('hide')
    }
    if (firstQuestion.id < 1) {
        firstQuestion.id = 0
        firstQuiz.classList.remove('hide')
    }
    if (firstQuestion.id == 1) {
        firstQuestion.classList.remove('hide')
    }
}

nextBtn.addEventListener('click', event => {
    event.preventDefault()

    let nextId = Number(firstQuestion.id) + 1
    questionsAll.forEach((item) => {
        item.classList.add('hide')
        if (item.id == nextId) {
            item.classList.remove('hide')
        }
    })
    firstQuestion.id++
        specialsconditions()

})

backBtn.addEventListener('click', event => {
    event.preventDefault()

    let backId = Number(firstQuestion.id) - 1
    questionsAll.forEach((item) => {
        item.classList.add('hide')
        if (item.id == backId) {
            item.classList.remove('hide')
        }
    })
    firstQuestion.id--
        specialsconditions()

})

const getAnswers = () => {
    const forms = document.querySelectorAll('form')
    let answersAll = [];
    forms.forEach((item) => {
        let answers = item.radio.value
        console.log(item.radio.value)
        answersAll.push(answers)
    })



    showScore(answersAll)
}


const confirmation = event => {
    event.preventDefault()
    const confirm = document.querySelector('.confirmation')
    confirm.classList.remove('hide')
    confirm.addEventListener('click', event => {
        const classElement = event.target.className
        if (classElement == 'can') {
            confirm.classList.add('hide')
        }
        if (classElement == 'fin') {
            return getAnswers()
        }

    })
}


const showScore = (item) => {

    console.log(item)
    item = ''
}

startBtn.addEventListener('click', showGame)
submitBtn.addEventListener('click', confirmation)