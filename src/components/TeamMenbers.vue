<script setup lang="ts">
import { NAvatar, NCard, NThing } from 'naive-ui'
import { members } from '../data/members'
</script>

<template>
  <NCard w-80 m-3 rouded-lg>
    <NThing v-for="member in members" :key="member.name">
      <template #avatar>
        <NAvatar
          round
          :src="member.avatar"
          :size="48"
          hover="animate-bounce-alt animate-count-infinite animate-duration-1s"
        />
      </template>
      <template #header>
        <span text-xl fw-500>{{ member.name }}</span>
      </template>
      <template #description>
        <div flex flex-row gap-3>
          <div v-for="link in member.links" :key="link.url">
            <a v-if="link.name === 'twitter'" :href="link.url" target="_blank">
              <div class="i-mdi-twitter text-xl dark:bg-white" cursor-pointer />
            </a>
            <a
              v-else-if="link.name === 'github'"
              :href="link.url"
              target="_blank"
            >
              <div class="i-mdi-github text-xl dark:bg-white" cursor-pointer />
            </a>
            <a
              v-else-if="link.name === 'discord'"
              :href="link.url"
              target="_blank"
              op50
              hover="op80"
              dark="bg-white"
            >
              <div class="i-mdi-discord text-xl dark:bg-white" cursor-pointer />
            </a>
          </div>
        </div>
      </template>
    </NThing>
  </NCard>
</template>
