<template lang="pug">
.insight-form
  .container
    .insight-form__wrapper#mc_embed_signup
      .insight-form__wrapper-top
        .insight-form__title {{ title }}
        .insight-form__lead
          | Discover breakthrough trends, innovations, and ideas before they become mainstream! 🙉🙈🙊
      form.insight-form__wrapper-middle(action="https://moderne.us19.list-manage.com/subscribe/post?u=de0a821092605fb47015cd760&amp;id=020e67aea3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate)
        input.insight-form__input.required.email#mce-EMAIL(type="email" value="" name="EMAIL"  placeholder="Enter your email to subscribe!")
        button.insight-form__button(type='submit' value="Subscribe" name="subscribe" id="mc-embedded-subscribe") Subscribe
        .insight-form__illustration
          img(src="/images/illustrations/insight-form.png" srcset="/images/illustrations/insight-form@2x.png 2x")
      .insight-form__wrapper-bottom
        .insight-form__socials
          span.insight-form__socials-item--top or follow on&nbsp;
          span.insight-form__socials-item
            iconTwitter.insight-form__socials-icon
            a(href="https://twitter.com/moderne_st" target="_blank") Twitter
            span.insight-form__socials-dot ,&nbsp;
          span.insight-form__socials-item
            iconLinkedin.insight-form__socials-icon
            a(href="https://www.linkedin.com/company/moderne" target="_blank") Linkedin
            span.insight-form__socials-dot ,&nbsp;
          span.insight-form__socials-item
            iconInstagram.insight-form__socials-icon
            a(href="https://www.instagram.com/insights.by.moderne" target="_blank") Instagram
            span.insight-form__socials-dot ,&nbsp;
          span.insight-form__socials-item
            iconFacebook.insight-form__socials-icon
            a(href="https://www.facebook.com/mdrnst/" target="_blank") Facebook
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
