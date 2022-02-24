<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import app from '../data/app'
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h1 class="card-title">The BEST Quiz Game !</h1>
            <button class="btn btn-danger" @click="app.resetGame">Reset</button>
        </div>
    </div>
</template>

<style>
</style>