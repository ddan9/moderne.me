<template lang="pug">
  .overview-page
    section-overview
    section-features(type="overview")
    section-screenshot
    section-cols(type="bottom")
    section-cta
</template>

<script>
import overview from '@/components/overview/overview'
import features from '@/components/home/features/features'
import screenshot from '@/components/screenshot/screenshot'
import cols from '@/components/home/cols/cols'
import cta from '@/components/home/cta/cta'

export default {
  components: {
    'section-overview': overview,
    'section-features': features,
    'section-screenshot': screenshot,
    'section-cols': cols,
    'section-cta': cta
  },
  head () {
    return {
      title: 'Overview'
    }
  }
}
</script>

<style lang="scss">
  .overview-page {
    background-color: #F3EAE5;
    margin: 0 0 -60px;
  }
</style>
