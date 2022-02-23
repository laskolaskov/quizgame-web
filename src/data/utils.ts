import { CategoryResponse, QuestionResponse } from "./types";

/**
 * Utility functions
 */

export function shuffle(arr: any[]): any[] {
    let i = arr.length, j, temp;
    while (--i) {
        j = Math.floor(Math.random() * (i));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}

/**
 * Type guards
 */

export function isCategoryResponse(cr: CategoryResponse): cr is CategoryResponse {
    return (cr as CategoryResponse).trivia_categories !== undefined;
}

export function isQuestionResponse(qr: QuestionResponse): qr is QuestionResponse {
    return (qr as QuestionResponse).results !== undefined && (qr as QuestionResponse).response_code !== undefined;
}