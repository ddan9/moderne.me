<template lang="pug">
.insight-form
  .container
    .insight-form__wrapper
      .insight-form__wrapper-top
        .insight-form__title {{ title }}
        .insight-form__lead
          | Discover breakthrough trends, innovations and ideas before they become mainstream! A new insight every single day! 🐵
      .insight-form__wrapper-middle
        input.insight-form__input(type="text" placeholder="Enter your email to subscribe!")
        button.insight-form__button Subscribe
        .insight-form__illustration
          img(src="@/assets/images/illustrations/insight-form.png" srcset="@/assets/images/illustrations/insight-form@2x.png 2x")
      .insight-form__wrapper-bottom
        .insight-form__socials
          span.insight-form__socials-item--top or follow on&nbsp;
          span.insight-form__socials-item
            iconTwitter.insight-form__socials-icon
            a(href="#") Twitter
            span.insight-form__socials-dot ,&nbsp;
          span.insight-form__socials-item
            iconLinkedin.insight-form__socials-icon
            a(href="#") Linkedin
            span.insight-form__socials-dot ,&nbsp;
          span.insight-form__socials-item
            iconInstagram.insight-form__socials-icon
            a(href="#") Instagram
            span.insight-form__socials-dot ,&nbsp;
          span.insight-form__socials-item
            iconFacebook.insight-form__socials-icon
            a(href="#") Facebook
</template>

<script>
import iconTwitter from '@/assets/images/icons/icon-twitter.svg?inline'
import iconLinkedin from '@/assets/images/icons/icon-linkedin.svg?inline'
import iconInstagram from '@/assets/images/icons/icon-instagram.svg?inline'
import iconFacebook from '@/assets/images/icons/icon-facebook.svg?inline'

export default {
  components: {
    iconTwitter,
    iconLinkedin,
    iconInstagram,
    iconFacebook
  },
  props: {
  },
  data () {
    return {
      title: 'Insight of the Day'
    }
  }
}
</script>

<style lang="scss">
  @import "form";
</style>
