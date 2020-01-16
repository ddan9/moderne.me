<template lang="pug">
.twoCols
  .container
    .twoCols__wrapper
      .twoCols__item.twoCols__item--1
        .twoCols__item-title Vestibulum rutrum quam oitae fringilla.
        .twoCols__item-img.twoCols__item-img--big
      .twoCols__item.twoCols__item--2
        .twoCols__item-img.twoCols__item-img--small
        .twoCols__item-text Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim.
        .twoCols__item-text Pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id.
</template>

<script>
export default {
  props: {
  }
}
</script>

<style lang="scss">
  @import "./_twoCols.scss";
</style>
