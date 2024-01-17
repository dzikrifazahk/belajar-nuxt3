<!-- <template>
  <div>
    <NuxtWelcome />  components
  </div>
</template> -->

<!-- melakukan debuggin dengan menampilkan h1 -->
<template>
  <div class="bg-slate-900 min-h-screen w-screen text-gray-100">
    

    <!-- jika menggunakan nuxtlayout, harus di membungkus -->
    <NuxtLayout>
      <NuxtLoadingIndicator :throttle="0" />
      <NuxtPage />
    </NuxtLayout>
    <!-- NuxtPage dilampirkan ketika anda ingin menggunakan pages-->
  </div>
</template>
