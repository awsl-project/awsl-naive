<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import Page from './Page.vue'

window.$message = useMessage()
</script>
<template>
  <div class="page">
    <Page />
  </div>
</template>

<style>
.page{
  height: 100vh;
  width: 100vw;
}
</style>
