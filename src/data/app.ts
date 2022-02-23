import { computed, reactive, readonly, watch, ref, toRaw } from "vue"
import { getCategories, getQuestions } from "./api"
import { Data, Question } from "./types"
import { isCategoryResponse, isQuestionResponse, shuffle } from "./utils"

const data: Data = {
    input: {
        amount: 3,
        category: 'science',
        difficulty: 'all'
    },
    categories: [],
    questions: [],
    current: 0,
    interface: {
        error: false
    },
    started: false
}

const state = reactive(data)

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
    if(state.current < state.questions.length -1) {
        state.current++
    }
}

const app = {
    state: readonly(state),
    input: state.input,
    startGame,
    loadCategories,
    loadQuestions,
    nextQuestion,
    interface: {
        setError,
    }
}

export default app