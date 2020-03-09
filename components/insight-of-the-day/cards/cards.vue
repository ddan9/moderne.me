<template lang="pug">
.insight-cards
  .container
    .insight-cards__wrapper
      .insight-cards__items
        nuxt-link.insight-cards__item(
          v-for="card in insights"
          :key="card.id"
          :to="'/insight-of-the-day/'+card.uid"
        )
          .insight-cards__item-image(:style="{ backgroundImage: 'url(' + card.data.image.thumb.url + ')' }")
            .insight-cards__item-date {{ $moment(card.data.date).format("MMM D") }}
            .insight-cards__item-label {{ card.data.label }}
          .insight-cards__item-title {{ card.data.title }}
      .insight-cards__pagination
        .insight-cards__pagination-item.insight-cards__pagination-item--prev(v-show="prevPage !== null" @click="togglePage(prevPage)")
          paginationArrow.insight-cards__pagination-arrow.insight-cards__pagination-arrow--prev
          | Prev
        .insight-cards__pagination-item.insight-cards__pagination-item--next(v-show="nextPage !== null" @click="togglePage(nextPage)")
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
    },
    nextPage: {
      type: String
    },
    prevPage: {
      type: String
    }
  },
  methods: {
    togglePage (el) {
      this.$parent.getCards(el)
      // this.$parent.selectedPage += 1
      // console.log(this.$parent.selectedPage)
      // this.$parent.asyncData(this.$parent.selectedPage)
    }
  }
}
</script>

<style lang="scss">
  @import "cards";
</style>
