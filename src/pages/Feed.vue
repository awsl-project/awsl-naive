<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import Page from '../components/Page.vue'

window.$message = useMessage()
</script>

<template>
  <Page />
</template>
