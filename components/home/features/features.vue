<template lang="pug">
  .features
    .container(v-if="type === null")
      .features__item(v-for="(item, index) in features.items" :key="index")
        //.features__item-image
        img.features__item-image--1(v-if='index === 0' src="@/assets/images/illustrations/features-01.png" srcset="@/assets/images/illustrations/features-01@2x.png 2x")
        img.features__item-image--2(v-if='index === 1' src="@/assets/images/illustrations/features-02.png" srcset="@/assets/images/illustrations/features-02@2x.png 2x")
        .features__item-content
          h2.features__item-title {{item.title}}
          .features__item-text {{item.text}}
    .container(v-else-if="type === 'overview'")
      .features__item.features__item--overview(v-for="(item, index) in features.overviewItems" :key="index")
        //.features__item-image
        img.features__item-image--feature-1(v-if='index === 0' src="@/assets/images/illustrations/overview-feature-1.png" srcset="@/assets/images/illustrations/overview-feature-1@2x.png 2x")
        img.features__item-image--feature-2(v-if='index === 1' src="@/assets/images/illustrations/overview-feature-2.png" srcset="@/assets/images/illustrations/overview-feature-2@2x.png 2x")
        img.features__item-image--feature-3(v-if='index === 2' src="@/assets/images/illustrations/overview-feature-3.png" srcset="@/assets/images/illustrations/overview-feature-3@2x.png 2x")
        .features__item-content
          h2.features__item-title {{item.title}}
          .features__item-text {{item.text}}
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
            title: 'Thousands of creative insights and ideas',
            text: 'Moderne gathered thousands of advertising campaigns from all over the world, so the platform provides the best ideas and insights based on your goals&objectives, target audience and data from previous campaigns.'
          },
          {
            title: 'Run brainstorms like never before',
            text: 'Moderne helps creative teams to make their brainstorming sessions effective by providing tons of useful ideas and insights, helping to keep all the assets together, and presenting ideas to others quickly.'
          }
        ],
        overviewItems: [
          {
            title: 'Get tons of insights, ideas and references',
            text: 'Moderne collects thousands of advertising ideas and useful insights from all over the world and tailors this data to your needs. Just fill your creative brief details, and we will feed your creative mind.'
          },
          {
            title: 'Run creative brainstorm sessions smoother',
            text: 'Keep all your team’s progress in one place: import creative briefs, discuss ideas, make notes, collect mood boards, praise the best ideas. Moderne helps every member of the team so everyone would be heard.'
          },
          {
            title: 'Export your ideas in a beautiful way',
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
