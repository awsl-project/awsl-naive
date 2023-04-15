<script setup lang="ts">
import { NButton, NCard, NIcon, NImage } from 'naive-ui'
import { WeiboOutlined } from '@vicons/antd'
import type { Picture } from '../types'

defineProps<{ picProps: Picture }>()

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
        :preview-src="picProps.pic_info.original.url "
        :src="picProps.pic_info.large.url"
      />
    </template>
    <template #footer>
      <NButton
        text
        tag="a"
        :href="picProps.wb_url"
        target="_blank"
        width="100%"
      >
        <template #icon>
          <NIcon :component="WeiboOutlined" />
        </template>
        查看原微博
      </NButton>
    </template>
  </NCard>
</template>
