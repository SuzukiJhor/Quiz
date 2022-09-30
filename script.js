const startBtn = document.querySelector('.start input')
const submitBtn = document.querySelector('.finish')
const questionsAll = document.querySelectorAll('.square-quiz')
const forms = document.querySelectorAll('form')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const display = document.querySelector('.confirmation-inside')
display.style.width = '400px'

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

const confirmSubmit = event => {
    event.preventDefault()
    const confirm = document.querySelector('.confirmation')
    confirm.classList.remove('hide')
}

const insertMessageDisplay = message => {
    // let display = document.querySelector('.confirmation-inside')
    // display.style.width = '400px'
    display.innerHTML = ''

    let scoreDiv = document.createElement('div')
        // scoreDiv.style.textAlign = 'center'
    let scoreMessage = document.createElement('h1')
    scoreMessage.innerText = message

    scoreDiv.appendChild(scoreMessage)
    display.appendChild(scoreDiv)
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

    insertMessageDisplay(getMessage(totalScore))
    scoreAnimation(totalScore)
}

const scoreAnimation = score => {
    let counter = 0
    const animationElment = document.createElement('h1')
    display.appendChild(animationElment)
    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }
        animationElment
            .textContent = `${counter}%`
        counter++
    }, 30)
}

startBtn.addEventListener('click', showGame)
submitBtn.addEventListener('click', confirmSubmit)