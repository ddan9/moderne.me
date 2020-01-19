<template lang="pug">
.cols
  .container
    .cols__main
      h2.cols__main-title(v-html="cols.title")
      .cols__main-image
    .cols__3cols
      .cols__3cols-item(v-for="(item, index) in cols.items" :key="index" v-if='type === "top"')
        img.cols__3cols-image.cols__3cols-image--0(v-if="index === 0" src="@/assets/images/illustrations/icon-cols-0.png" srcset="@/assets/images/illustrations/icon-cols-0@2x.png 2x")
        img.cols__3cols-image.cols__3cols-image--1(v-if="index === 1" src="@/assets/images/illustrations/icon-cols-1.png" srcset="@/assets/images/illustrations/icon-cols-1@2x.png 2x")
        img.cols__3cols-image.cols__3cols-image--2(v-if="index === 2" src="@/assets/images/illustrations/icon-cols-2.png" srcset="@/assets/images/illustrations/icon-cols-2@2x.png 2x")
        .cols__3cols-title {{item.title}}
        .cols__3cols-text {{item.text}}
      .cols__3cols-item(v-for="(item, index) in cols.items2" :key="index" v-if='type === "bottom"')
        img.cols__3cols-image.cols__3cols-image--0-1(v-if="index === 0" src="@/assets/images/illustrations/icon-cols-0-1.png" srcset="@/assets/images/illustrations/icon-cols-0-1@2x.png 2x")
        img.cols__3cols-image.cols__3cols-image--1-1(v-if="index === 1" src="@/assets/images/illustrations/icon-cols-1-1.png" srcset="@/assets/images/illustrations/icon-cols-1-1@2x.png 2x")
        img.cols__3cols-image.cols__3cols-image--2-1(v-if="index === 2" src="@/assets/images/illustrations/icon-cols-2-1.png" srcset="@/assets/images/illustrations/icon-cols-2-1@2x.png 2x")
        .cols__3cols-title {{item.title}}
        .cols__3cols-text {{item.text}}
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'top'
    }
  },
  data () {
    return {
      cols: {
        title: '<span>For creative teams</span> The all-in-one toolkit for creative troops and solo forces. Create and collaborate with ideas in a new and powerful way.',
        items: [
          {
            title: 'Deliver better creative ideas.',
            text: 'Use hundreds of ready-to-use creative insights and ideas highly tailored to your needs.'
          },
          {
            title: 'Run creative brainstorms smoother.',
            text: 'Get a space for your creative team and clients to share ideas and insights, organize mood boards and discussions.'
          },
          {
            title: 'Present your ideas beautifully.',
            text: 'Turn all the assets of your next advertising campaign into a beautiful deck to present the ideas to your executives or clients.'
          }
        ],
        items2: [
          {
            title: 'Built by creative people.',
            text: 'Moderne is a product of a team of art-directors, copywriters and developers who passionate about creativity.'
          },
          {
            title: 'Trusted by industry’s experts.',
            text: 'People in advertising agencies and in-house creative teams around the world use Moderne on a daily basis.'
          },
          {
            title: 'Money-back Guarantee.',
            text: 'We are confident in the benefits of our product for creative teams, so we offer a 100% money-back guarantee.'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./_cols.scss";
</style>
