import { createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
    { path: '/', name: Home, component: Home},   
    { path: '/favorites', component: () => import('../pages/Favorite.vue')}, 
    { path: '/google/callback', component: () => import('../pages/googleLogin.vue')}, 

]

const router = createRouter({
    linkActiveClass: 'bg-[#577EF2] text-white w-full rounded-full', 
  linkExactActiveClass: '',
    history: createWebHistory(),
    routes
})

export default router