<template lang="pug">
  .insight-of-the-day__page
    section-page(
      :page="document"
      :items="all"
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
  async asyncData ({ $prismic, params, error }) {
    try{
      const insights = await $prismic.api.query(
        $prismic.predicates.at("document.type", "insight"),
        { orderings : '[my.insight.date desc]' }
      )
      // Query to get post content
      const insight = await $prismic.api.getByUID('insight', params.uid)
      // Returns data to be used in template
      return {
        all: insights.results,
        document: insight,
        title: insight.data.title
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  components: {
    'section-form': insightForm,
    'section-page': insightPage,
    'section-more': insightMore,
    'section-cta': cta
  },
  head () {
    return {
      title: this.title
    }
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
