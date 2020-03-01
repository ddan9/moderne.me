<template lang="pug">
.twoCols
  .container
    .twoCols__wrapper
      .twoCols__item.twoCols__item--1
        .twoCols__item-title Collaborate on great ideas with your team.
        img.twoCols__item-img--big(alt="Collaborate on great ideas with your team." src="@/assets/images/illustrations/twocols-1.png" srcset="@/assets/images/illustrations/twocols-1@2x.png 2x")
      .twoCols__item.twoCols__item--2
        img.twoCols__item-img--small(alt="Big ideas come from the unconscious." src="@/assets/images/illustrations/twocols-2.png" srcset="@/assets/images/illustrations/twocols-2@2x.png 2x")
        .twoCols__item-text “Big ideas come from the unconscious. But your unconscious has to be well informed, or your idea will be irrelevant. Stuff your conscious mind with information, then unhook your rational thought process”.
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
