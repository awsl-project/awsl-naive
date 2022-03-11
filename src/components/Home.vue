<script setup lang="ts">
import { NGrid, NLayout, NSpace } from 'naive-ui'
import Header from './Header.vue'
import Item from './Item.vue'
const itemProps = {
  src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
}
</script>

<template>
  <NSpace>
    <NLayout>
      <div class="page">
        <Header />
        <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" x-gap="3" y-gap="4" responsive="screen">
          <n-grid-item v-for="i in 10" :key="i">
            <Item :item-props="itemProps" />
          </n-grid-item>
        </n-grid>
      </div>
    </NLayout>
  </NSpace>
</template>

<style scoped>
.page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
}
</style>
