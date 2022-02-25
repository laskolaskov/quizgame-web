<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import app from '../data/app'
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title text-primary">Results</h4>
            <hr />
            <p>
                <span class="text-success">Easy:</span> {{ app.getResultsByDifficulty().easy.correct }} / {{ app.getResultsByDifficulty().easy.total }}
                <span
                    clas="text-muted"
                >({{ app.getResultsByDifficulty().easy.p.toFixed(1) }}%)</span>
            </p>
            <p>
                <span class="text-warning">Medium:</span> {{ app.getResultsByDifficulty().medium.correct }} / {{ app.getResultsByDifficulty().medium.total }}
                <span
                    clas="text-muted"
                >({{ app.getResultsByDifficulty().medium.p.toFixed(1) }}%)</span>
            </p>
            <p>
                <span class="text-danger">Hard:</span> {{ app.getResultsByDifficulty().hard.correct }} / {{ app.getResultsByDifficulty().hard.total }}
                <span
                    clas="text-muted"
                >({{ app.getResultsByDifficulty().hard.p.toFixed(1) }}%)</span>
            </p>
            <p>
                <span class="text-primary">Total:</span> {{ app.getResultsByDifficulty().all.correct }} / {{ app.getResultsByDifficulty().all.total }}
                <span
                    clas="text-muted"
                >({{ app.getResultsByDifficulty().all.p.toFixed(1) }}%)</span>
            </p>
            <button class="btn btn-success" @click="app.resetGame">Start new game</button>
        </div>
    </div>
</template>

<style>
</style>