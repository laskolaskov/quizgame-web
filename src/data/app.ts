import { computed, reactive, readonly, watch, ref, toRaw } from "vue"
import { getCategories, getQuestions } from "./api"
import { Data, Question, ResultByDifficulty } from "./types"
import { isCategoryResponse, isQuestionResponse, shuffle } from "./utils"

const data: Data = {
    input: {
        amount: 10,
        category: 0,
        difficulty: 'all'
    },
    categories: [],
    questions: [],
    current: 0,
    interface: {
        error: false
    },
    started: false,
    finished: false
}

const state = reactive(data)

const question = computed(() => {
    return state.questions[state.current]
})

const answeredQuestions = computed(() => {
    return state.questions.filter((q) => q.isCorrect !== undefined).reverse()
})

async function startGame() {
    state.started = true
}

async function loadCategories() {
    const categories = await getCategories()
    if (isCategoryResponse(categories)) {
        state.categories = categories.trivia_categories
    }
}

async function loadQuestions() {
    const questions = await getQuestions()
    if (isQuestionResponse(questions)) {
        if (questions.results.length > 0) {
            state.questions = questions.results.map((q): Question => ({ answers: shuffle([q.correct_answer, ...q.incorrect_answers]), ...q }))
        }
    }
}

function setError() {
    state.interface.error = true
}

function nextQuestion() {
    if (state.current < state.questions.length - 1) {
        state.current++
    } else {
        state.finished = true
        console.log(getResultsByDifficulty())
    }
}

function answerQuestion(answer: string) {
    //update current question
    question.value.isCorrect = answer === question.value.correct_answer
    question.value.answer = answer
    //go to next
    nextQuestion()
}

function getResultsByDifficulty() {
    const init: ResultByDifficulty = {
        easy: {
            correct: 0,
            total: 0,
            p: 0
        },
        medium: {
            correct: 0,
            total: 0,
            p: 0
        },
        hard: {
            correct: 0,
            total: 0,
            p: 0
        },
        all: {
            correct: 0,
            total: 0,
            p: 0
        },
    }
    const result = state.questions.reduce((acc, q) => {
        const d = q.difficulty as keyof ResultByDifficulty
        acc[d].total++
        acc.all.total++
        if (q.isCorrect) {
            acc[d].correct++
            acc.all.correct++
        }
        return acc
    }, init)
    result.easy.p = Math.round((result.easy.correct / result.easy.total) * 100) || 0
    result.medium.p = Math.round((result.medium.correct / result.medium.total) * 100) || 0
    result.hard.p = Math.round((result.hard.correct / result.hard.total) * 100) || 0
    result.all.p = Math.round((result.all.correct / result.all.total) * 100) || 0
    return result
}

function resetGame() {
    state.started = false
    state.finished = false
    state.questions = []
    state.current = 0
}

function confirmResetGame() {
    if(confirm('Do you want to start new game ? You will lose your progress.')) {
        resetGame()
    }
}

const app = {
    state: readonly(state),
    input: state.input,
    q: question,
    answeredQuestions,
    startGame,
    resetGame,
    confirmResetGame,
    loadCategories,
    loadQuestions,
    nextQuestion,
    answerQuestion,
    getResultsByDifficulty,
    interface: {
        setError,
    }
}

export default app