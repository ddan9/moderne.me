<template lang="pug">
.cols
  .container
    .cols__main
      h2.cols__main-title.cols__main-title--top(v-html="cols.title" v-if='type === "top"')
      h2.cols__main-title.cols__main-title--bottom(v-html="cols.titleBottom" v-if='type === "bottom"')
      h2.cols__main-title.cols__main-title--params(v-html="cols.titleParams" v-if='type === "params"')
      .cols__main-image
    .cols__params(v-if='type === "params"')
      .cols__params-title.cols__params-title--before#beforeTitle Before
      .cols__params-title.cols__params-title--after#afterTitle After
      .cols__params-items
        .cols__params-item
          .cols__params-item-title Research time, looking for inspiration
          .cols__params-item-value
            .cols__params-item-current
        .cols__params-item
          .cols__params-item-title Brainstorming, collaborating with teammates
          .cols__params-item-value
            .cols__params-item-current
        .cols__params-item
          .cols__params-item-title Preparing assets
          .cols__params-item-value
            .cols__params-item-current
    .cols__3cols
      .cols__3cols-item(v-for="(item, index) in cols.items" :key="index" v-if='type === "top"')
        img.cols__3cols-image.cols__3cols-image--0(:alt="item.title" v-if="index === 0" src="images/illustrations/icon-cols-0.png" srcset="images/illustrations/icon-cols-0@2x.png 2x")
        img.cols__3cols-image.cols__3cols-image--1(:alt="item.title" v-if="index === 1" src="images/illustrations/icon-cols-1.png" srcset="images/illustrations/icon-cols-1@2x.png 2x")
        img.cols__3cols-image.cols__3cols-image--2(:alt="item.title" v-if="index === 2" src="images/illustrations/icon-cols-2.png" srcset="images/illustrations/icon-cols-2@2x.png 2x")
        .cols__3cols-title {{item.title}}
        .cols__3cols-text {{item.text}}
      .cols__3cols-item(v-for="(item, index) in cols.items2" :key="index" v-if='type === "bottom"')
        img.cols__3cols-image.cols__3cols-image--0-1(:alt="item.title" v-if="index === 0" src="images/illustrations/icon-cols-0-1.png" srcset="images/illustrations/icon-cols-0-1@2x.png 2x")
        img.cols__3cols-image.cols__3cols-image--1-1(:alt="item.title" v-if="index === 1" src="images/illustrations/icon-cols-1-1.png" srcset="images/illustrations/icon-cols-1-1@2x.png 2x")
        img.cols__3cols-image.cols__3cols-image--2-1(:alt="item.title" v-if="index === 2" src="images/illustrations/icon-cols-2-1.png" srcset="images/illustrations/icon-cols-2-1@2x.png 2x")
        .cols__3cols-title {{item.title}}
        .cols__3cols-text {{item.text}}
</template>

<script>
/* eslint-disable */
if (process.client) {
  require('scrollmagic')
}

export default {
  props: {
    type: {
      type: String,
      default: 'top'
    }
  },
  mounted () {
    this.scrollToggle()
  },
  data () {
    return {
      cols: {
        title: 'Moderne helps creative teams  to <span>save hours or even days</span> on research and allows them to collaborate <span>up to 3x faster</span>',
        titleBottom: '<span>For creative teams</span> The all-in-one toolkit for creative troops and solo forces. Create and collaborate with ideas in a new and powerful way.',
        titleParams: 'Moderne helps creative teams <span>save hours or even days</span> researching and collaborate <span>up to 3x faster</span>',
        items: [
          {
            title: 'Deliver more creative ideas.',
            text: 'Make use of all of our creative ideas, trends and consumer and market insights, highly tailored to your specific needs.'
          },
          {
            title: 'Run creative brainstorms smoother.',
            text: 'Build a space for your creative team to share ideas and insights, as well as to organize mood boards and discussions.'
          },
          {
            title: 'Present your ideas beautifully.',
            text: 'Turn your next advertising campaign into a beautiful collection of ideas to present to your executives or clients.'
          }
        ],
        items2: [
          {
            title: 'Built by creative people.',
            text: 'Moderne is the product of a team of art-directors, copywriters and developers who are passionate about creativity.'
          },
          {
            title: 'Trusted by industry’s experts.',
            text: 'People in advertising agencies and in-house creative teams around the world use Moderne on a daily basis.'
          },
          {
            title: 'Money-back Guarantee.',
            text: 'We are confident that your team will benefit from our creative ideas, so we offer a 100% money-back guarantee.'
          }
        ]
      }
    }
  },
  methods: {
    scrollToggle () {
      const scene = this.$scrollmagic.scene({
        triggerElement: '.cols__params',
        triggerHook: 0.5,
        duration: 0
      })
        .setClassToggle(".cols__params-item", "cols__params-item--done")

      const scene2 = this.$scrollmagic.scene({
        triggerElement: '.cols__params',
        triggerHook: 0.5,
        duration: 0
      })
        .setClassToggle("#beforeTitle", "cols__params-title--hide")

      const scene3 = this.$scrollmagic.scene({
        triggerElement: '.cols__params',
        triggerHook: 0.5,
        duration: 0
      })
        .setClassToggle("#afterTitle", "cols__params-title--show")

      // Add Scene to controller
      this.$scrollmagic.addScene(scene)
      this.$scrollmagic.addScene(scene2)
      this.$scrollmagic.addScene(scene3)
    }
  }
}
</script>

<style lang="scss">
  @import "./_cols.scss";
</style>
