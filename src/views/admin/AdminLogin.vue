<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { setLoggedIn } from '../../router'

const router = useRouter()
const pwd = ref('')
const err = ref(false)

function login() {
  if (pwd.value === '123456') {
    setLoggedIn(true)
    router.push('/admin/dashboard')
  } else {
    err.value = true
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-mint px-6">
    <form @submit.prevent="login" class="bg-card rounded-2xl shadow-card p-8 w-full max-w-sm">
      <h1 class="text-xl font-semibold mb-6 text-center text-textMain">后台管理登录</h1>
      <input
        v-model="pwd"
        type="password"
        placeholder="请输入密码"
        class="w-full px-4 py-2.5 rounded-xl border border-borderSoft focus:outline-none focus:border-primary mb-3"
      />
      <p v-if="err" class="text-red-500 text-sm mb-3">密码错误</p>
      <button
        type="submit"
        class="w-full py-2.5 rounded-xl bg-primary text-white hover:bg-primaryDark transition-colors"
      >登录</button>
      <router-link to="/" class="block text-center text-sm text-textSub mt-4 hover:text-primary">← 返回首页</router-link>
    </form>
  </div>
</template>
