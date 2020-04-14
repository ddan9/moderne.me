<template>
  <div class="post-part single container">
    <prismic-rich-text :field="slice.text" class="textslice" />
  </div>
</template>

<script>
export default {
  name: 'TextSlice',
  // eslint-disable-next-line
  props: ['slice']
}
</script>

<style lang="scss">
</style>
