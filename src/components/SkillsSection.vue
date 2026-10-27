<script setup lang="ts">
import { site } from '../data/site'
</script>

<template>
  <section id="skills">
    <div class="max-w-[1100px] mx-auto px-6">
      <h2 class="text-2xl font-semibold mb-8 text-center">技能</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="g in site.skills"
          :key="g.category"
          class="bg-card rounded-2xl shadow-card p-6"
        >
          <h3 class="text-primary font-medium mb-4">{{ g.category }}</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="s in g.items"
              :key="s"
              class="px-3 py-1.5 rounded-full bg-chip text-textMain text-sm hover:bg-primary hover:text-white transition-colors"
            >
              {{ s }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
