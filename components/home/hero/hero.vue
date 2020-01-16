<template lang="pug">
  .hero
    .container
      h1.hero__title {{hero.title}}
      .hero__lead {{hero.lead}}
      button-ui.hero__button(text="Get Started" link="#" bgColor="#FF7E85" textColor="#FFFFFF")
      .hero__illustration
        img(src="@/assets/images/illustrations/hero-monkey.png" srcset="@/assets/images/illustrations/hero-monkey@2x.png 2x")
</template>

<script>
import button from '@/components/ui/button/button'
export default {
  components: {
    'button-ui': button
  },
  props: {
  },
  data () {
    return {
      hero: {
        title: 'Make your next ad campaign memorable',
        lead: 'Moderne helps creative teams to work and collaborate faster as well as run brainstorms easier.'
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./_hero.scss";
</style>
