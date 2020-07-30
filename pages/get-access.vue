<template lang="pug">
  .get-access
    section-getAccess(
      title="Get a Demo"
      text="Request a demo today to try our platform 🐵"
      type="getaccess"
    )
</template>

<script>
import getAccess from '~/components/signup-signin/form/form'

export default {
  components: {
    'section-getAccess': getAccess
  },
  head () {
    return {
      title: 'Get a Demo'
    }
  }
}
</script>

<style lang="scss" scoped>
  .pricing {
    padding: 203px 0 0;
  }
</style>
