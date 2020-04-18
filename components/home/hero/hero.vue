<template lang="pug">
  .hero
    .container
      h1.hero__title {{hero.title}}
      .hero__lead {{hero.lead}}
      button-ui.hero__button(text="Get Started" link="/get-access" bgColor="#FF7E85" textColor="#FFFFFF")
      .hero__illustration
        img(:alt="hero.title" src="images/illustrations/hero-monkey.png" srcset="images/illustrations/hero-monkey@2x.png 2x")
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
        lead: 'Moderne provides highly tailored ad ideas and insights, offering a digital workspace for more effective brainstorming for creative minds'
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./_hero.scss";
</style>
