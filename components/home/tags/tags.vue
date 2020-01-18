<template lang="pug">
.tags
  .container
    .tags__wrapper
      .tags__mini-items
        .tags__mini-item(v-for="(item, index) in tagsMini" :key="index") {{item.title}}
      .tags__illustration
        img.tags__illustration-face(src="@/assets/images/illustrations/tags-face.png" srcset="@/assets/images/illustrations/tags-face@2x.png 2x")
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
          title: 'Creative ideas.',
          text: 'Quisque volutpat augue enim Pulvinar lobortis nibh lacinia at lobortis id bibendum.'
        },
        {
          title: 'Creative insights.',
          text: 'As a base that helps to make you next creative advertising campaign shine.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "./_tags.scss";
</style>
