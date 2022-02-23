//import { Phase } from "./utils";
//import { Stats, Game } from "./classes";

export interface Data {
    input: UserInput
}

export interface UserInput {
    amount: bigint,
    category: string,
    difficulty: string
}

export const enum Phase {
    Start = 1,
    Questions = 2,
    Results = 3
}