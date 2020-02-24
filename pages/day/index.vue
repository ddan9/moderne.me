<template lang="pug">
  .insight-of-the-day
    section-form
    section-today(
      :insight="today"
    )
    section-cards(
      :insights="cards"
    )
    section-cta
</template>

<script>
/* eslint-disable */

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
      selectedPage: 1
    }
  },
  async asyncData({ $prismic, error }) {
    try{
      const todayInsight = await $prismic.api.query(
        $prismic.predicates.at("document.type", "insight"),
        { orderings : '[my.insight.date desc]' }
      )
      const insights = await $prismic.api.query(
        $prismic.predicates.at("document.type", "insight"),
        { orderings : '[my.insight.date desc]', pageSize : 9, page: 1 }
      )
      // Returns data to be used in template
      return {
        today: todayInsight.results[0],
        cards: insights.results,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss">
  .insight-of-the-day {
    background-color: #F3EAE5;
    margin: 150px 0 -60px;
  }
</style>
