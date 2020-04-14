<template lang="pug">
.insight-more
  .container
    .insight-more__wrapper
      .insight-more__title More insights, trends, ideas and innovations from&nbsp;Moderne&nbsp;🐵
      .insight-more__cards
        .insight-more__card(
          v-for="card in cards"
          :class="{'insight-more__card--double': card.image, 'insight-more__card--empty': card.empty}"
        )
          .insight-more__card-content
            .insight-more__card-title {{ card.title }}
            .insight-more__card-label {{ card.label }}
          .insight-more__card-image(v-if="card.image")
            .insight-more__card-photo(
              :style="`background: url('/cards/${card.image}.jpg');`"
            )
            .insight-more__card-type(
              :class="{'insight-more__card-type--idea': card.type === 'Idea', 'insight-more__card-type--trend': card.type === 'Trend'}"
            )
              iconType.insight-more__card-type-icon
              | {{ card.type }}
          .insight-more__card-type(
            :class="{'insight-more__card-type--idea': card.type === 'Idea', 'insight-more__card-type--trend': card.type === 'Trend'}"
            v-else
          )
            iconType.insight-more__card-type-icon
            | {{ card.type }}
</template>

<script>
import iconType from '@/assets/images/icons/icon-cards.svg?inline'

export default {
  components: {
    iconType
  },
  data () {
    return {
      cards: [
        {
          type: 'Insight',
          title: 'Teenagers’ career aspirations say 47% of boys and 53 % of girls expect to work in one of just 10 popular jobs…',
          label: 'Research Gate, Sep’19'
        },
        {
          type: 'Idea',
          title: 'Insta Novels by New York Library: Bringing Classic Literature to Instagram Stories.',
          image: 'card__2'
        },
        {
          type: 'Insight',
          title: 'Less than 1% of children stated they heard about the job from a volunteer from the world of work…',
          label: 'Education & Employers, Dec’19'
        },
        {
          type: 'Idea',
          title: 'CSR campaign based on the insight that the ride on the bus to school “is the most boring part of the day.”',
          image: 'card__4'
        },
        {
          type: 'Trend',
          title: 'Major Tech Innovations for School Bus Transportation.',
          label: 'School Travel Manager, Jun’19',
          image: 'card__3'
        },
        {
          type: 'Idea',
          title: 'CSR campaign based on the insight that the ride on the bus to school “is the most boring part of the day.”',
          image: 'card__4'
        },
        {
          type: 'Insight',
          title: 'UK studies: Children’s career aspirations are often shaped, molded and restricted by gender stereotyping…',
          label: 'Drawing the Future, Jan’19 report'
        },
        {
          type: 'Insight',
          title: 'Less than 1% of children stated they heard about the job from a volunteer from the world of work…',
          label: 'Education & Employers, Dec’19'
        },
        {
          type: 'Trend',
          title: 'Google Expeditions are aiming to make classroom AR more attainable, with a wide range of experiences…',
          image: 'card__7'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "more";
</style>
