<template lang="pug">
.ideas-based
  .ideas-based__items
    .ideas-based__item(v-for="idea in ideas")
      .ideas-based__item-image(
        :style="`background-image: url(${idea.idea_image.url})`"
      )
      .ideas-based__item-content
        span {{idea.idea_title}}&nbsp;
        | {{idea.idea_text[0].text}}
</template>

<script>
export default {
  props: ['ideas']
}
</script>

<style lang="scss" scoped>
.ideas-based {
  margin: 0 -48px 48px;
  &__item {
    display: grid;
    grid-template-columns: 148px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 35px;
    grid-row-gap: 0px;
    border-bottom: 2px solid #fff;
    padding: 53px 48px 56px;
    &:nth-child(1) {
      padding-top: 0;
    }
    &-image {
      display: block;
      position: relative;
      width: 148px;
      height: 148px;
      border-radius: 50%;
      border: 3px solid #fff;
      box-sizing: border-box;
    }
    &-content {
      font-size: 21px;
      line-height: 32px;
      color: #080809;
      letter-spacing: 0;
      span {
        font-weight: bold;
        font-size: 21px;
        line-height: 32px;
      }
    }
  }
}
</style>
