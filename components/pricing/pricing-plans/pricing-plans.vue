<template lang="pug">
.pricing-plans
  .pricing-plans__controls
    .pricing-plans__controls-title
      | monthly
    .pricing-plans__controls-switch(:class="{'pricing-plans__controls-switch--active': !priceType}" @click="changePriceType()")
      .pricing-plans__controls-switch-indicator
    .pricing-plans__controls-title
      | yearly
      span (25%&nbsp;off)
  .pricing-plans__items
    img.pricing-plans__illustration(src="@/assets/images/illustrations/pricing-head.png" srcset="@/assets/images/illustrations/pricing-head@2x.png 2x")
    .pricing-plans__item(v-for="(item, index) in plans" :key="index" :style="`color: ${item.color}`")
      .pricing-plans__item-title {{item.title}}
      .pricing-plans__item-content
        .pricing-plans__item-lead {{item.lead}}
        .pricing-plans__item-features
          .pricing-plans__item-feature(v-for="(item, index) in item.features" :key="index")
            span {{item.title}}
      .pricing-plans__item-meta
        .pricing-plans__item-price
          .pricing-plans__item-price-value(v-if="priceType") {{ formatPrice(item.priceMouth) }}
          .pricing-plans__item-price-value(v-else) {{ formatPrice(item.priceYear) }}
          .pricing-plans__item-price-period per month
        .pricing-plans__item-buttons
          nuxt-link.pricing-plans__item-button(to="/get-access")
            | Get Access
            svg(viewbox='0 0 38 21' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink')
              g#Page-1(stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round')
                g#Moderne-Pricing(transform='translate(-1132.000000, -769.000000)' stroke='currentColor' stroke-width='3')
                  g#plan(transform='translate(236.000000, 472.000000)')
                    g#pricing-arrow(transform='translate(897.500000, 299.000000)')
                      path(d='M0,9.5 L33.5,9 M25.5,0 L34,8.5 M34.5,9 L26,17.5')
  .pricing-plans__faq
    .pricing-plans__faq-items
      .pricing-plans__faq-item(v-for="(item, index) in faq" :key="index")
        .pricing-plans__faq-item-title {{item.title}}
        .pricing-plans__faq-item-text {{item.text}}
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      priceType: true,
      plans: [
        {
          title: 'Advertising Agency',
          lead: 'The full power of our platform combines both AI-algorithms and our art-directors to find the best-in-class ideas and insights for your ads.',
          features: [
            {
              title: 'Access to thousands of creative insights and ideas tailored to your marketing needs as well as the help of our human art-directors.'
            },
            {
              title: 'Unlimited active marketing campaigns.'
            },
            {
              title: 'Unlimited users'
            }
          ],
          priceMouth: 1289,
          priceYear: 966,
          color: '#FF9C5F'
        },
        {
          title: 'In-House Creative Team',
          lead: 'Fit for in-house marketing teams in larger companies.',
          features: [
            {
              title: 'Access to thousands of creative insights and ideas tailored to your marketing needs.'
            },
            {
              title: '5 active marketing campaigns at once.'
            },
            {
              title: 'Up to 20 users'
            }
          ],
          priceMouth: 789,
          priceYear: 590,
          color: '#6D63D4'
        },
        {
          title: 'Startup',
          lead: 'Best for small and medium companies who run their marketing campaigns occasionally.',
          features: [
            {
              title: 'Access to hundreds of creative insights and ideas tailored to your marketing needs.'
            },
            {
              title: 'One active marketing campaign at once.'
            },
            {
              title: 'Up to 5 users'
            }
          ],
          priceMouth: 389,
          priceYear: 290,
          color: '#269D9B'
        }
      ],
      faq: [
        {
          title: 'How can I pay?',
          text: 'You’ll be able to set up credit card payments. Get in touch with our team if you’d prefer to be billed using a different payment method.'
        },
        {
          title: 'How will I be billed?',
          text: 'If you’ve picked monthly billing, you will be billed each month. If you’ve selected annual billing, you will pay your yearly amount upfront.'
        },
        {
          title: 'What if I want to cancel?',
          text: 'If you have your reasons for cancellation, you may cancel at any time by going to your account page and subscriptions section.'
        },
        {
          title: 'Who is behind Moderne?',
          text: 'Moderne is built by a team of independent art directors and copywriters who worked in the world\'s largest advertising agencies and have been recognized with many international advertising awards, including Cannes Lions.'
        },
        {
          title: 'Have any other questions?',
          text: 'Contact us via support@moderne.st'
        }
      ]
    }
  },
  methods: {
    formatPrice (value) {
      const val = (value / 1).toFixed(0).replace(',', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    changePriceType () {
      this.priceType = !this.priceType
    }
  }
}
</script>

<style lang="scss">
  @import './_pricing-plans.scss';
</style>
