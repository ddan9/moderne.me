<template lang="pug">
.pricing-plans
  .container
    .pricing-plans__controls
      .pricing-plans__controls-title
        | monthly
      .pricing-plans__controls-switch(:class="{'pricing-plans__controls-switch--active': !priceType}" @click="changePriceType()")
        .pricing-plans__controls-switch-indicator
      .pricing-plans__controls-title
        | yearly
        span (25% off)
    .pricing-plans__items
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
            nuxt-link.pricing-plans__item-button(to="#")
              | Sign up
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
          lead: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus la.',
          features: [
            {
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut.'
            },
            {
              title: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse.'
            },
            {
              title: 'Donec facilisis tortor ut augue lacinia, at viver.'
            }
          ],
          priceMouth: 1289,
          priceYear: 966,
          color: '#FF9C5F'
        },
        {
          title: 'In-House Creative Team',
          lead: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula.',
          features: [
            {
              title: 'Curabitur lobortis id lorem id bibendum. Ut id consectetur.'
            },
            {
              title: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentu.'
            },
            {
              title: 'Mauris non tempor quam, et lacinia sapien.'
            }
          ],
          priceMouth: 789,
          priceYear: 591,
          color: '#6D63D4'
        },
        {
          title: 'Startup',
          lead: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin.',
          features: [
            {
              title: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a preti.'
            },
            {
              title: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis ne.'
            },
            {
              title: 'Nam porttitor blandit accumsan. Ut vel.'
            }
          ],
          priceMouth: 389,
          priceYear: 291,
          color: '#269D9B'
        }
      ],
      faq: [
        {
          title: 'Are plans commitment-free?',
          text: 'You decide: you can pay monthly, and commit on a month-by-month basis or you can pay yearly, and commit for 12 months following your subscription.'
        },
        {
          title: 'How can I pay?',
          text: 'You’ll be able to set up credit card payments. Get in touch with our team if you’d prefer to be billed using a different payment method.'
        },
        {
          title: 'How will I be billed?',
          text: 'If you’ve picked monthly billing, you will be billed each month. If you’ve selected annual billing, you will pay your yearly amount upfront.'
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
