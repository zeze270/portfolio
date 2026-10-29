<script setup lang="ts">
import { useRouter } from 'vue-router'
import { setLoggedIn } from '../../router'
import { toasts } from '../../utils/toast'

const router = useRouter()
const links = [
  { to: '/admin/dashboard', label: '仪表盘', icon: '📊' },
  { to: '/admin/profile', label: '个人信息', icon: '👤' },
  { to: '/admin/skills', label: '技能管理', icon: '🛠' },
  { to: '/admin/projects', label: '项目管理', icon: '📁' },
  { to: '/admin/settings', label: '设置', icon: '⚙' },
]

function logout() {
  setLoggedIn(false)
  router.push('/admin/login')
}
</script>

<template>
  <div class="min-h-screen flex bg-mint">
    <aside class="w-56 bg-card border-r border-borderSoft p-5 flex flex-col">
      <h1 class="text-primary font-bold text-lg mb-8">管理后台</h1>
      <nav class="flex flex-col gap-1 flex-1">
        <router-link
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="px-3 py-2 rounded-lg text-sm text-textSub hover:bg-chip hover:text-primary"
          active-class="!bg-chip !text-primary font-medium"
        >{{ l.icon }} {{ l.label }}</router-link>
      </nav>
      <router-link to="/" class="text-xs text-textSub hover:text-primary mb-2">← 查看前台</router-link>
      <button @click="logout" class="text-xs text-red-500 hover:underline">退出登录</button>
    </aside>
    <main class="flex-1 p-8 overflow-auto">
      <router-view />
    </main>

    <div class="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
      <div
        v-for="t in toasts"
        :key="t.id"
        class="bg-primary text-white px-4 py-2 rounded-lg shadow-card text-sm"
      >{{ t.msg }}</div>
    </div>
  </div>
</template>
