<template lang="pug">
  .pricing
    .container
      section-hero(
        title="Our Pricing"
        :border="false"
        :light="true"
      )
      section-plans
</template>

<script>
import hero from '~/components/ui/hero/hero'
import plans from '~/components/pricing/pricing-plans/pricing-plans'

export default {
  components: {
    'section-hero': hero,
    'section-plans': plans
  }
}
</script>

<style lang="scss" scoped>
  .pricing {
    padding: 203px 0 0;
  }
</style>
