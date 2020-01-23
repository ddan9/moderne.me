<template lang="pug">
  .overview
    .container
      .overview__wrapper
        .overview__img
          img(src="@/assets/images/illustrations/overview-head.png" srcset="@/assets/images/illustrations/overview-head@2x.png 2x")
        h1.overview__title Moderne Overview
        .overview__lead
          | Moderne is&nbsp;a&nbsp;digital workspace for creative teams.&nbsp;
          br
          | The all-in-one toolkit for creative troops and solo forces.

</template>

<script>
export default {
  components: {
  },
  props: {
  }
}
</script>

<style lang="scss">
  @import "./_overview.scss";
</style>
