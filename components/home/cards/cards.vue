<template lang="pug">
.cards
  .container
    .cards__wrapper
      .cards__item(v-for="(item, index) in cards" :key="index" :class="`cards__item--${item.color}`")
        .cards__item-label {{item.label}}
        img.cards__item-illustration--1(v-if="index === 0" src="@/assets/images/illustrations/cards-1.png" srcset="@/assets/images/illustrations/cards-1@2x.png 2x")
        img.cards__item-illustration--2(v-if="index === 1" src="@/assets/images/illustrations/cards-2.png" srcset="@/assets/images/illustrations/cards-2@2x.png 2x")
        img.cards__item-illustration--3(v-if="index === 2" src="@/assets/images/illustrations/cards-3.png" srcset="@/assets/images/illustrations/cards-3@2x.png 2x")
        //.cards__item-illustration
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
          color: 'green',
          label: 'Collaboration',
          title: 'Collaboration.',
          text: 'Kick-off ideas fast with reusable block injection and the smart asset library.'
        },
        {
          color: 'pink',
          label: 'Creative ads',
          title: 'Creative ads.',
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
