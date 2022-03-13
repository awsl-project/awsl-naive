<script setup lang="ts">
import { NButton, NCard, NIcon, NImage } from 'naive-ui'
import { WeiboOutlined } from '@vicons/antd'
import type { PicInfo, Picture } from '../types'

defineProps<{ picProps: Picture }>()

const footerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
</script>

<template>
  <n-card segmented :footer-style="footerStyle">
    <template #cover>
      <n-image
        :src="picProps.pic_info.original?.url"
      />
    </template>
    <template #footer>
      <n-button
        text
        tag="a"
        :href="picProps.wb_url"
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
