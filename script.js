const startBtn = document.querySelector('.start input')
const submitBtn = document.querySelector('.finish')
const questionsAll = document.querySelectorAll('.square-quiz')
const forms = document.querySelectorAll('form')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

const state = {
    page: 1,
    firstPage: 1,
    lastPage: 10
}

let correctAnswers = ['c', 'c', 'c', 'd', 'a', 'd', 'b', 'c', 'c', 'c']

const controlBtnNext = () => {
    prev.style.visibility = 'visible'
    state.page++
        if (state.page > state.lastPage) {
            state.page--
        }

    questionsAll.forEach((item) => {
        item.classList.add('hide')
        if (item.id == state.page) {
            item.classList.remove('hide')
        }
    })
    console.log(state.page)
    if (state.page == state.lastPage) {
        next.style.visibility = 'hidden'
    }


}

const controlBtnPrev = () => {
    next.style.visibility = 'visible'
    state.page--
        if (state.page < state.firstPage) {
            state.page++
        }

    questionsAll.forEach((item) => {
        item.classList.add('hide')
        if (item.id == state.page) {
            item.classList.remove('hide')
        }
    })
    if (state.page == state.firstPage) {
        prev.style.visibility = 'hidden'
    }
}

const showGame = event => {
    event.preventDefault()
    document.querySelector('.home-screen').classList.add('hide')
    document.querySelector('.button').classList.remove('hide')
    document.querySelector('.square-quiz').classList.remove('hide')
    submitBtn.classList.remove('hide')
}

const cancelEvent = () => {
    const confirm = document.querySelector('.confirmation')
    confirm.classList.add('hide')
}

const confirmation = event => {
    event.preventDefault()
    const confirm = document.querySelector('.confirmation')
    confirm.classList.remove('hide')
}

const insertScoreDisplay = (message, score) => {
    let display = document.querySelector('.confirmation-inside')
    display.style.width = '400px'
    display.innerHTML = ''


    let scoreDiv = document.createElement('div')
    let scorePoints = document.createElement('h2')
    scorePoints.innerText = score + ' %'
    let scoreMessage = document.createElement('h1')
    scoreMessage.innerText = message

    scoreDiv.appendChild(scoreMessage)
    scoreDiv.appendChild(scorePoints)

    display.appendChild(scoreDiv)
}

const getMessage = (totalScore) => {
    const messages = {
        0: 'Ops! você errou todas =(',
        100: 'Parabéns, você acertou todas!'
    }

    return messages[totalScore] || 'Você acertou'
}

const getAnswers = () => {
    let usersAnswers = []

    forms.forEach((item) => {
        usersAnswers.push(item.radio.value)
    })

    getScore(usersAnswers)
}

const getScore = (usersAnswers) => {
    let totalScore = 0

    usersAnswers.forEach((item, index) => {
        if (item === correctAnswers[index])
            totalScore += 10
    })

    insertScoreDisplay(getMessage(totalScore), totalScore)
}

startBtn.addEventListener('click', showGame)
submitBtn.addEventListener('click', confirmation)