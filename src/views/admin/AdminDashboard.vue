<script setup lang="ts">
import { site } from '../../data/site'
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold mb-6">仪表盘</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-card rounded-2xl shadow-card p-6">
        <div class="text-3xl font-semibold text-primary">{{ site.skills.length }}</div>
        <div class="text-sm text-textSub mt-1">技能分组</div>
      </div>
      <div class="bg-card rounded-2xl shadow-card p-6">
        <div class="text-3xl font-semibold text-primary">
          {{ site.skills.reduce((s, g) => s + g.items.length, 0) }}
        </div>
        <div class="text-sm text-textSub mt-1">技能标签总数</div>
      </div>
      <div class="bg-card rounded-2xl shadow-card p-6">
        <div class="text-3xl font-semibold text-primary">{{ site.projects.length }}</div>
        <div class="text-sm text-textSub mt-1">项目数量</div>
      </div>
      <div class="bg-card rounded-2xl shadow-card p-6">
        <div class="text-3xl font-semibold text-primary">{{ site.name }}</div>
        <div class="text-sm text-textSub mt-1">当前站长</div>
      </div>
    </div>
    <p class="text-sm text-textSub mt-8">
      修改内容会自动保存到浏览器本地，刷新不丢失。改完点左下角「查看前台」即可看到效果。
    </p>
  </div>
</template>
