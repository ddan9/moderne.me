<template lang="pug">
.insight-cards
  .container
    .insight-cards__wrapper
      .insight-cards__items
        nuxt-link.insight-cards__item(
          v-for="card in insights"
          :key="card.id"
          :to="'/day/'+card.uid"
        )
          .insight-cards__item-image(:style="{ backgroundImage: 'url(' + card.data.image.url + ')' }")
            .insight-cards__item-date {{ $moment(card.data.date).format("MMM D") }}
            .insight-cards__item-label {{ card.data.label }}
          .insight-cards__item-title {{ card.data.title }}
      .insight-cards__pagination
        .insight-cards__pagination-item.insight-cards__pagination-item--prev(@click="togglePage()")
          paginationArrow.insight-cards__pagination-arrow.insight-cards__pagination-arrow--prev
          | Prev
        .insight-cards__pagination-item.insight-cards__pagination-item--next(@click="togglePage()")
          | Next
          paginationArrow.insight-cards__pagination-arrow.insight-cards__pagination-arrow--next
</template>

<script>
import paginationArrow from '@/assets/images/icons/icon-readMore.svg?inline'

export default {
  components: {
    paginationArrow
  },
  props: {
    insights: {
      type: Array
    }
  },
  methods: {
    togglePage () {
      this.parent.selectedPage += 1
      this.$parent.asyncData(this.$parent.selectedPage)
    }
  }
}
</script>

<style lang="scss">
  @import "cards";
</style>
