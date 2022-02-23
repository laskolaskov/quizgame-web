<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import app from '../data/app'

if(app.state.questions.length === 0) {
    await app.loadQuestions()
}
</script>

<template>
    <h1 class="text-success">QUESTIONS LOADED!</h1>
</template>

<style>
</style>