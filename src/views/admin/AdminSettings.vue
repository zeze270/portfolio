<script setup lang="ts">
import { resetSite } from '../../data/site'

function reset() {
  if (confirm('确定要清空所有后台修改、恢复默认数据吗？')) resetSite()
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
          部署到 Vercel 后，数据只存在每个访客自己的浏览器里——如果以后想让所有人看到你改的内容，需要对接真实后端。
        </p>
      </div>
      <hr class="border-borderSoft" />
      <button @click="reset" class="px-4 py-2 rounded-xl bg-red-50 text-red-600 text-sm hover:bg-red-100">恢复默认数据</button>
    </div>
  </div>
</template>
