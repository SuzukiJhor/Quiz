const startBtn = document.querySelector('.start input')
const restartBtn = document.querySelector('.restart')
const submitBtn = document.querySelector('.finish')
const questionsAll = document.querySelectorAll('.square-quiz')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const externalDisplay = document.querySelector('.confirmation')
const internalDisplay = document.querySelector('.confirmation-inside')
internalDisplay.style.width = '350px'
const displayBack = document.querySelector('.confirmation')


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

const confirmSubmit = event => {
    event.preventDefault()
    externalDisplay.classList.remove('hide')
}

const insertMessageDisplay = message => {
    internalDisplay.textContent = ''
    let scoreDiv = document.createElement('div')
    let scoreMessage = document.createElement('h1')
    scoreMessage.innerText = message
    scoreDiv.appendChild(scoreMessage)
    internalDisplay.appendChild(scoreDiv)
    insertRestart()
}

const getMessage = score => {
    const messages = {
        0: 'Ops! você errou todas =(',
        100: 'Parabéns, você acertou todas!'
    }

    return messages[score] || "Você acertou"
}

const getAnswers = () => {
    let usersAnswers = []
    const forms = document.querySelectorAll('form')
    forms.forEach((item) => {
        usersAnswers.push(item.radio.value)
    })

    getScore(usersAnswers)
}

const getScore = usersAnswers => {
    let totalScore = 0

    usersAnswers.forEach((item, index) => {
        if (item === correctAnswers[index])
            totalScore += 10
    })

    insertMessageDisplay(getMessage(totalScore))
    animateScore(totalScore)
}

const animateScore = score => {
    let counter = 0
    const animationElement = document.createElement('h1')
    internalDisplay.appendChild(animationElement)
    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }
        animationElement
            .textContent = `${counter}%`
        counter++
    }, 15)
}

const insertRestart = () => {
    externalDisplay.appendChild(restartBtn)
    restartBtn.classList.remove('hide')
}

const restart = () => {
    var inputs = document.querySelectorAll('input[name=radio]')
    inputs.forEach(item => {
        if (item.checked) {
            item.checked = false
        }
    })
    window.location.reload()
}

startBtn.addEventListener('click', showGame)
submitBtn.addEventListener('click', confirmSubmit)
restartBtn.addEventListener('click', restart)