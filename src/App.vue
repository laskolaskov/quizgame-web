<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import StartFormVue from './components/StartForm.vue'
import app from './data/app'
import Loading from './components/Loading.vue'
import Error from './components/Error.vue'
import Game from './components/Game.vue'
</script>

<template>
    <div class="container">
        <div v-if="app.state.interface.error">
            <Error />
        </div>
        <div v-else-if="!app.state.started">
            <Suspense>
                <template #default>
                    <StartFormVue />
                </template>
                <template #fallback>
                    <Loading />
                </template>
            </Suspense>
        </div>
        <div v-else>
            <Suspense>
                <template #default>
                    <Game />
                </template>
                <template #fallback>
                    <Loading />
                </template>
            </Suspense>
        </div>
    </div>
</template>

<style>
</style>
