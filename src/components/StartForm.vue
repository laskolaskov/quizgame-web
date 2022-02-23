<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import storage from '../data/storage'
</script>

<template>
    <form>
        <div class="mb-3">
            <label for="amount" class="form-label">Amount</label>
            <input
                type="number"
                class="form-control"
                id="amount"
                aria-describedby="amountHelp"
                v-model="storage.input.amount"
                min="0"
                max="100"
            />
            <div
                id="amountHelp"
                class="form-text"
            >The amount of questions you want to answer. Default is 10.</div>
        </div>
        <div class="mb-3">
            <label for="category" class="form-label">Category</label>
            <input
                type="text"
                class="form-control"
                id="category"
                aria-describedby="cetegoryHelp"
                v-model="storage.input.category"
            />
            <div
                id="cetegoryHelp"
                class="form-text"
            >The category of the questions you want to answer. If not passed all categories will be used.</div>
        </div>
        <div class="mb-3">
            <label for="difficulty" class="form-label">Difficulty</label>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="radio"
                    name="difficulty"
                    v-model="storage.input.difficulty"
                    value="all"
                    id="all"
                />
                <label class="form-check-label" for="all">All</label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="radio"
                    name="difficulty"
                    v-model="storage.input.difficulty"
                    value="easy"
                    id="easy"
                />
                <label class="form-check-label" for="easy">Easy</label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="radio"
                    name="difficulty"
                    v-model="storage.input.difficulty"
                    value="medium"
                    id="medium"
                />
                <label class="form-check-label" for="medium">Medium</label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="radio"
                    name="difficulty"
                    v-model="storage.input.difficulty"
                    value="hard"
                    id="hard"
                />
                <label class="form-check-label" for="hard">Hard</label>
            </div>
            <div
                id="difficultyHelp"
                class="form-text"
            >The difficulty of the questions you want to answer.</div>
        </div>
        <button type="button" class="btn btn-primary" @click="storage.startGame">Start Game</button>
    </form>
</template>

<style>
</style>
