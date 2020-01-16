<template lang="pug">
  .ourstory
    section-story
    section-cta
</template>

<script>
import story from '@/components/our-story/story/story'
import cta from '@/components/home/cta/cta'

export default {
  components: {
    'section-story': story,
    'section-cta': cta
  }
}
</script>

<style lang="scss">
  .ourstory {
    background-color: #F3EAE5;
    margin: 0 0 -60px;
  }
</style>
