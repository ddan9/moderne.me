<template lang="pug">
.hero-title(:class="{'hero-title--light': light}")
  .container
    .hero-title__wrapper(:class="{'hero-title__wrapper--noborder': !border}")
      h1.hero-title__title(v-if="title !== null") {{title}}
      .hero-title__lead(v-if="lead !== null" v-html="lead")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    lead: {
      type: String,
      default: null
    },
    border: {
      type: Boolean,
      default: true
    },
    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import './_hero.scss';
</style>
