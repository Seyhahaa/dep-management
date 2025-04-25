import { createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
    { path: '/', name: Home, component: Home},   
    { path: '/favorites', component: () => import('../pages/Favorite.vue')}, 
    { path: '/google/callback', component: () => import('../pages/googleLogin.vue')}, 

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router