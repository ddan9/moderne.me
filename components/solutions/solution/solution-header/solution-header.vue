<template lang="pug">
.solution-header
  .container
    .solution-header__wrapper
      .solution-header__label Solution
      .solution-header__title(
        :style="`color: ${data.color}`"
      ) {{ data.header.title }}
      .solution-header__lead {{ data.header.lead }}
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss">
  @import "solution-header";
</style>
