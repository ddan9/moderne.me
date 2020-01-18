<template lang="pug">
.form
  .container
    .form__wrapper
      .form__group
        .form__title {{title}}
        .form__text(:class="{'form__text--signin': type === 'signin'}") {{text}}
        .form__inputs(v-if='type === "signup"')
          input.form__input(
            v-for="(item, index) in signUpInputs"
            :key="index"
            :type="item.type"
            :id="item.id"
            :placeholder="item.placeholder"
          )
          .form__checkboxes
            .form__checkbox
              input(type="checkbox" id="rules")
              label(for="rules")
                span
                  | I agree to Moderne&nbsp;
                  nuxt-link(to="#") Terms
                  | &nbsp;and&nbsp;
                  nuxt-link(to="/policy") Privacy&nbsp;Policy
            .form__checkbox
              input(type="checkbox" id="news")
              label(for="news")
                span
                  | I agree to receive Moderne news and updates.
          button.form__button Get Started Now
        .form__inputs(v-else)
          input.form__input(
            v-for="(item, index) in signInInputs"
            :key="index"
            :type="item.type"
            :id="item.id"
            :placeholder="item.placeholder"
          )
          button.form__button Sign In
          nuxt-link.form__reset(to="#") Forgot Password?
      img.form__image(src="@/assets/images/illustrations/login-head.png" srcset="@/assets/images/illustrations/login-head@2x.png 2x")
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'signup'
    },
    title: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      signUpInputs: [
        {
          type: 'text',
          placeholder: 'Name',
          id: 'name'
        },
        {
          type: 'email',
          placeholder: 'Work Email',
          id: 'email'
        },
        {
          type: 'password',
          placeholder: 'Password',
          id: 'pass'
        }
      ],
      signInInputs: [
        {
          type: 'email',
          placeholder: 'Your Email',
          id: 'email'
        },
        {
          type: 'password',
          placeholder: 'Password',
          id: 'pass'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import './_form.scss';
</style>
