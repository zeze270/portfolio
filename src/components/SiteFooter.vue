<script setup lang="ts">
import { site } from '../data/site'
</script>

<template>
  <footer class="border-t border-borderSoft py-8 text-center text-sm text-textSub">
    © {{ new Date().getFullYear() }} {{ site.name }} · 用 Vue 3 + Vite + Tailwind 制作
  </footer>
</template>
