const startBtn = document.querySelector('.start input')
const backBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const submitBtn = document.querySelector('.finish')

const questionsAll = document.querySelectorAll('.square-quiz')

let firstQuestion = document.querySelector('.square-quiz')

const state = {
    page: 1,
    firstPage: 1,
    lastPage: 10
}



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
    console.log(state.page)
}
nextBtn.addEventListener('click', controlsButton)

backBtn.addEventListener('click', controlsButton)

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