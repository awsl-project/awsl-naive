<script setup lang="ts">
import { NButton, NIcon } from 'naive-ui'
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5'
import { isDark, toggleDark } from '../composables'
</script>

<template>
  <n-button @click="toggleDark()">
    <template #icon>
      <n-icon v-if="isDark" :component="SunnyOutline" />
      <n-icon v-else :component="MoonOutline" />
    </template>
  </n-button>
</template>
