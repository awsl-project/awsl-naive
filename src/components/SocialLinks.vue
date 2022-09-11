<script setup lang="ts">
import SocialLink from './SocialLink.vue'

interface SocialLinkProps {
  name: 'twitter' | 'github' | 'discord'
  url: string
}

interface SocialLinksProps {
  links: SocialLinkProps[]
}

const props = defineProps<SocialLinksProps>()
</script>

<template>
  <NSpace>
    <SocialLink
      v-for="link, index of props.links"
      :key="index"
      :name="link.name"
      :url="link.url"
    />
  </NSpace>
</template>
