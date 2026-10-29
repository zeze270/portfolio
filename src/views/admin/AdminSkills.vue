<script setup lang="ts">
import { site, type SkillGroup } from '../../data/site'
import { toast } from '../../utils/toast'

function addGroup() {
  const name = prompt('新分组名称')
  if (name) {
    site.skills.push({ category: name, items: [] })
    toast('已新增分组')
  }
}
function removeGroup(i: number) {
  if (confirm(`删除分组「${site.skills[i].category}」？`)) {
    site.skills.splice(i, 1)
    toast('已删除分组')
  }
}
function addSkill(g: SkillGroup) {
  const s = prompt('技能名称')
  if (s) {
    g.items.push(s)
    toast('已添加技能')
  }
}
function removeSkill(g: SkillGroup, i: number) {
  g.items.splice(i, 1)
  toast('已删除技能')
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-semibold">技能管理</h2>
      <button @click="addGroup" class="px-4 py-2 rounded-xl bg-primary text-white text-sm hover:bg-primaryDark">+ 新增分组</button>
    </div>
    <div class="space-y-4">
      <div v-for="(g, gi) in site.skills" :key="gi" class="bg-card rounded-2xl shadow-card p-5">
        <div class="flex items-center justify-between mb-3">
          <input v-model="g.category" class="font-medium bg-transparent focus:outline-none border-b border-transparent focus:border-primary" />
          <button @click="removeGroup(gi)" class="text-red-500 text-sm">删除分组</button>
        </div>
        <div class="flex flex-wrap gap-2">
          <span v-for="(s, si) in g.items" :key="si"
            class="px-3 py-1.5 rounded-full bg-chip text-sm flex items-center gap-1">
            {{ s }}
            <button @click="removeSkill(g, si)" class="text-red-400 hover:text-red-600">×</button>
          </span>
          <button @click="addSkill(g)" class="px-3 py-1.5 rounded-full border border-dashed border-primary text-primary text-sm hover:bg-chip">+ 技能</button>
        </div>
      </div>
    </div>
  </div>
</template>
