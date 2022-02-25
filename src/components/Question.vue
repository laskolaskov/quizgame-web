<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import app from '../data/app'
import he from 'he'
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title text-primary">{{ he.decode(app.q.value.question) }}</h5>
            <h6
                class="card-subtitle mb-2 text-muted"
            >{{ he.decode(app.q.value.category) }} - {{ he.decode(app.q.value.difficulty) }}</h6>
            <!-- <p class="card-text"></p> -->
            <!-- <button v-for="a in app.q.value.answers" class="btn">{{ a }}</button> -->
            <ul class="list-group list-group-flush mt-3">
                <li v-for="a in app.q.value.answers" @click="app.answerQuestion(a)" class="list-group-item highlighted">{{ he.decode(a) }}</li>
            </ul>
        </div>
    </div>
</template>

<style>
/* .highlighted:hover {
    background-color: gold;
} */
</style>