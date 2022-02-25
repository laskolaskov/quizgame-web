<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import app from '../data/app'
import Question from './Question.vue';
import Answers from './Answers.vue';
import Result from './Result.vue';

if (app.state.questions.length === 0) {
    await app.loadQuestions()
}
</script>

<template>
    <div v-if="!app.state.finished">
        <Question />
    </div>
    <div v-else>
        <Result />
    </div>
    <Answers />
</template>

<style>
</style>