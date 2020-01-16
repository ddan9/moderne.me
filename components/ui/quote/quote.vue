<template lang="pug">
.story__quote
  .story__quote-text(v-html="text" :style="`color: ${color}`")
  .story__quote-user
    img.story__quote-user-photo(src="@/assets/images/users/quote-user.png" srcset="@/assets/images/users/quote-user@2x.png 2x")
    .story__quote-user-name(v-html="userName")
    .story__quote-user-position(v-html="userPosition")
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'My family left their country for better economic opportunities. I don’t even have to leave my house.'
    },
    userPhoto: {
      type: String,
      default: 'quote-user.png'
    },
    userName: {
      type: String,
      default: 'Lesley Alegría'
    },
    userPosition: {
      type: String,
      default: 'CRO Expert at Beau'
    },
    color: {
      type: String,
      default: '#E48144'
    }
  }
}
</script>
