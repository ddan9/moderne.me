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
              type: 'line',
              alias: '3-cards',
              reverse: false,
              title: 'Save hours or even days of research time',
              text: 'Stop Googling! Get tons of highly tailored, market and consumer insights, advertising ideas, hottest trends, and innovations. Connect your creative ideas to emerging consumer needs and wants.'
            },
            {
              type: 'line',
              alias: 'inputs',
              reverse: true,
              title: 'Set the key goals of your next campaign',
              text: 'Set the details of your creative brief: target audience info, goals&objectives, tone of voice, media channels, etc. to relevant data.'
            },
            {
              type: 'line',
              alias: 'moodboard',
              reverse: false,
              title: 'Personal workspace for each teammate',
              text: 'Keep all your creative work in one place: create ideas, discuss with your teammates, make notes, collect mood boards, praise the best ideas.'
            },
            {
              type: 'line',
              alias: 'today',
              reverse: true,
              title: 'Central place to manage all ideas',
              text: 'Keep all ideas from your creative team in one place to make sure that every member is heard.'
            },
            {
              type: 'line',
              alias: 'lions',
              reverse: false,
              title: 'Feed your creative mind',
              text: 'Sell in your ideas using evidence from award-winning advertising effectiveness case studies. Find your next brilliant idea! Impress you clients. Win new ones!'
            },
            {
              type: 'line',
              alias: 'favorite',
              reverse: true,
              title: 'All your creative briefs in one place',
              text: 'Manage and update all your marketing briefs easily to make sure that your creative team is on track.'
            },
            {
              type: 'line',
              alias: 'export',
              reverse: false,
              title: 'Instant export of your assets',
              text: 'Prepare countless pitches and presentations? Export all the insights, references, trends you saved or ideas you created to PDF or PPT easily.'
            },
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
                  image: 'card__2'
                },
                {
                  empty: true
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
                  empty: true
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
          content: [
            {
              type: 'line',
              alias: '3-cards',
              reverse: false,
              title: 'Save hours or even days of research time',
              text: 'Stop Googling! Get tons of highly tailored, market and consumer insights, advertising ideas, hottest trends, and innovations. Connect your creative ideas to emerging consumer needs and wants.'
            },
            {
              type: 'line',
              alias: 'inputs',
              reverse: true,
              title: 'Set the key goals of your next campaign',
              text: 'Set the details of your creative brief: target audience info, goals&objectives, tone of voice, media channels, etc. to relevant data.'
            },
            {
              type: 'line',
              alias: 'lions',
              reverse: false,
              title: 'Feed your creative mind',
              text: 'Sell in your ideas using evidence from award-winning advertising effectiveness case studies. Find your next brilliant idea! Impress you clients. Win new ones!'
            },
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
                  image: 'card__2'
                },
                {
                  empty: true
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
                  empty: true
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
              ],
              ideas: [
                'Ask teenagers about new occupations and change their descriptions on Wikipedia according to the actual teenager\'s understanding of each profession.',
                '"The smartest school Bus": the first-ever school bus that knows everything! During the bus ride, kids can do virtual tours to different offices around the world and ask any questions about future occupations.',
                'Connect kids from different cities or countries who are seating at the same bus seats. Use any popular messenger on mobile devices.'
              ]
            },
            {
              type: 'line',
              alias: 'today',
              reverse: true,
              title: 'Central place to manage all ideas',
              text: 'Keep all ideas from your creative team in one place to make sure that every member is heard.'
            },
            {
              type: 'line',
              alias: 'moodboard',
              reverse: false,
              title: 'Personal workspace for each teammate',
              text: 'Keep all your creative work in one place: create ideas, discuss with your teammates, make notes, collect mood boards, praise the best ideas.'
            },
            {
              type: 'line',
              alias: 'favorite',
              reverse: true,
              title: 'All your creative briefs in one place',
              text: 'Manage and update all your marketing briefs easily to make sure that your creative team is on track.'
            },
            {
              type: 'line',
              alias: 'export',
              reverse: false,
              title: 'Instant export of your assets',
              text: 'Prepare countless pitches and presentations? Export all the insights, references, trends you saved or ideas you created to PDF or PPT easily.'
            }
          ],
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
          content: [
            {
              type: 'line',
              alias: '3-cards',
              reverse: false,
              title: 'Save hours or even days of research time',
              text: 'Stop Googling! Get access to lots of highly tailored market and consumer insights, advertising ideas, trends and innovations. Connect your creative ideas to emerging consumer needs and wants.'
            },
            {
              type: 'line',
              alias: 'inputs',
              reverse: true,
              title: 'Set the key goals of your next campaign',
              text: 'Set the details of your creative brief: target audience info, goals & objectives, tone of voice, media channels, etc. to relevant data.'
            },
            {
              type: 'line',
              alias: 'lions',
              reverse: false,
              title: 'Feed your creative mind',
              text: 'Enhance your ideas using evidence from award-winning advertising effectiveness case studies. Find your next brilliant idea with ease! Impress your clients and win new ones!'
            },
            {
              type: 'example',
              intro: 'A non-profit organization launches a campaign on International Students\' Day to raise awareness of a teenager\'s career aspirations.',
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
                  empty: true
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
                  empty: true
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
              ],
              ideas: [
                'Ask teenagers about new occupations and change their descriptions on Wikipedia according to the actual teenager\'s understanding of each profession.',
                '"The smartest school Bus": the first-ever school bus that knows everything! During the bus ride, kids can do virtual tours to different offices around the world and ask any questions about future occupations.',
                'Connect kids from different cities or countries who are sitting in the same bus seats. Use any popular messenger on mobile devices.'
              ]
            },
            {
              type: 'line',
              alias: 'favorite',
              reverse: true,
              title: 'All of your creative briefs in one place',
              text: 'Manage and update all your marketing briefs easily to make sure that your creative team is on track.'
            },
            {
              type: 'line',
              alias: 'export',
              reverse: false,
              title: 'Instantly export your assets',
              text: 'Do you need to prepare countless pitches and presentations? Export all the insights, references and trends you have saved or ideas you have created to PDF or PPT easily.'
            }
          ],
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
  },
  mounted: function () {
    console.log(this.$route)
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
