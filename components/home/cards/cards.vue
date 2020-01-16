<template lang="pug">
.cards
  .container
    .cards__wrapper
      .cards__item(v-for="(item, index) in cards" :key="index" :class="`cards__item--${item.color}`")
        .cards__item-label {{item.label}}
        .cards__item-illustration
        .cards__item-text
          span {{item.title}}
          |  {{item.text}}
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          color: 'orange',
          label: 'Brainstorms',
          title: 'Team focus.',
          text: 'Kick-off ideas fast with reusable block injection and the smart asset library.'
        },
        {
          color: 'pink',
          label: 'Creative ads',
          title: 'Creative ads.',
          text: 'Kick-off ideas fast with reusable block injection and the smart asset library.'
        },
        {
          color: 'green',
          label: 'Collaboration',
          title: 'Collaboration.',
          text: 'Kick-off ideas fast with reusable block injection and the smart asset library.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "./_cards.scss";
</style>
