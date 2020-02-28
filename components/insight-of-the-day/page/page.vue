<template lang="pug">
.insight-page
  .container
    .insight-page__wrapper
      .insight-page__header
        .insight-page__header-label {{ page.data.label }}
        .insight-page__header-title {{ page.data.title }}
        .insight-page__header-lead {{ page.data.lead }}
      .insight-page__pagination.insight-page__pagination--top
        nuxt-link.insight-page__pagination-item.insight-page__pagination-item--prev(v-show="prevLink !== null" :to="`/insight-of-the-day/${prevLink}`")
          paginationArrow.insight-page__pagination-arrow.insight-page__pagination-arrow--prev
          | Prev
        nuxt-link.insight-page__pagination-item.insight-page__pagination-item--next(v-show="nextLink !== null" :to="`/insight-of-the-day/${nextLink}`")
          | Next
          paginationArrow.insight-page__pagination-arrow.insight-page__pagination-arrow--next
      .insight-page__content
        SlicesBlock(
          :slices="page.data.body"
        )
      .insight-page__pagination.insight-page__pagination--bottom
        nuxt-link.insight-page__pagination-item.insight-page__pagination-item--prev(v-show="prevLink !== null" :to="`/insight-of-the-day/${prevLink}`")
          paginationArrow.insight-page__pagination-arrow.insight-page__pagination-arrow--prev
          | Prev
        nuxt-link.insight-page__pagination-item.insight-page__pagination-item--next(v-show="nextLink !== null" :to="`/insight-of-the-day/${nextLink}`")
          | Next
          paginationArrow.insight-page__pagination-arrow.insight-page__pagination-arrow--next
</template>

<script>
/* eslint-disable */
import _ from 'lodash'

import SlicesBlock from '@/components/insight-of-the-day/page/slices/slices.vue'
import paginationArrow from '@/assets/images/icons/icon-readMore.svg?inline'

export default {
  components: {
    SlicesBlock,
    paginationArrow
  },
  props: {
    page: {
      type: Object
    },
    items: {
      type: Object
    }
  },
  data () {
    return {
      prevLink: null,
      nextLink: null
    }
  },
  mounted () {
    this.getOther(this.items)
  },
  methods: {
    getOther (el) {
      const currentInsight = this.page.id
      const found = _.findIndex(el, function (insight) { return insight.id === currentInsight })
      this.prevLink = found > 0 ? el[found - 1].uid : null
      this.nextLink = found < el.length - 1 ? el[found + 1].uid : null
    }
  }
}
</script>

<style lang="scss">
  @import "page";
</style>
