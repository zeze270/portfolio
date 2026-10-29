import { createRouter, createWebHistory } from 'vue-router'
import FrontHome from '../views/FrontHome.vue'
import AdminLogin from '../views/admin/AdminLogin.vue'
import AdminLayout from '../views/admin/AdminLayout.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import AdminProfile from '../views/admin/AdminProfile.vue'
import AdminSkills from '../views/admin/AdminSkills.vue'
import AdminProjects from '../views/admin/AdminProjects.vue'
import AdminSettings from '../views/admin/AdminSettings.vue'

const TOKEN_KEY = 'portfolio_admin_token'
export function isLoggedIn() {
  return localStorage.getItem(TOKEN_KEY) === 'logged'
}
export function setLoggedIn(v: boolean) {
  if (v) localStorage.setItem(TOKEN_KEY, 'logged')
  else localStorage.removeItem(TOKEN_KEY)
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: FrontHome },
    { path: '/admin/login', component: AdminLogin },
    {
      path: '/admin',
      component: AdminLayout,
      meta: { requiresAuth: true },
      children: [
        { path: '', redirect: '/admin/dashboard' },
        { path: 'dashboard', component: AdminDashboard },
        { path: 'profile', component: AdminProfile },
        { path: 'skills', component: AdminSkills },
        { path: 'projects', component: AdminProjects },
        { path: 'settings', component: AdminSettings },
      ],
    },
  ],
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    return '/admin/login'
  }
  if (to.path === '/admin/login' && isLoggedIn()) {
    return '/admin/dashboard'
  }
})

export default router
