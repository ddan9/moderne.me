<template lang="pug">
  .insight-of-the-day__page
    section-page(
      v-if="ready"
      :page="document"
      :items="all.results"
    )
    section-more
    section-cta
</template>

<script>
/* eslint-disable */
import insightForm from '@/components/insight-of-the-day/form/form'
import insightPage from '@/components/insight-of-the-day/page/page'
import insightMore from '@/components/insight-of-the-day/more/more'
import cta from '@/components/home/cta/cta'

export default {
  components: {
    'section-form': insightForm,
    'section-page': insightPage,
    'section-more': insightMore,
    'section-cta': cta
  },
  head: {
    title: 'Insight of the Day'
  },
  mounted () {
    this.ready = true
  },
  data () {
    return {
      selectedPage: 1,
      today: null,
      cards: null,
      nextPage: null,
      prevPage: null,
      ready: false
    }
  },
  async asyncData({ $prismic, params, error }) {
    try{
      const insights = await $prismic.api.query(
        $prismic.predicates.at("document.type", "insight"),
        { orderings : '[my.insight.date desc]' }
      )
      // Query to get post content
      const insight = await $prismic.api.getByUID('insight', params.uid)
      // Returns data to be used in template
      return {
        all: insights,
        document: insight,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss">
  .insight-of-the-day__page {
    background-color: #F3EAE5;
    margin: 140px 0 -60px;

    @include mobile {
      margin: vmin(87) 0 0;
    }
  }
</style>
