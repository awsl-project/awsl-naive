<script setup lang="ts">
import { LogoDiscord, LogoGithub, LogoTwitter } from '@vicons/ionicons5'

interface SocialLinkProps {
  name: 'twitter' | 'github' | 'discord'
  url: string
}

const props = defineProps<SocialLinkProps>()
const iconMap = {
  twitter: LogoTwitter,
  github: LogoGithub,
  discord: LogoDiscord,
}
</script>

<template>
  <NButton
    text
    tag="a"
    :href="props.url"
    target="_blank"
  >
    <template #icon>
      <NIcon :component="iconMap[props.name]" />
    </template>
  </NButton>
</template>
