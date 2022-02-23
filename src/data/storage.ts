import { computed, reactive, readonly, watch, ref, toRaw } from "vue"
import { getCategories, getQuestions } from "./api"
import { Data, Question } from "./types"
import { isCategoryResponse, isQuestionResponse, shuffle } from "./utils"

const data: Data = {
    input: {
        amount: 10,
        category: 'science',
        difficulty: 'all'
    },
    categories: [],
    questions: []
}

const state = reactive(data)

async function startGame() {
    await loadCategories()
    await loadQuestions()
    console.log('categories :: ', state.categories)
    console.log('questions ::', state.questions)
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

const storage = {
    state: readonly(state),
    input: state.input,
    startGame,
    loadCategories
}

export default storage