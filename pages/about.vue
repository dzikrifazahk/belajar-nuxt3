<script lang="ts" setup>
//implement middleware
definePageMeta({
  middleware: ["auth"],
  // middleware: 'auth'
});

const {loading,hideLoading,loadingTitle} = useLoading()
</script>
<template>
  <!-- dibawah merupakan contoh pemanggilan custom layout dengan name  -->
  <NuxtLayout name="custom">
    <!-- cara mereplace layouts dari parents -->
    <!-- overriding layout -->
    <template #header>
      <div class="text-5xl font-bold text-red-500">
        Ini header yang sudah diganti
      </div>
    </template>
    <div>ini about</div>
    <br /><br />

    <div>{{ loading }}</div>
    <div v-if="loading">{{ loadingTitle }}</div>
    <button @click="hideLoading">Hide Loading</button>
  </NuxtLayout>
</template>
