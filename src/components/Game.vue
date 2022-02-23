<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import app from '../data/app'
import Question from './Question.vue';

if (app.state.questions.length === 0) {
    await app.loadQuestions()
}
</script>

<template>
    <h1 class="text-success">QUESTIONS LOADED!</h1>
    <button class="btn btn-primary" @click="app.nextQuestion">Next question</button>
    <hr />
    <Question />
</template>

<style>
</style>