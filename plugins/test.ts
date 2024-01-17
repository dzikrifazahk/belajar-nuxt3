//membuat plugins
export default defineNuxtPlugin((nuxt)=>{
    const loading = useState('loading', ()=> false)

    // nuxt.vueApp.use()
    
    const OLoading = {
        show: () => loading.value = true,
        hide: () => loading.value = false,
        state: computed(() => loading.value)
    }

    console.log('plugin loading init')
    return {
        provide: {
            loading: OLoading
        }
    }
})