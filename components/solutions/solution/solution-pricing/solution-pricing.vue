<template lang="pug">
.solution-pricing
  .container
    .solution-pricing__title Our Pricing
    .solution-pricing__wrapper
      .solution-pricing__table(
        :style="`color: ${data.color}`"
        :class="`solution-pricing__table--active-${data.pricing.number}`"
        )
        .solution-pricing__table-row.solution-pricing__table-header
          .solution-pricing__table-col
          .solution-pricing__table-col For Agencies
          .solution-pricing__table-col For Brands
          .solution-pricing__table-col For Startups
        .solution-pricing__table-row
          .solution-pricing__table-col Full access to our database of insights, trends, ideas and innovations
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-text one industry
        .solution-pricing__table-row
          .solution-pricing__table-col Users
          .solution-pricing__table-col
            span.solution-pricing__table-text custom
          .solution-pricing__table-col
            span.solution-pricing__table-text up to 5
          .solution-pricing__table-col
            span.solution-pricing__table-text 1
        .solution-pricing__table-row
          .solution-pricing__table-col Campaigns
          .solution-pricing__table-col
            span.solution-pricing__table-text unlimited
          .solution-pricing__table-col
            span.solution-pricing__table-text up to 3
          .solution-pricing__table-col
            span.solution-pricing__table-text 1
        .solution-pricing__table-row
          .solution-pricing__table-col Collaboration platform
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-empty
        .solution-pricing__table-row
          .solution-pricing__table-col Daily updates
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
        .solution-pricing__table-row
          .solution-pricing__table-col Trending topics
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
        .solution-pricing__table-row
          .solution-pricing__table-col Unlimited export
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
        .solution-pricing__table-row
          .solution-pricing__table-col Custom monthly reports
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-text one industry
          .solution-pricing__table-col
            span.solution-pricing__table-empty
        .solution-pricing__table-row
          .solution-pricing__table-col Custom API integrations
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-empty
          .solution-pricing__table-col
            span.solution-pricing__table-empty
        .solution-pricing__table-row
          .solution-pricing__table-col In-person presentation
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-empty
          .solution-pricing__table-col
            span.solution-pricing__table-empty
        .solution-pricing__table-row
          .solution-pricing__table-col Dedicated manager
          .solution-pricing__table-col
            span.solution-pricing__table-bullet
          .solution-pricing__table-col
            span.solution-pricing__table-empty
          .solution-pricing__table-col
            span.solution-pricing__table-empty
        .solution-pricing__table-row.solution-pricing__table-prices
          .solution-pricing__table-col
          .solution-pricing__table-col
            span.solution-pricing__table-price-label Custom pricing
          .solution-pricing__table-col
            span.solution-pricing__table-price-value $689
            span.solution-pricing__table-price-label
              | per month
              br
              | billed annually
          .solution-pricing__table-col
            span.solution-pricing__table-price-value $379
            span.solution-pricing__table-price-label
              | per month
              br
              | billed annually
        .solution-pricing__table-row.solution-pricing__table-buttons
          .solution-pricing__table-col
          .solution-pricing__table-col
            .solution-pricing__table-button(:class="{'solution-pricing__table-button--active': data.pricing.number === 1}")
              nuxt-link.solution-pricing__table-button-text(to="#") Request a quote
          .solution-pricing__table-col
            .solution-pricing__table-button(:class="{'solution-pricing__table-button--active': data.pricing.number === 2}")
              nuxt-link.solution-pricing__table-button-text(to="/get-access") Get Access
          .solution-pricing__table-col
            .solution-pricing__table-button(:class="{'solution-pricing__table-button--active': data.pricing.number === 3}")
              nuxt-link.solution-pricing__table-button-text(to="/get-access") Get Access

</template>

<script>
export default {
  // eslint-disable-next-line
  props: ['data']
}
</script>

<style lang="scss">
  @import "solution-pricing";
</style>
