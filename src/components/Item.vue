<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { NButton, NCard, NIcon, NImage, NSpace } from 'naive-ui'
import type { ImageProps } from 'naive-ui'
import { WeiboOutlined } from '@vicons/antd'

defineProps<{ itemProps: ImageProps }>()
</script>

<template>
  <n-card
    segmented
  >
    <template #cover>
      <n-image
        :src="itemProps.src"
      />
    </template>
    <template #footer>
      <n-button
        text
        tag="a"
        href="https://anyway.fm/news.php"
        target="_blank"
        width="100%"
      >
        <template #icon>
          <n-icon :component="WeiboOutlined" />
        </template>
        查看原微博
      </n-button>
    </template>
  </n-card>
</template>
