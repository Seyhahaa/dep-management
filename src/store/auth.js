import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
    }),
    getters: {
        isLoggedIn: (state) => !!state.token,
        getUser: (state) => {
            if (state.user) {
                return JSON.parse(state.user);
            }
            return null;
        },
    },
    actions: {
        async googleAuth(code) {
        // Exchange code for JWT token
        try {
            let { data } = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/auth/google/callback?code=${code}`)
                const  user  = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/auth/me`,{
                    headers: {
                        Authorization: `Bearer ${data.token}`
                    }
                })
                console.log(user.data)
                this.token = data.token;
                localStorage.setItem('token', data.token)
                this.user = JSON.stringify(user.data);
            // localStorage.setItem('viewerToken', this.viewerToken)
            // window.close();
        } catch (err) {
            localStorage.removeItem('Token');
        }
        },
    },
    
    
})