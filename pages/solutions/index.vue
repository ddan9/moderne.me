<template lang="pug">
  .solutions
    .container
      Solutions-list
</template>

<script>
// import hero from '~/components/ui/hero/hero'
// import plans from '~/components/pricing/pricing-plans/pricing-plans'

import SolutionsList from '../../components/solutions/solutions-list/solutions-list'

export default {
  components: {
    SolutionsList
    // 'section-hero': hero,
    // 'section-plans': plans
  },
  head () {
    return {
      title: 'Solutions'
    }
  }
}
</script>

<style lang="scss" scoped>
.solutions {
  padding: 155px 0 0;
  margin: 0 0 -105px;

  @include mobile {
    padding: vmin(100) 0 0;
    margin: initial;
  }
}
</style>
