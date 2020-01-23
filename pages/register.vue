<template lang="pug">
.register
  section-header(:activePoint="activeStep")
  section-forms(:activePoint="activeStep")
</template>

<script>
import registerHeader from '~/components/register/header/header'
import registerForms from '~/components/register/data/data'

export default {
  components: {
    'section-header': registerHeader,
    'section-forms': registerForms
  },
  head: {
    title: 'Sign Up'
  },
  data () {
    return {
      activeStep: 1
    }
  }
}
</script>

<style lang="scss" scoped>
  /*.pricing {*/
  /*  padding: 203px 0 0;*/
  /*}*/
</style>
