<template lang="pug">
  .features
    .container
      .features__item(v-for="(item, index) in features.items" :key="index")
        //.features__item-image
        img.features__item-image--1(v-if='index === 0' src="@/assets/images/illustrations/features-01.png" srcset="@/assets/images/illustrations/features-01@2x.png 2x")
        img.features__item-image--2(v-if='index === 1' src="@/assets/images/illustrations/features-02.png" srcset="@/assets/images/illustrations/features-02@2x.png 2x")
        .features__item-content
          h2.features__item-title {{item.title}}
          .features__item-text {{item.text}}
</template>

<script>
export default {
  props: {},
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
        ]
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./_features.scss";
</style>
