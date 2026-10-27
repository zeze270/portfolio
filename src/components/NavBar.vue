<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const links = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '关于' },
  { href: '#skills', label: '技能' },
  { href: '#projects', label: '项目' },
  { href: '#contact', label: '联系' },
]

function close() {
  open.value = false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/70 border-b border-borderSoft"
  >
    <nav class="max-w-[1100px] mx-auto flex items-center justify-between px-6 h-16">
      <a href="#home" class="text-primary font-semibold text-lg">LH.</a>

      <ul class="hidden md:flex gap-8 text-sm text-textSub">
        <li v-for="l in links" :key="l.href">
          <a :href="l.href" class="hover:text-primary transition-colors">{{ l.label }}</a>
        </li>
      </ul>

      <button
        class="md:hidden text-textMain"
        aria-label="菜单"
        @click="open = !open"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path v-if="!open" d="M3 6h18M3 12h18M3 18h18" />
          <path v-else d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </nav>

    <ul
      v-if="open"
      class="md:hidden bg-white/95 backdrop-blur-lg border-t border-borderSoft px-6 py-4 flex flex-col gap-4 text-sm text-textSub"
    >
      <li v-for="l in links" :key="l.href">
        <a :href="l.href" @click="close" class="block hover:text-primary">{{ l.label }}</a>
      </li>
    </ul>
  </header>
</template>
