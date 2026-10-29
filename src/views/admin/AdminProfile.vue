<script setup lang="ts">
import { site } from '../../data/site'
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold mb-6">个人信息</h2>
    <div class="bg-card rounded-2xl shadow-card p-6 max-w-2xl space-y-4">
      <label class="block">
        <span class="text-sm text-textSub">姓名</span>
        <input v-model="site.name" class="mt-1 w-full px-4 py-2 rounded-xl border border-borderSoft focus:outline-none focus:border-primary" />
      </label>
      <label class="block">
        <span class="text-sm text-textSub">职位 / 头衔</span>
        <input v-model="site.title" class="mt-1 w-full px-4 py-2 rounded-xl border border-borderSoft focus:outline-none focus:border-primary" />
      </label>
      <label class="block">
        <span class="text-sm text-textSub">个性签名</span>
        <input v-model="site.tagline" class="mt-1 w-full px-4 py-2 rounded-xl border border-borderSoft focus:outline-none focus:border-primary" />
      </label>
      <label class="block">
        <span class="text-sm text-textSub">自我介绍</span>
        <textarea v-model="site.about" rows="4" class="mt-1 w-full px-4 py-2 rounded-xl border border-borderSoft focus:outline-none focus:border-primary"></textarea>
      </label>
      <label class="block">
        <span class="text-sm text-textSub">邮箱</span>
        <input v-model="site.email" class="mt-1 w-full px-4 py-2 rounded-xl border border-borderSoft focus:outline-none focus:border-primary" />
      </label>
      <label class="block">
        <span class="text-sm text-textSub">GitHub 链接</span>
        <input v-model="site.github" class="mt-1 w-full px-4 py-2 rounded-xl border border-borderSoft focus:outline-none focus:border-primary" />
      </label>
      <p class="text-sm text-primary">✓ 修改自动保存</p>
    </div>
  </div>
</template>
