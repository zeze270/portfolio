<script setup lang="ts">
import { site } from '../data/site'
</script>

<template>
  <footer class="border-t border-borderSoft py-8 text-center text-sm text-textSub">
    <div>© {{ new Date().getFullYear() }} {{ site.name }} · 用 Vue 3 + Vite + Tailwind 制作</div>
    <router-link to="/admin" class="text-xs text-textSub hover:text-primary mt-2 inline-block opacity-60">后台管理</router-link>
  </footer>
</template>
