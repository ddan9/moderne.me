<template lang="pug">
.insight-page
  .container
    .insight-page__wrapper
      .insight-page__header
        .insight-page__header-label {{ page.data.label }}
        .insight-page__header-title {{ page.data.title }}
        .insight-page__header-lead {{ page.data.lead }}
      .insight-page__content
        //| {{page.data.body}}
        SlicesBlock(
          :slices="page.data.body"
        )
</template>

<script>
import SlicesBlock from '@/components/insight-of-the-day/page/slices/slices.vue'

export default {
  components: {
    SlicesBlock
  },
  props: {
    page: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
  @import "page";
</style>
