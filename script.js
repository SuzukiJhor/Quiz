const home = document.querySelector('.home-screen')
const start = document.querySelector('.start input')
const titleQuestion = document.querySelector('h2');
const allAlternates = document.querySelectorAll('h4');
const button = document.querySelector('.button')
const backBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const quiz = document.querySelectorAll('.square-quiz')
const submit = document.querySelector('.finish')
const confirma = document.querySelector('.confirmation')

const lastQuiz = document.getElementById('10')
const firstQuiz = document.getElementById('1')

let quizAtual = document.querySelector('.square-quiz')




start.addEventListener('click', (e) => {
    e.preventDefault()
    show()

})

nextBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let nextId = Number(quizAtual.id) + 1
        // console.log(quizAtual.id)
        // console.log(nextId)

    quiz.forEach((item) => {
        item.classList.add('hide')
        if (item.id == nextId) {
            item.classList.remove('hide')
        }
    })
    quizAtual.id = Number(quizAtual.id) + 1

    if (quizAtual.id == 1) {
        quizAtual.classList.remove('hide')
    }

    stop()

})

backBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let backId = Number(quizAtual.id) - 1
        // console.log(quizAtual.id)
        // console.log(backId);

    quiz.forEach((item) => {
        item.classList.add('hide')
        if (item.id == backId) {
            item.classList.remove('hide')
        }

    })
    quizAtual.id = Number(quizAtual.id) - 1

    if (quizAtual.id == 1) {
        quizAtual.classList.remove('hide')
    }

    stop()

})

function stop() {
    if (quizAtual.id > 10) {
        quizAtual.id = 11
    }
    if (quizAtual.id < 1) {
        quizAtual.id = 0
    }
    if (quizAtual.id == 11) {
        lastQuiz.classList.remove('hide')
    }
    if (quizAtual.id == 0) {
        firstQuiz.classList.remove('hide')
    }

}

function show() {
    home.classList.add('hide')
    button.classList.toggle('hide')
    quizAtual.classList.toggle('hide')
    submit.classList.toggle('hide')
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    confirmation()

    const forms = document.querySelectorAll('form')
    let answersAll = []

    forms.forEach((item) => {

        let answers = item.radio.value
        answersAll.push(answers)
    })

    console.log(answersAll)

})

const confirmation = () => {
    home.classList.add('hide')
    button.classList.add('hide')
    quiz.forEach((item) => {
        item.classList.add('hide')
    })

    submit.classList.add('hide')
    confirma.classList.remove('hide')
    const can = document.querySelector('.can')
    can.addEventListener('click', (e) => {
        e.preventDefault()
        button.classList.remove('hide')
        submit.classList.remove('hide')
        confirma.classList.add('hide')
        quizAtual.classList.remove('hide')
    })


}