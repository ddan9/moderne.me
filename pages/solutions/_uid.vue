<template lang="pug">
  .solution
    .container
      SolutionHeader(
        :data="solution"
      )
      SolutionContent(
        :data="solution"
      )
      SolutionPricing(
        :data="solution"
      )
</template>

<script>
/* eslint-disable */
import _ from 'lodash'
import SolutionHeader from '../../components/solutions/solution/solution-header/solution-header'
import SolutionPricing from '../../components/solutions/solution/solution-pricing/solution-pricing'
import SolutionContent from '../../components/solutions/solution/solution-content/solution-content'

export default {
  components: {
    SolutionContent,
    SolutionPricing,
    SolutionHeader
  },
  head: {
    title: 'Solutions'
  },
  data () {
    return {
      id: this.$nuxt.$route.params.uid,
      solutions: [
        {
          id: "for-agencies",
          color: "#FF9C5F",
          header: {
            title: "Moderne for Agencies",
            lead: "Unleash the full potential of your creative team!"
          },
          content: [
            {
              type: 'example',
              intro: 'A nonprofit organization launches a campaign on International Students\' Day to raise awareness of a teenager\'s career aspirations.',
              cards: [
                {
                  type: 'Insight',
                  title: 'Teenagers’ career aspirations say 47% of boys and 53 % of girls expect to work in one of just 10 popular jobs…',
                  label: 'Research Gate, Sep’19'
                },
                {
                  type: 'Idea',
                  title: 'Insta Novels by New York Library: Bringing Classic Literature to Instagram Stories.',
                  image: '111'
                },
                {
                  type: 'Trend',
                  title: 'Major Tech Innovations for School Bus Transportation.',
                  label: 'School Travel Manager, Jun’19',
                  image: '111'
                },
                {
                  type: 'Idea',
                  title: 'CSR campaign based on the insight that the ride on the bus to school “is the most boring part of the day.”',
                  image: '111'
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
                  image: '111'
                }
              ],
              ideas: [
                'Ask teenagers about new occupations and change their descriptions on Wikipedia according to the actual teenager\'s understanding of each profession.',
                '"The smartest school Bus": the first-ever school bus that knows everything! During the bus ride, kids can do virtual tours to different offices around the world and ask any questions about future occupations.',
                'Connect kids from different cities or countries who are seating at the same bus seats. Use any popular messenger on mobile devices.'
              ]
            }
          ],
          pricing: {
            number: 1
          }
        },
        {
          id: "for-brands",
          color: "#6D63D4",
          header: {
            title: "Moderne for Brands",
            lead: "Find the \"A-ha!\" moment quickly"
          },
          pricing: {
            number: 2
          }
        },
        {
          id: "for-startups",
          color: "#269D9B",
          header: {
            title: "Moderne for Startups",
            lead: "Stand out from your competitors with creative approach"
          },
          pricing: {
            number: 3
          }
        }
      ]
    }
  },
  computed:  {
    solution: function () {
      return _.find(this.solutions, { 'id': this.$nuxt.$route.params.uid })
    }
  }
}
</script>

<style lang="scss" scoped>
.solution {
  padding: 170px 0 0;
  margin: 0 0 -105px;

  @include mobile {
    padding: vmin(100) 0 0;
    margin: initial;
  }
}
</style>
