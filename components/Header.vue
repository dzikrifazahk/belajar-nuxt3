<template>
    <div>
      <div class="text-3xl font-bold">Nuxt Blog Components s</div>
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
    </div>
</template>
