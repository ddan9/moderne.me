<template lang="pug">
.solution-content
  .container
    .solution-content__wrapper
      .solution-content__items
        .solution-content__item(
          v-for="(content, index) in data.content"
        )
          .solution-content__item-line(
            v-if="content.type === 'line'"
            :id="`line__${content.alias}`"
            :class="{'solution-content__item-line--reverse': content.reverse}"
          )
            .solution-content__item-line-image
              img(:src="`/lines/line__${content.alias}.png`" :srcset="`/lines/line__${content.alias}@2x.png 2x`")
            .solution-content__item-line-content
              .solution-content__item-line-title {{ content.title }}
              .solution-content__item-line-lead {{ content.text }}
          .solution-content__item-example(v-else-if="content.type === 'example'")
            .solution-content__example
              .solution-content__example-intro
                .solution-content__example-intro-title Example
                .solution-content__example-intro-text {{ content.intro }}
            .solution-content__example-title
              | Feed your inspiration with&nbsp;
              span insights
              | ,&nbsp;
              span trends
              | ,&nbsp;
              span ideas
              |  from&nbsp;the 🐵 Moderne Platform…
            .solution-content__example-cards
              .solution-content__example-card(
                v-for="(card, index) in content.cards"
                :class="{'solution-content__example-card--double': card.image, 'solution-content__example-card--empty': card.empty}"
              )
                .solution-content__example-card-content
                  .solution-content__example-card-title {{ card.title }}
                  .solution-content__example-card-label {{ card.label }}
                .solution-content__example-card-image(v-if="card.image")
                  .solution-content__example-card-photo(
                    :style="`background: url('/cards/${card.image}.jpg');`"
                  )
                  .solution-content__example-card-type(
                    :class="{'solution-content__example-card-type--idea': card.type === 'Idea', 'solution-content__example-card-type--trend': card.type === 'Trend'}"
                  )
                    iconType.solution-content__example-card-type-icon
                    | {{ card.type }}
                .solution-content__example-card-type(
                  :class="{'solution-content__example-card-type--idea': card.type === 'Idea', 'solution-content__example-card-type--trend': card.type === 'Trend'}"
                  v-else
                  )
                  iconType.solution-content__example-card-type-icon
                  | {{ card.type }}
            .solution-content__example-arrows
              img(src="@/assets/images/illustrations/example__arrows.png" srcset="@/assets/images/illustrations/example__arrows@2x.png 2x")
            .solution-content__example-subtitle
              | …and find you next big idea!
            .solution-content__example-ideas
              .solution-content__example-idea(v-for="(idea, index) in content.ideas")
                | {{ idea }}
</template>

<script>
import iconType from '@/assets/images/icons/icon-cards.svg?inline'
export default {
  props: ['data'],
  components: {
    iconType
  }
}
</script>

<style lang="scss">
  @import "solution-content";
</style>
