
<template>
    <div>Loading</div>
</template>
<script>
import { mapActions } from 'pinia'
import { useAuthStore } from '../store/auth';
export default {
    data(){
        return {
            Token: '',
        }
    },
    async mounted() {
       this.googleLogin()
    },
    methods: {
      async  googleLogin(){
        const code = this.$route.query.code
        await this.googleAuth(code)
        this.$router.push('/')

        },
        ...mapActions(useAuthStore, ['googleAuth']),
    },

}
</script>