<script setup lang="ts">
import { NLayout, NSpace } from 'naive-ui'
import Header from './Header.vue'
import Item from './Item.vue'
</script>

<template>
  <NSpace>
    <NLayout>
      <div class="page">
        <Header />
        <Item />
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
