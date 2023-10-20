import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'title', component: () => import('../views/TitleView.vue') },
    { path: '/home', name: 'home', component: () => import('../views/HomeView.vue') },
    { path: '/about', name: 'about', component: ()=> import('../views/AboutView.vue')},
    { path: '/posts', name: 'posts', component: ()=>import('../views/PostsView.vue')},
    { path: '/newsletter', name: 'newsletter', component: ()=>import('../views/NewsletterView.vue')},
    { path: '/posts/:id', name: 'seperatePost', component:()=>import('../views/SinglePost.vue')}
  ]
})

export default router
