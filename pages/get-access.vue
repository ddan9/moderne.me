<template lang="pug">
  .get-access
    section-getAccess(
      title="Get Access"
      text="Request early access today to get a secret special offer for our first customers."
      type="getaccess"
    )
</template>

<script>
import getAccess from '~/components/signup-signin/form/form'

export default {
  components: {
    'section-getAccess': getAccess
  },
  head: {
    title: 'Get Early Access'
  }
}
</script>

<style lang="scss" scoped>
  .pricing {
    padding: 203px 0 0;
  }
</style>
