<template lang="pug">
  .insight-of-the-day
    section-form
    //| Total pages: {{ totalPages }}
    //| Next page: {{ nextPage }}
    //| Prev page: {{ prevPage }}
    //| {{ today }}
    //| {{ cards }}
    .scroll-target
    section-today(
      :insight="today"
      v-show="selectedPage === 1"
    )
    section-cards(
      :insights="cards"
      :nextPage="nextPage"
      :prevPage="prevPage"
    )
    section-cta
</template>

<script>
/* eslint-disable */
// let today = null
// let cards = []
// let nextPage = null
// let prevPage = null

import insightForm from '@/components/insight-of-the-day/form/form'
import insightToday from '@/components/insight-of-the-day/today/today'
import insightCards from '@/components/insight-of-the-day/cards/cards'
import cta from '@/components/home/cta/cta'

export default {
  components: {
    'section-form': insightForm,
    'section-today': insightToday,
    'section-cards': insightCards,
    'section-cta': cta
  },
  head: {
    title: 'Insight of the Day'
  },
  data () {
    return {
      selectedPage: 1,
      today: null,
      cards: null,
      nextPage: null,
      prevPage: null
    }
  },
  async asyncData({ $prismic, error }) {
    try{
      const todayInsight = await $prismic.api.query(
        $prismic.predicates.at("document.type", "insight"),
        { orderings : '[my.insight.date desc]' }
      )
      const insights = await $prismic.api.query([
        $prismic.predicates.at("document.type", "insight"),
        $prismic.predicates.not("document.id", todayInsight.results[0].id)],
        { orderings : '[my.insight.date desc]', pageSize : 9, page: 1 }
        )
      // console.log(todayInsight.results[0])
      // Returns data to be used in template
      return {
        today: todayInsight.results[0],
        cards: insights.results,
        nextPage: insights.next_page,
        prevPage: insights.prev_page,
        selectedPage: insights.page
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  methods: {
    async getCards (el) {
      await this.$axios.$get(el).then(response => {
        document.querySelector('.scroll-target').scrollIntoView({
          behavior: 'smooth'
        })
        this.cards = response.results
        this.nextPage = response.next_page
        this.prevPage = response.prev_page
        this.selectedPage = response.page
      })
    }
  }
}
</script>

<style lang="scss">
  .insight-of-the-day {
    background-color: #F3EAE5;
    margin: 150px 0 -60px;

    @include mobile {
      margin: vmin(87) 0 0;
    }
  }
  .scroll-target {
    transform: translateY(-60px);

    @include mobile {
      transform: translateY(vmin(-60));
    }
  }
</style>
