<template lang="pug">
.container
  .case__hero(:class="`case__hero--${color}`")
    .case__hero-category {{category}}
    .case__hero-title(v-html="title")
    .case__hero-lead {{lead}}
    .case__hero-illustration
      .case__hero-illustration-item
      .case__hero-illustration-item
      .case__hero-illustration-item
      .case__hero-illustration-item
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: null
    },
    category: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    lead: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
  @import './_hero.scss';
</style>
