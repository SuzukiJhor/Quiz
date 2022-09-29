const startBtn = document.querySelector('.start input')
const backBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const submitBtn = document.querySelector('.finish')
const questionsAll = document.querySelectorAll('.square-quiz')
const forms = document.querySelectorAll('form')

const state = {
    page: 1,
    firstPage: 1,
    lastPage: 10
}

let correctAnswers = ['c', 'c', 'c', 'd', 'a', 'd', 'b', 'c', 'c', 'c']

const showGame = event => {
    event.preventDefault()
    document.querySelector('.home-screen').classList.add('hide')
    document.querySelector('.button').classList.remove('hide')
    document.querySelector('.square-quiz').classList.remove('hide')
    submitBtn.classList.remove('hide')
}

const controlsButton = event => {
    event.preventDefault()
    const targetClass = event.target.className
    if (targetClass == 'next') {
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
    }

    if (targetClass == 'prev') {
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
    }
}

const confirmation = event => {
    event.preventDefault()
    const confirm = document.querySelector('.confirmation')
    confirm.classList.remove('hide')
    confirm.addEventListener('click', event => {
        const elementClass = event.target.className
        if (elementClass == 'fin') {
            getAnswers()
        }
        if (elementClass == 'can') {
            confirm.classList.add('hide')
        }

    })
}

const insertScoreInfo = (message, score) => {
    let display = document.querySelector('.confirmation-inside')
    display.innerHTML = ''

    let scoreDiv = document.createElement('div')
    let scoreh2 = document.createElement('h2')
    scoreh2.innerText = score + '%'
    let scoreh1 = document.createElement('h1')
    scoreh1.innerText = message

    scoreDiv.appendChild(scoreh1)
    scoreDiv.appendChild(scoreh2)

    display.appendChild(scoreDiv)
}

const getScoreMessage = (totalScore) => {
    const messages = {
        0: 'Você errou todas =(',
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

    const scoreMessage = getScoreMessage(totalScore)

    insertScoreInfo(scoreMessage, totalScore)
}

nextBtn.addEventListener('click', controlsButton)
backBtn.addEventListener('click', controlsButton)
startBtn.addEventListener('click', showGame)
submitBtn.addEventListener('click', confirmation)