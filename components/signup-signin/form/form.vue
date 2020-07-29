<template lang="pug">
.form
  .container
    .form__wrapper
      .form__group
        .form__title {{title}}
        .form__text(:class="{'form__text--signin': type === 'signin' || type === 'forgot' || type === 'forgotDone', 'form__text--getaccess': type === 'getaccess'}") {{text}}
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
            required
            autocomplete="email"
          )
          input.form__input#password(
            type="password"
            placeholder="Password"
            v-model="login.password"
            required
            autocomplete="password"
          )
          button.form__button(type="submit") Sign In
          .form__reset(@click="type = 'forgot'") Forgot Password?
        form.form__inputs(v-if='type === "forgot"' @submit.prevent="resetPass")
          input.form__input(
            type="email"
            placeholder="Your Email"
            v-model="login.email"
            required
            autocomplete="email"
          )
          button.form__button(type="submit") Reset my password
          .form__reset(@click="type = 'signin'") Go back
        form.form__inputs(v-if='type === "reset"' @submit.prevent="changePass")
          input.form__input(
            type="password"
            placeholder="New password"
            v-model="login.newPass"
            required
          )
          input.form__input(
            type="password"
            placeholder="New password again"
            v-model="login.newPassRepeat"
            required
          )
          button.form__button(type="submit") Change new password
        form.form__inputs(v-if='type === "forgetDone"')
          p Sent! Check your inbox
          //.form__reset(@click="type = 'signin'") Go back
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
  created () {
    if (this.$route.query.code) {
      this.type = 'reset'
    }
  },
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
        error: null,
        newPass: null,
        newPassRepeat: null
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
    changePass () {
      this.$axios.$post(`${process.env.api}/auth/reset-password`, {
        code: this.$route.query.code,
        password: this.login.newPass,
        passwordConfirmation: this.login.newPassRepeat
      }).then(() => {
        this.type = 'signin'
      }).catch((err) => {
        this.error = err.response
      })
    },
    resetPass () {
      this.$axios.$post(`${process.env.api}/auth/forgot-password`, {
        email: this.login.email
      }).then((res) => {
        if (res.ok) {
          this.type = 'forgetDone'
        }
      }).catch(() => {
        this.type = 'forgetDone'
      })
    },
    postLogin () {
      this.$axios.$post(`${process.env.api}/auth/local`, {
        identifier: this.login.email,
        password: this.login.password
      }).then((response) => {
        // Handle success.
        // console.log('Well done!')
        // console.log('User profile', response.user)
        // console.log('User token', response.jwt)
        const token = response.jwt
        this.$axios.setToken(token, 'Bearer')
        const setToken = async () => {
          await this.$cookies.set('moderne-token', token, {
            // eslint-disable-next-line
            domain: '.moderne.st'
          })
        }
        setToken().then(() => {
          this.login.email = null
          this.login.password = null
          this.login.error = null
          window.location.replace(process.env.dashboard)
        })
      })
        .catch(() => {
          // Handle error.
          // console.log('An error occurred:', error)
        })
      //   .then((response) => {
      //   // console.log(response)
      //   // if (response.message) {
      //   //   this.login.error = response.message
      //   // } else {
      //   //   const token = response.data._token
      //   //   // const domain = process.env.NODE_ENV === 'dev' ? 'localhost' : '.moderne.st'
      //   //   this.$axios.setToken(token, 'Bearer')
      //   //   const setToken = async () => {
      //   //     await this.$cookies.set('moderne-token', token, {
      //   //       // eslint-disable-next-line
      //   //       domain: '.moderne.st'
      //   //     })
      //   //   }
      //   //   setToken().then(() => {
      //   //     this.login.email = null
      //   //     this.login.password = null
      //   //     this.login.error = null
      //   //     // console.log(token)
      //   //     window.location.replace(process.env.dashboard)
      //   //   })
      //   // }
      // })
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
