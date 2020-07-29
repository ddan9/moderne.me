<template lang="pug">
  .ourstory
    section-terms
    section-cta
</template>

<script>
import terms from '@/components/policy/story/story'
import cta from '@/components/home/cta/cta'

export default {
  components: {
    'section-terms': terms,
    'section-cta': cta
  },
  head () {
    return {
      title: 'Privacy Policy'
    }
  }
}
</script>

<style lang="scss">
  .ourstory {
    background-color: #F3EAE5;
    margin: 0 0 -60px;
  }
</style>
