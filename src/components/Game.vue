<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import app from '../data/app'
import Question from './Question.vue';
import Answers from './Answers.vue';

if (app.state.questions.length === 0) {
    await app.loadQuestions()
}
</script>

<template>
    <div v-if="!app.state.finished">
        <Question />
    </div>
    <div v-else>
        <h1 class="text-success">Done !!!</h1>
        <button class="btn btn-success" @click="app.resetGame">New game</button>
    </div>
    <Answers />
</template>

<style>
</style>