<script lang="ts" setup>
import { h, ref } from 'vue'
import type { Component } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { NAvatar, NIcon, NLayout, NPageHeader, NSpace } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  Home,
  Moon,
  People,
  Sunny,
} from '@vicons/ionicons5'
import { isDark, toggleDark } from '../composables'

const router = useRouter()
const activeKey = ref<string | null>(null)
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Home',
          },
        },
        { default: () => '首页' },
      ),
    key: 'go-home',
    icon: renderIcon(Home),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'About',
          },
        },
        { default: () => '关于' },
      ),
    key: 'go-about',
    icon: renderIcon(People),
  },
]

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

function handleBack() {
  router.back()
}
</script>

<template>
  <NLayout>
    <n-layout-header>
      <NPageHeader @back="handleBack">
        <template #avatar>
          <NSpace>
            <NAvatar
              round
              size="medium"
              src="/awsl.png"
            />
          </NSpace>
        </template>
        <template #title>
          <NMenu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
        </template>
        <template #extra>
          <NSpace>
            <NButton quaternary circle @click="toggleDark()">
              <template #icon>
                <NIcon v-if="isDark" :component="Sunny" />
                <NIcon v-else :component="Moon" />
              </template>
            </NButton>
          </NSpace>
        </template>
      </NPageHeader>
    </n-layout-header>
  </NLayout>
</template>
