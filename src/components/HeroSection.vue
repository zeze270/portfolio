<script setup lang="ts">
import { site } from '../data/site'
</script>

<template>
  <section id="home" class="min-h-screen flex items-center pt-16">
    <div class="max-w-[1100px] mx-auto px-6 text-center">
      <div
        class="w-28 h-28 rounded-full bg-chip mx-auto mb-6 flex items-center justify-center text-primary text-4xl font-bold"
      >
        {{ site.name.charAt(0) }}
      </div>
      <h1 class="text-4xl md:text-5xl font-semibold mb-4">{{ site.name }}</h1>
      <p class="text-primary text-lg mb-2">{{ site.title }}</p>
      <p class="text-textSub mb-10">{{ site.tagline }}</p>
      <div class="flex gap-4 justify-center">
        <a
          href="#projects"
          class="px-6 py-3 rounded-full bg-primary text-white hover:bg-primaryDark transition-colors"
          >查看项目</a
        >
        <a
          href="#contact"
          class="px-6 py-3 rounded-full bg-card border border-borderSoft text-textMain hover:border-primary hover:text-primary transition-colors"
          >联系我</a
        >
      </div>
    </div>
  </section>
</template>
