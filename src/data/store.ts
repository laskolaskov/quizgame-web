import { computed, reactive, readonly, watch, ref, toRaw } from "vue"
import { Data } from "./types"

const data: Data = {
    input: {
        amount: 10n,
        category: 'science',
        difficulty: 'all'
    }
}

const state = reactive(data)

function startGame() {
    console.log('state :: ', state.input)
}

export const store = {
    state: readonly(state),
    input: state.input,
    startGame
}