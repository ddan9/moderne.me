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
                | I agree to Moderne&nbsp;
                nuxt-link(to="#") Terms
                | &nbsp;and&nbsp;
                nuxt-link(to="#") Privacy Policy
            .form__checkbox
              input(type="checkbox" id="news")
              label(for="news")
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
          button.form__button Get Started Now
      .form__image
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
