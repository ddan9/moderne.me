<template lang="pug">
.insight-today
  .container
    .insight-today__wrapper
      .insight-today__image
        .insight-today__image-inner(:style="{ backgroundImage: 'url(' + insight.data.image.url + ')' }")
          .insight-today__image-label {{ insight.data.label }}
      .insight-today__meta
        .insight-today__label 🤘 Today’s Insight
        .insight-today__title {{ insight.data.title }}
        .insight-today__lead {{ insight.data.lead }}
        nuxt-link.insight-today__button(:to="'/insight-of-the-day/'+insight.uid")
          | Read more
          readMore.insight-today__button-icon
</template>

<script>
import readMore from '@/assets/images/icons/icon-readMore.svg?inline'
export default {
  components: {
    readMore
  },
  // eslint-disable-next-line
  props: ['insight']
}
</script>

<style lang="scss">
  @import "today";
</style>
