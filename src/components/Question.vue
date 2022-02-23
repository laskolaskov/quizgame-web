<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import app from '../data/app'
</script>

<template>
    <p>{{app.state.questions[app.state.current].question}}</p>
</template>

<style>
</style>