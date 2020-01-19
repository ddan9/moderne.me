<template lang="pug">
.story__quote(:class="{'story__quote--mini': type === 'mini'}")
  .story__quote-text(v-if="type !== 'mini'" v-html="text" :style="`color: ${color}`")
  .story__quote-user
    img.story__quote-user-photo(
      :src="require(`@/assets/images/users/${userPhoto}.jpg`)"
      :srcset="require(`@/assets/images/users/${userPhoto}@2x.jpg`)+' 2x'"
    )
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
    },
    type: {
      type: String,
      default: null
    }
  }
}
</script>
