<script setup lang="ts">
import { resetSite, site } from '../../data/site'
import { toast } from '../../utils/toast'

function reset() {
  if (confirm('确定要清空所有后台修改、恢复默认数据吗？')) resetSite()
}

function exportJSON() {
  const blob = new Blob([JSON.stringify(site, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'portfolio-data.json'
  a.click()
  URL.revokeObjectURL(url)
  toast('已导出配置文件')
}

function importJSON(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result as string)
      Object.assign(site, data)
      localStorage.setItem('portfolio_data', JSON.stringify(data))
      toast('导入成功，刷新页面查看')
      setTimeout(() => location.reload(), 800)
    } catch {
      toast('文件格式错误')
    }
  }
  reader.readAsText(file)
}
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold mb-6">设置</h2>
    <div class="bg-card rounded-2xl shadow-card p-6 max-w-2xl space-y-4">
      <div>
        <h3 class="font-medium mb-2">数据说明</h3>
        <p class="text-sm text-textSub leading-relaxed">
          后台所有修改都保存在你当前浏览器的 localStorage 里。换浏览器或用无痕模式打开会看到默认内容。
          用下面的导出/导入功能可以备份和迁移你的配置。
        </p>
      </div>
      <hr class="border-borderSoft" />
      <div class="flex gap-3">
        <button @click="exportJSON" class="px-4 py-2 rounded-xl bg-chip text-primary text-sm hover:bg-primary hover:text-white transition-colors">导出配置 JSON</button>
        <label class="px-4 py-2 rounded-xl bg-chip text-primary text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
          导入配置 JSON
          <input type="file" accept="application/json" class="hidden" @change="importJSON" />
        </label>
      </div>
      <hr class="border-borderSoft" />
      <button @click="reset" class="px-4 py-2 rounded-xl bg-red-50 text-red-600 text-sm hover:bg-red-100">恢复默认数据</button>
    </div>
  </div>
</template>
