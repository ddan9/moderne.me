<template lang="pug">
  .insight-of-the-day__page
    section-page(
      :page="document"
    )
    section-form
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
  data () {
    return {
      selectedPage: 1,
      today: null,
      cards: null,
      nextPage: null,
      prevPage: null
    }
  },
  async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const insight = (await $prismic.api.getByUID('insight', params.uid))
      // Returns data to be used in template
      return {
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
