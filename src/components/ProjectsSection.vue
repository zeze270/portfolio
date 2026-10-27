<script setup lang="ts">
import { site } from '../data/site'
</script>

<template>
  <section id="projects">
    <div class="max-w-[1100px] mx-auto px-6">
      <h2 class="text-2xl font-semibold mb-8 text-center">项目</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="p in site.projects"
          :key="p.name"
          class="bg-card rounded-2xl shadow-card p-6 flex flex-col transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1"
        >
          <h3 class="text-lg font-semibold mb-2">{{ p.name }}</h3>
          <p class="text-textSub text-sm leading-relaxed flex-1">{{ p.summary }}</p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="t in p.tech"
              :key="t"
              class="px-2 py-0.5 rounded-full bg-chip text-primary text-xs"
              >{{ t }}</span
            >
          </div>
          <a
            v-if="p.github"
            :href="p.github"
            target="_blank"
            class="mt-4 text-sm text-primary hover:text-primaryDark"
            >GitHub →</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
