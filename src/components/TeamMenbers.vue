<script setup lang="ts">
import { NAvatar, NThing } from 'naive-ui'
import { members } from '../data/members'
import SocialLinks from './SocialLinks.vue'
</script>

<template>
  <NThing v-for="member, index in members" :key="index">
    <template #avatar>
      <NAvatar
        round
        :src="member.avatar"
        :size="48"
      />
    </template>
    <template #header>
      <span class="member-name">{{ member.name }}</span>
    </template>
    <template #description>
      <SocialLinks :links="member.links" />
    </template>
  </NThing>
</template>

<style>
.member-name {
  font-size: 1.2em;
  font-weight: 500;
}
</style>
