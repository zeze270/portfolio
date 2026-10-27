<script setup lang="ts">
import { ref } from 'vue'
import { site } from '../data/site'

const copied = ref(false)
function copyEmail() {
  navigator.clipboard.writeText(site.email)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}
</script>

<template>
  <section id="contact">
    <div class="max-w-[1100px] mx-auto px-6 text-center">
      <h2 class="text-2xl font-semibold mb-8">联系我</h2>
      <div class="bg-card rounded-2xl shadow-card p-8 md:p-10 inline-flex flex-col gap-4 min-w-[280px]">
        <button
          class="text-textMain hover:text-primary transition-colors"
          @click="copyEmail"
        >
          ✉ {{ site.email }}
          <span class="text-xs text-textSub ml-2">{{ copied ? '已复制' : '点击复制' }}</span>
        </button>
        <a :href="site.github" target="_blank" class="text-textMain hover:text-primary transition-colors">
          GitHub →
        </a>
      </div>
    </div>
  </section>
</template>
