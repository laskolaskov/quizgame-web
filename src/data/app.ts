import { computed, reactive, readonly, watch, ref, toRaw } from "vue"
import { getCategories, getQuestions } from "./api"
import { Data, Question } from "./types"
import { isCategoryResponse, isQuestionResponse, shuffle } from "./utils"

const data: Data = {
    input: {
        amount: 3,
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
    return state.questions.filter((q) => q.isCorrect !== undefined)
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
    if(state.current < state.questions.length -1) {
        state.current++
    } else {
        state.finished = true
    }
}

function answerQuestion(answer: string) {
    //update current question
    question.value.isCorrect = answer === question.value.correct_answer
    question.value.answer = answer
    //go to next
    nextQuestion()
}

function resetGame() {
    state.started = false
    state.finished = false
    state.questions = []
    state.current = 0
}

const app = {
    state: readonly(state),
    input: state.input,
    q: question,
    answeredQuestions,
    startGame,
    resetGame,
    loadCategories,
    loadQuestions,
    nextQuestion,
    answerQuestion,
    interface: {
        setError,
    }
}

export default app