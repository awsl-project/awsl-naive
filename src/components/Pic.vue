<script setup lang="ts">
import { NButton, NCard, NIcon, NImage } from 'naive-ui'
import { WeiboOutlined } from '@vicons/antd'
import type { Picture } from '../types'

defineProps<{ props: Picture }>()

const footerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
</script>

<template>
  <NCard segmented :footer-style="footerStyle">
    <template #cover>
      <NImage
        :preview-src="props.picInfo.original.url"
        :src="props.picInfo.large.url"
      />
    </template>
    <template #footer>
      <NButton text tag="a" :href="props.wbUrl" target="_blank" width="100%">
        <template #icon>
          <NIcon :component="WeiboOutlined" />
        </template>
        查看原微博
      </NButton>
    </template>
  </NCard>
</template>
