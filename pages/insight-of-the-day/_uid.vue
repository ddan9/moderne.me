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
      title: this.title,
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }]
    }
  },
  data () {
    return {
      selectedPage: 1,
      today: null,
      cards: null,
      nextPage: null,
      prevPage: null,
      ready: false,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://moderne.st/insight-of-the-day/recommendations-from-a-trusted-friend-you-havent-met"
        },
        "headline": this.title,
        "description": "🤓 83% of people say they trust recommendations from friends – more than any other form of marketing.",
        "image": "https://images.prismic.io/moderne/8649bbe8-f45e-4ec3-9338-0c9d56e2052a_Trusted_Friend_.jpg",
        "author": {
          "@type": "Organization",
          "name": "Moderne"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Moderne",
          "logo": {
            "@type": "ImageObject",
            "url": "",
            "width": "",
            "height": ""
          }
        },
        "datePublished": "2020-05-05"
      }
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
