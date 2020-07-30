<template lang="pug">
.cta
  .container
    .cta__wrapper
      .cta__title We prepare the path to&nbsp;support your creative&nbsp;journey
      //form.cta__form#mc-embedded-subscribe-form.validate(action="http://moderne.us3.list-manage1.com/subscribe/post-json?u=82e7a91b930da0b541f0ae17d&id=5efba2eadb&c=?" method="get" name='mc-embedded-subscribe-form' target='_blank' novalidate='')
      form.cta__form#mc-embedded-subscribe-form.validate(action='https://moderne.us3.list-manage.com/subscribe/post?u=82e7a91b930da0b541f0ae17d&id=5efba2eadb' method='post' name='mc-embedded-subscribe-form' target='_blank' novalidate='')
        label.cta__form-label(for="mce-EMAIL") Enter your email address to get access to Moderne
        .cta__form-group
          input#mce-EMAIL.required.email.cta__form-input(type='email' name='EMAIL' placeholder='Enter your work email' required)
          div(style='position: absolute; left: -5000px;' aria-hidden='true')
            input(type='text' name='b_82e7a91b930da0b541f0ae17d_5efba2eadb' tabindex='-1' value='')
          button.cta__form-button(type='submit') Get a Demo
      //form.cta__form
        label.cta__form-label Enter your email to get early access to the platform
        .cta__form-group
          input.cta__form-input(type="email" placeholder="Your business email" v-model="emailUser")
          button.cta__form-button(type='submit') Get Access
      img.cta__illustration(alt="We prepare the path to support your creative journey" src="/images/illustrations/cta-monkey.png" srcset="/images/illustrations/cta-monkey@2x.png 2x")
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      emailUser: null
    }
  }
}
</script>

<style lang="scss">
  @import "./_cta.scss";
</style>
