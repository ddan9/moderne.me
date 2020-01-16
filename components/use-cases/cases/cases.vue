<template lang="pug">
.cases
  .container
    .cases__wrapper
      .cases__item(v-for="(item, index) in cases" :key="index" :class="`cases__item--${item.color}`")
        nuxt-link.cases__item-link(:to="item.link")
        .cases__item-category {{item.categoty}}
        .cases__item-title(v-html="item.title")
        .cases__item-lead {{item.lead}}
        .cases__item-illustration
          .cases__item-illustration-item
          .cases__item-illustration-item
          .cases__item-illustration-item
          .cases__item-illustration-item
</template>

<script>
export default {
  data () {
    return {
      cases: [
        {
          link: '/use-cases/agency',
          color: 'agency',
          categoty: 'category',
          title: 'Advertising Agency',
          lead: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit. Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar loborti.'
        },
        {
          link: '/use-cases/agency',
          color: 'startup',
          categoty: 'category',
          title: 'Online Startup',
          lead: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit. Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar loborti.'
        },
        {
          link: '/use-cases/agency',
          color: 'marketing',
          categoty: 'category',
          // eslint-disable-next-line no-multi-str
          title: 'In-house  Marketing&nbsp;Team',
          lead: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit. Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar loborti.'
        },
        {
          link: '/use-cases/agency',
          color: 'freelance',
          categoty: 'category',
          title: 'Freelancer',
          lead: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit. Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar loborti.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "./_cases.scss";
</style>
