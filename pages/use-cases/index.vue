<template lang="pug">
  .usecases
    section-cases
</template>

<script>
import cases from '@/components/use-cases/cases/cases'

export default {
  components: {
    'section-cases': cases
  }
}
</script>

<style lang="scss">
  .usecases {
    background-color: #F3EAE5;
    margin: 0 0 -85px;
  }
</style>
