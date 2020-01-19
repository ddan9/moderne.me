<template lang="pug">
  .home
    section-hero
    section-cols(type="top")
    section-features
    section-twoCols
    section-tags
    section-cards
    section-cols(type="bottom")
    section-cta
</template>

<script>
import hero from '@/components/home/hero/hero'
import cols from '@/components/home/cols/cols'
import features from '@/components/home/features/features'
import twoCols from '@/components/home/twoCols/twoCols'
import tags from '@/components/home/tags/tags'
import cards from '@/components/home/cards/cards'
import cta from '@/components/home/cta/cta'

export default {
  components: {
    'section-hero': hero,
    'section-cols': cols,
    'section-features': features,
    'section-twoCols': twoCols,
    'section-tags': tags,
    'section-cards': cards,
    'section-cta': cta
  }
}
</script>

<style lang="scss">
  .home {
    background-color: #F3EAE5;
  }
</style>
