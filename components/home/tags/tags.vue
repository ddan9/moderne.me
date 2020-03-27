<template lang="pug">
.tags
  .container
    .tags__wrapper
      .tags__mini-items
        .tags__mini-item(v-for="(item, index) in tagsMini" :key="index") {{item.title}}
      .tags__illustration
        img.tags__illustration-face(alt="Where the magic happens" src="@/assets/images/illustrations/tags-face.png" srcset="@/assets/images/illustrations/tags-face@2x.png 2x")
        .tags__illustration-text Where the magic happens
      .tags__big-items
        .tags__big-item(v-for="(item, index) in tagsBig" :key="index")
          .tags__big-item-title {{item.title}}
          .tags__big-item-text {{item.text}}
</template>

<script>
export default {
  components: {
  },
  props: {
  },
  data () {
    return {
      tagsMini: [
        {
          title: 'Campaign Objectives'
        },
        {
          title: 'Target Audience'
        },
        {
          title: 'Marketing Data'
        },
        {
          title: 'Channels'
        }
      ],
      tagsBig: [
        {
          title: 'Ideas, Cases, References',
          text: 'Get the best examples of advertising ideas in minutes to boost your creativity.'
        },
        {
          title: 'Insights, Trends, Innovations',
          text: 'Use tons of highly tailored creative insights to produce mind-blowing marketing ideas.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "./_tags.scss";
</style>
