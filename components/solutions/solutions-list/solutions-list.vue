<template lang="pug">
.solutions__list
  .solutions__list-wrapper
    nuxt-link.solutions__list-item(
        v-for="(item, index) in solutions"
        :to="item.url"
      )
      .solutions__list-item-title(
        :style="`color: ${item.color}`"
      ) {{ item.title }}
      .solutions__list-item-lead {{ item.lead }}
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      solutions: [
        {
          title: 'Moderne for Agencies',
          lead: 'Unleash the full potential of your creative team!',
          color: '#FF9C5F',
          url: '/solutions/for-agencies'
        },
        {
          title: 'Moderne for Brands',
          lead: 'Find the "A-ha!" moment quickly',
          color: '#6D63D4',
          url: '/solutions/for-brands'
        },
        {
          title: 'Moderne for Startups',
          lead: 'Stand out from your competitors with creative approach',
          color: '#269D9B',
          url: '/solutions/for-startups'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "solutions-list";
</style>
