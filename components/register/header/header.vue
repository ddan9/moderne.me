<template lang="pug">
.container
  .register-header
    .register-header__steps
      .register-header__step(
        :class="{'register-header__step--active': index === activePoint, 'register-header__step--not-active': index < activePoint}"
        v-for="(item, index) in steps"
        :key="index"
        @click="changeStep(index)")
          | {{index + 1}}
          .register-header__step-icon(v-if="index === activePoint")
            monkey
    .register-header__title
      | {{steps[activePoint].title}}
    .register-header__lead
      | {{steps[activePoint].lead}}
</template>

<script>
import monkey from '@/assets/images/ui/register-icon.svg?inline'

export default {
  components: {
    monkey
  },
  props: {
    activePoint: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      steps: [
        {
          title: 'Campaign’s details',
          lead: 'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tr.'
        },
        {
          title: 'Goals & Objectives',
          lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit.'
        },
        {
          title: 'Target Audience',
          lead: 'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id.'
        },
        {
          title: 'Tone of Voice',
          lead: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra es.'
        },
        {
          title: 'Budget',
          lead: 'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id.'
        }
      ]
    }
  },
  methods: {
    changeStep (i) {
      // if (i < this.activePoint) {
      //   this.$parent.activeStep = i
      // } else if (i > this.activePoint) {
      //   event.preventDefault()
      // }
      this.$parent.activeStep = i
    }
  }
}
</script>

<style lang="scss">
  @import './_header.scss';
</style>
