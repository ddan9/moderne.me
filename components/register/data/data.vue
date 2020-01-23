<template lang="pug">
.container
  .register-data
    .register-data__forms
      .register-data__form--details(v-if="activePoint === 0")
      .register-data__form--goals(v-else-if="activePoint === 1")
        register-input(
          v-for="(item, index) in forms[activePoint].inputs"
          :type="item.type"
          :label="item.label"
          :items="item.tags"
        )
      .register-data__form--tone(v-else-if="activePoint === 3")
        register-input(
          v-for="(item, index) in forms[activePoint].inputs"
          :type="item.type"
          :label="item.label"
          :items="item.tags"
          :small="true"
        )
      .register-data__buttons
        .register-data__button--link Go back
        .register-data__button--normal Next step
    .register-data__illustrations
      img.register-data__illustration--details(v-if="activePoint === 0" src="@/assets/images/register/details.png" srcset="@/assets/images/register/details@2x.png 2x")
      img.register-data__illustration--goals(v-if="activePoint === 1" src="@/assets/images/register/goals.png" srcset="@/assets/images/register/goals@2x.png 2x")
      img.register-data__illustration--target(v-if="activePoint === 2" src="@/assets/images/register/target.png" srcset="@/assets/images/register/target@2x.png 2x")
      img.register-data__illustration--tone(v-if="activePoint === 3" src="@/assets/images/register/tone.png" srcset="@/assets/images/register/tone@2x.png 2x")
      img.register-data__illustration--target(v-if="activePoint === 4" src="@/assets/images/register/budget.png" srcset="@/assets/images/register/budget@2x.png 2x")
</template>

<script>
import registerInput from '~/components/register/input/input'

export default {
  components: {
    'register-input': registerInput
  },
  props: {
    activePoint: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      forms: [
        {
          title: 'details',
          inputs: [
            {
              type: 'text',
              id: 'title',
              placeholder: 'Title',
              value: null
            },
            {
              type: 'text',
              id: 'title',
              placeholder: 'Title',
              value: null
            }
          ]
        },
        {
          title: 'goals',
          inputs: [
            {
              type: 'tags',
              label: 'Please pick relevant marketing goals and objectives:',
              tags: [
                'Increase sales',
                'Enhance customer relationships',
                'Grow market share',
                'Target new customers',
                'Launch new products or services',
                'Increase profit',
                'Enter new markets',
                'Build brand awareness',
                'Increase targeted traffic',
                'Get more leads',
                'Increase customer retention',
                'Social influence',
                'Grow an email list',
                'Improve conversion rates'
              ]
            }
          ]
        },
        {

        },
        {
          title: 'tone',
          inputs: [
            {
              type: 'tags',
              label: 'Please pick what describes the campaign best:',
              tags: [
                'Comical',
                'Witty',
                'Playful',
                'Friendly',
                'Casual',
                'Cheerful',
                'Aggressive',
                'Empowering',
                'Personal',
                'Informative',
                'Professional',
                'Ambitious',
                'Inspiring',
                'Musical',
                'Plain',
                'Straightforward',
                'Heartfelt',
                'Trustworthy',
                'Engaging',
                'Unexpected',
                'Poetic',
                'Authentic',
                'Irreverent',
                'Action-oriented',
                'Simple',
                'Practical',
                'Authoritative',
                'Confident'
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "./_data.scss";
</style>
