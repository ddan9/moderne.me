<template lang="pug">
.register-input
  .register-input__text(v-if="type === 'text'")
    input(
      type="text"
    )
  .register-input__tags(v-else-if="type === 'tags'")
    label.register-input__label {{label}}
    .register-input__tags-items
      .register-input__tags-item(:class="{'register-input__tags-item--small': small}" v-for="(item, index) in items" :key="index")
        input(type="checkbox" :id="`tag__${index}`")
        label(:for="`tag__${index}`") {{item}}
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    items: {
      type: Object,
      default: () => []
    },
    label: {
      type: String,
      default: 'Label'
    },
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import './_input.scss';
</style>
