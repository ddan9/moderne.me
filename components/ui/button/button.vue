<template lang="pug">
nuxt-link.button(:to="link" :style="`background-color: ${bgColor}; color: ${textColor};`") {{text}}
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '#'
    },
    text: {
      type: String,
      default: 'Button text'
    },
    bgColor: {
      type: String,
      default: '#FF7E85'
    },
    textColor: {
      type: String,
      default: '#ffffff'
    }
  }
}
</script>

<style lang="scss">
  @import "./_button.scss";
</style>
