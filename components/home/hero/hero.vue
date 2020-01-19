<template lang="pug">
  .hero
    .container
      h1.hero__title {{hero.title}}
      .hero__lead {{hero.lead}}
      button-ui.hero__button(text="Get Started" link="/get-access" bgColor="#FF7E85" textColor="#FFFFFF")
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
        title: 'Unleash the full potential of your creative team',
        lead: 'Moderne provides tons of highly-tailored creative ideas and insights and helps to make creative brainstorms more effective.'
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./_hero.scss";
</style>
