export interface Data {
    input: UserInput,
    categories: Category[],
    questions: Question[],
    current: number,
    interface: {
        error: boolean
    },
    started: boolean,
    finished: boolean
}

export interface UserInput {
    amount: number,
    category: number,
    difficulty: string
}

export interface Category {
    id: number,
    name: string
}

export interface CategoryResponse {
    trivia_categories: Category[]
}

export interface Question {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
    answers?: string[],
    answer?: string,
    isCorrect?: boolean
}

export interface QuestionResponse {
    response_code: number,
    results: Question[]
}

export interface ResultByDifficulty {
    easy: {
        correct: number,
        total: number,
        p: number
    },
    medium: {
        correct: number,
        total: number,
        p: number
    },
    hard: {
        correct: number,
        total: number,
        p: number
    },
    all: {
        correct: number,
        total: number,
        p: number
    }
}

export const enum Phase {
    Start = 1,
    Questions = 2,
    Results = 3
}