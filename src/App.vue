<script setup lang="ts">
import { computed } from 'vue'
import {
  NConfigProvider,
  NDialogProvider,
  NLayout,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  darkTheme,
} from 'naive-ui'
import PageHeader from './pages/PageHeader.vue'
import { isDark } from './composables'

const getDarkTheme = computed(() => isDark.value ? darkTheme : undefined)
</script>

<template>
  <NConfigProvider :theme="getDarkTheme">
    <NLoadingBarProvider>
      <NMessageProvider>
        <NNotificationProvider>
          <NDialogProvider>
            <NLayout
              style="height: 100vh"
              :native-scrollbar="false"
            >
              <PageHeader />
              <RouterView />
            </NLayout>
          </NDialogProvider>
        </NNotificationProvider>
      </NMessageProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>
