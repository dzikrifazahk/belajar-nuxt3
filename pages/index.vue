<script lang="ts" setup>
// imports from assets
import '~/assets/css/main.css'

const formatedPrice = formatPrice(205501202)
// ngambil dari composables
const { loading, hideLoading, loadingTitle } = useLoading();

// fetch api
// const fetch = await $fetch('/api/hello')
// console.log(fetch)

// untuk fetch api dengan tidak dijalan di server seperti berikut :
onMounted(() => {
    (async () => {
        const fetch = await $fetch('/api/hello')
        console.log(fetch)
    })()
})

useHead({
    titleTemplate: ''
})
</script>
<template>
  <div>
    <h1>Ini Page Index</h1>
    <LazyTestLevel1 />
    <br /><br />
    
    <!-- pemanggilan composables -->
    <div v-if="loading">{{ loadingTitle }}</div>
    <button @click="hideLoading">Hide Loading</button>
    
    <!-- pemanggilan utils -->
    <h3>format price : {{ formatPrice(21250) }}</h3>
    <h3>format price 2 : {{ formatedPrice }}</h3>

    <!-- images from public -->
    <img src="/DashboardMcu.png" width="200" alt="images">

    <!-- images from assets -->
    <img src="assets/images/Macbook.png"  width="200" alt="assets-images">
    
    <!-- <NuxtWelcome /> components -->
  </div>
</template>
