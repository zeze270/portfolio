<script setup lang="ts">
import { site } from '../data/site'
</script>

<template>
  <section id="about">
    <div class="max-w-[1100px] mx-auto px-6">
      <h2 class="text-2xl font-semibold mb-8 text-center">关于我</h2>
      <div class="bg-card rounded-2xl shadow-card p-8 md:p-10">
        <p class="text-textMain leading-relaxed">{{ site.about }}</p>
        <div class="mt-8 pt-6 border-t border-borderSoft">
          <div class="flex gap-4 text-sm">
            <span class="text-primary font-medium shrink-20">教育</span>
            <div class="text-textSub space-y-2">
              <p>陇南第一高中</p>
              <p class="text-textMain">大连民族大学 · 信息与通信工程学院 · 物联网工程（本科在读）</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
