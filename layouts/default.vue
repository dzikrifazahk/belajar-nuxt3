<!-- layouts merupakan pembungkus dari pages -->
<template>
  <div>
    <!-- contoh pembuatan default layouts -->
    <!-- header -->
    <!-- <div>
      <div class="text-3xl font-bold">Nuxt Blog</div>
      <div class="text-sm font-light font-mono flex space-x-4">
        <NuxtLink class="hover:text-blue-400 hover:underline" to="/">
          Home
        </NuxtLink>
        <NuxtLink
          class="hover:text-blue-400 hover:underline"
          :to="{ name: 'about' }"
        >
          About
        </NuxtLink>
        <NuxtLink
          class="hover:text-blue-400 hover:underline"
          :to="{ name: 'contact' }"
        >
          Contact
        </NuxtLink>
      </div>
    </div> -->

    <!-- headernya di comment karena mencoba mengambil dari components -->
    <Header/>
    <TestLevel1/>
    <!-- content -->
    <!-- slot ini jika mau ditampilin dimana layouts nya -->
    <slot />
  </div>
</template>
