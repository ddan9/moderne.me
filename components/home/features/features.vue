<template lang="pug">
  .features
    .container(v-if="type === null")
      .features__item(v-for="(item, index) in features.items" :key="index")
        //.features__item-image
        img.features__item-image--1(:alt="item.title" v-if='index === 0' src="@/assets/images/illustrations/features-01.png" srcset="@/assets/images/illustrations/features-01@2x.png 2x")
        img.features__item-image--2(:alt="item.title" v-if='index === 1' src="@/assets/images/illustrations/features-02.png" srcset="@/assets/images/illustrations/features-02@2x.png 2x")
        .features__item-content
          h2.features__item-title(v-html="item.title")
          .features__item-text(v-html="item.text")
    .container(v-else-if="type === 'overview'")
      .features__item.features__item--overview(v-for="(item, index) in features.overviewItems" :key="index")
        //.features__item-image
        img.features__item-image--feature-1(:alt="item.title" v-if='index === 0' src="@/assets/images/illustrations/overview-feature-1.png" srcset="@/assets/images/illustrations/overview-feature-1@2x.png 2x")
        img.features__item-image--feature-2(:alt="item.title" v-if='index === 1' src="@/assets/images/illustrations/overview-feature-2.png" srcset="@/assets/images/illustrations/overview-feature-2@2x.png 2x")
        img.features__item-image--feature-3(:alt="item.title" v-if='index === 2' src="@/assets/images/illustrations/overview-feature-3.png" srcset="@/assets/images/illustrations/overview-feature-3@2x.png 2x")
        .features__item-content
          h2.features__item-title(v-html="item.title")
          .features__item-text(v-html="item.text")
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      features: {
        items: [
          {
            title: 'Thousands of insights, trends and ideas',
            text: 'Moderne collects thousands of trends, innovative ideas, and advertising campaigns from all over the world and extracts consumer, market, and inspiration insights and then provides them based on your goals&objectives, target audience, and data.'
          },
          {
            title: 'Run brainstorms like never before',
            text: 'Keep all your team’s progress in one place: import creative briefs, discuss ideas, make notes, collect mood boards, praise the best ideas. Moderne helps every member of the team so everyone would be heard.'
          }
        ],
        overviewItems: [
          {
            title: 'Get tons of insights, ideas&nbsp;and references',
            text: 'Moderne collects thousands of trends, innovative ideas, and advertising campaigns from all over the world and extracts consumer, market, and inspiration insights and then provides them based on your goals&objectives, target audience, and data.'
          },
          {
            title: 'Run creative brainstorm sessions smoother',
            text: 'Keep all your team’s progress in one place: import creative briefs, discuss ideas, make notes, collect mood boards, praise the best ideas. Moderne helps every member of the team so everyone would be heard.'
          },
          {
            title: 'Export your ideas beautifully',
            text: 'You can convert all the work you have done with Moderne (or just some part of it) into a beautiful deck to present slides to your client or boss.'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./_features.scss";
</style>
