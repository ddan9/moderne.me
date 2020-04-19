<template lang="pug">
.form
  .container
    .form__wrapper
      .form__group
        .form__title {{title}}
        .form__text(:class="{'form__text--signin': type === 'signin', 'form__text--getaccess': type === 'getaccess'}") {{text}}
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
        form.form__inputs(v-if='type === "signin"' @submit.prevent="postLogin")
          //input.form__input(
          //  v-for="(item, index) in signInInputs"
          //  :key="index"
          //  :type="item.type"
          //  :id="item.id"
          //  :placeholder="item.placeholder"
          //)
          span.form__error(v-if="login.error !== null") {{ login.error }}
          input.form__input#email(
            type="email"
            placeholder="Work Email"
            v-model="login.email"
          )
          input.form__input#password(
            type="password"
            placeholder="Password"
            v-model="login.password"
          )
          button.form__button(type="submit") Sign In
          nuxt-link.form__reset(to="#") Forgot Password?
        form#mc-embedded-subscribe-form.validate.form__inputs(v-if='type === "getaccess"' action='https://moderne.us3.list-manage.com/subscribe/post?u=82e7a91b930da0b541f0ae17d&id=5efba2eadb' method='post' name='mc-embedded-subscribe-form' target='_blank' novalidate='')
          input.form__input(
            v-for="(item, index) in getAccessInputs"
            :key="index"
            :type="item.type"
            :id="item.id"
            :placeholder="item.placeholder"
            :name="item.name"
            :class="{'email': item.type === 'email', 'required': item.required}"
          )
          div(style='position: absolute; left: -5000px;' aria-hidden='true')
            input(type='text' name='b_82e7a91b930da0b541f0ae17d_5efba2eadb' tabindex='-1' value='')
          button.form__button(type='submit') Get Early Access
      img.form__image(src="images/illustrations/login-head.png" srcset="images/illustrations/login-head@2x.png 2x")
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: null
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
      login: {
        email: null,
        password: null,
        error: null
      },
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
      ],
      getAccessInputs: [
        {
          type: 'text',
          placeholder: 'Name',
          id: 'mce-NAME',
          name: 'NAME'
        },
        {
          type: 'email',
          placeholder: 'Work Email',
          id: 'mce-EMAIL',
          name: 'EMAIL',
          required: true
        }
      ]
    }
  },
  methods: {
    postLogin () {
      this.$axios.$post(`${process.env.api}/api/login`, {
        email: this.login.email,
        password: this.login.password
      }).then((response) => {
        // console.log(response)
        if (response.message) {
          this.login.error = response.message
        } else {
          const token = response.data._token
          this.$axios.setToken(token, 'Bearer')
          this.$cookies.set('moderne-token', `${token}`, {
            domain: 'app.moderne.st'
          })
          this.login.email = null
          this.login.password = null
          this.login.error = null
          this.getUsers()
          window.location.replace(process.env.dashboard)
        }
      })
    },
    getUsers () {
      this.$axios.$get(`${process.env.api}/api/user`).then((response) => {
      })
    }
  }
}
</script>

<style lang="scss">
  @import './_form.scss';
</style>
