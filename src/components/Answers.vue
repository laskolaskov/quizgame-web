<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import app from '../data/app'
import he from 'he'
</script>

<template>
    <div class="card my-3" v-for="a in app.answeredQuestions.value">
        <div class="card-body">
            <p>
                <span class="text-primary">{{ he.decode(a.question) }}</span>
            </p>
            <div v-if="a.isCorrect">
                <p>
                    <span class="text-warning">{{ he.decode(a.answer || '') }}</span> is
                    <span class="text-success">correct</span>!
                </p>
            </div>
            <div v-else>
                <p>
                    <span class="text-warning">{{ he.decode(a.answer || '') }}</span> is
                    <span class="text-danger">wrong</span>!
                </p>
                <p>
                    The correct answer is
                    <span class="text-info">{{ he.decode(a.correct_answer) }}</span>.
                </p>
            </div>
        </div>
    </div>
</template>

<style>
</style>