export default defineEventHandler((event)=> {
    return {
        message: true,
        data : {
            hello: 'hello',
            world: 'world'
        }
    }
})