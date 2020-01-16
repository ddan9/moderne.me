<template lang="pug">
.cols
  .container
    .cols__main
      h2.cols__main-title(v-html="cols.title")
      .cols__main-image
    .cols__3cols
      .cols__3cols-item(v-for="(item, index) in cols.items" :key="index")
        .cols__3cols-image
        .cols__3cols-title {{item.title}}
        .cols__3cols-text {{item.text}}
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      cols: {
        title: '<span>For creative teams</span> The all-in-one toolkit for creative troops and solo forces. Create and collaborate ideas in a new and powerful way.',
        items: [
          {
            title: 'Shop now and pay later.',
            text: 'Shop at any online retailer to get the things you love today and pay for them over time with Klarna.'
          },
          {
            title: 'Amazing deals. Always.',
            text: 'Access the latest deals and online drops directly in the app. Never pay full price again.'
          },
          {
            title: 'No fees. No interest.',
            text: 'We ensure full transparency so there are never any hidden fees or added interest when you shop in the Klarna App.'
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
