<script lang="ts" setup>

    // kode dibawa jika tidak menggunakan keyword 'setup'
    // export default defineNuxtComponent({
    //     setup() {
    //         return {}
    //     },
    // })
    
    definePageMeta({
        layout: 'custom'
    })

    const setLayoutToDefault = () => {
        setPageLayout('default')
    }

    // penggunaan head 
    useHead({
        title: 'Contact',
        // meta: [
        //     {
        //         hid: 'description',
        //         name: 'description',
        //         content: 'Ini adalah halaman contact'
        //     }
        // ]
    })
</script>
<template>
    <div>
        <h1>Ini Contact</h1>
    </div>
    <!-- changging the layout dinamically -->
    <button @click="setLayoutToDefault">
        Kembalikan ke default layout
    </button>
</template>