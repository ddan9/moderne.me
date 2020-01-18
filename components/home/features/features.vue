<template lang="pug">
  .features
    .container
      .features__item(v-for="(item, index) in features.items" :key="index")
        //.features__item-image
        img.features__item-image--1(v-if='index === 0' src="@/assets/images/illustrations/features-01.png" srcset="@/assets/images/illustrations/features-01@2x.png 2x")
        img.features__item-image--2(v-if='index === 1' src="@/assets/images/illustrations/features-02.png" srcset="@/assets/images/illustrations/features-02@2x.png 2x")
        .features__item-content
          h2.features__item-title {{item.title}}
          .features__item-text {{item.text}}
</template>

<script>
export default {
  props: {},
  data () {
    return {
      features: {
        items: [
          {
            title: 'Mauris non tempor quam, lacinia sapien.',
            text: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit. Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar loborti.'
          },
          {
            title: 'Donec facilisis tortor ut augue lacini.',
            text: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum.'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./_features.scss";
</style>
