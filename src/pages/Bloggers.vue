<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NEmpty, NSpin } from 'naive-ui'
import type { Blogger } from '../types'
import { getBloggers } from '../api'

const bloggers = ref<Blogger[] | undefined>([])
const loading = ref<boolean>(false)

function getRandomTagType() {
  const types = ['default', 'primary', 'info', 'success', 'warning', 'error']
  return types[Math.floor(Math.random() * types.length)]
}

async function handleFetch() {
  loading.value = true
  bloggers.value = await getBloggers()
  loading.value = false
}

onMounted(() => {
  handleFetch()
})
</script>

<template>
  <NSpin v-if="loading" flex justify-center aligin-center />
  <NEmpty v-else-if="bloggers?.length === 0" description="暂无数据" />
  <div v-else flex flex-wrap gap-3 m-3>
    <n-tag
      v-for="blogger in bloggers"
      :key="blogger.uid"
      :type="getRandomTagType()"
      size="large"
      round
    >
      {{ blogger.name }}
    </n-tag>
  </div>
</template>
