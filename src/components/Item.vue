<script setup lang="ts">
import { NButton, NIcon, NImage, NSpace } from 'naive-ui'
import { WeiboOutlined } from '@vicons/antd'
</script>

<template>
  <n-space vertical>
    <n-image
      width="100"
      src=" https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    />
    <n-button
      text
      tag="a"
      href="https://anyway.fm/news.php"
      target="_blank"
    >
      <template #icon>
        <n-icon :component="WeiboOutlined" />
      </template>
      查看原微博
    </n-button>
  </n-space>
</template>
