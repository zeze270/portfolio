<script setup lang="ts">
import { site } from '../../data/site'

function addProject() {
  site.projects.push({ name: '新项目', summary: '', tech: [], github: '' })
}
function removeProject(i: number) {
  if (confirm(`删除项目「${site.projects[i].name}」？`)) site.projects.splice(i, 1)
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-semibold">项目管理</h2>
      <button @click="addProject" class="px-4 py-2 rounded-xl bg-primary text-white text-sm hover:bg-primaryDark">+ 新增项目</button>
    </div>
    <div class="space-y-4">
      <div v-for="(p, i) in site.projects" :key="i" class="bg-card rounded-2xl shadow-card p-5 space-y-3">
        <div class="flex items-center justify-between">
          <input v-model="p.name" class="font-semibold bg-transparent focus:outline-none border-b border-transparent focus:border-primary flex-1" />
          <button @click="removeProject(i)" class="text-red-500 text-sm ml-4">删除</button>
        </div>
        <textarea v-model="p.summary" rows="2" class="w-full px-3 py-2 rounded-xl border border-borderSoft focus:outline-none focus:border-primary text-sm"></textarea>
        <div>
          <span class="text-xs text-textSub">技术标签（逗号分隔）：</span>
          <input
            :value="p.tech.join(', ')"
            @input="p.tech = ($event.target as HTMLInputElement).value.split(',').map(s => s.trim()).filter(Boolean)"
            class="mt-1 w-full px-3 py-2 rounded-xl border border-borderSoft focus:outline-none focus:border-primary text-sm"
          />
        </div>
        <input v-model="p.github" placeholder="GitHub 链接" class="w-full px-3 py-2 rounded-xl border border-borderSoft focus:outline-none focus:border-primary text-sm" />
      </div>
    </div>
  </div>
</template>
