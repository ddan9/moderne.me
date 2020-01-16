<template lang="pug">
.story
  .container
    .story__wrapper
      .story__img
        img(src="@/assets/images/illustrations/story-monkey.png" srcset="@/assets/images/illustrations/story-monkey@2x.png 2x")
      h1.story__title Enabling to focus on&nbsp;what&nbsp;you do best
      .story__lead The digitalization of the workplace promised to make work better for humans. But instead of removing distractions it multiplied them. We set out to fix that.
      .story__text.story__text--1
        p A great career shouldn’t come at the expense of your identity, but this is a tradeoff many of us have to make. This Latinx Heritage Month, we examine the role that remote work plays in preserving Latinx culture across the U.S.
      .story__images.story__images--1
        .story__images-item.story__images-item--1
      .story__text.story__text--2
        p In life and in business, we talk a lot about trade-offs. We learn that we can’t have it all, that there are certain things we need to sacrifice to get ahead in life. And as a Latinx person, that often means trading off between two of the most important values we have: our careers and our Latinx identity.
        p Some people access that identity through their role in their family and community. Some, through the culture of the city or region they call home. And others, in the way they dress, the words they choose, or the person they are when they don’t have to wear a mask.
      section-quote
      .story__text.story__text--3
        p We have employees living in cities across the United States, so I explored this idea with the Latinx community at Abstract. We were talking about what it means to work remotely for a company that cares about inclusion, when Lesley Alegría said, “My family left their country for better economic opportunities. I don’t even have to leave my house.” It was a mic-drop moment to which we all could relate.
        p Looking at remote work as inclusion work opens up tech careers to people without asking them to make trade-offs between who they are and who they want to become. Employers with this mindset don’t ask you to decide what’s more important: your promotion or your accent, your department meeting or your sobrina’s confirmation, your onboarding or your abuelo’s hospice bedside, your career path or owning a home in your family neighborhood.
        p Remote work is a huge gift in the preservation of underrepresented cultural identities, families, and communities — one that we realize is also a privilege for those of us who have access to it. So this Latinx Heritage Month, we want to share some of the stories our team shared about the trade-offs they aren’t making and how that is impacting their lives.
      .story__text.story__text--4
        h2.story__title--h2 Why salespeople need to embrace authenticity
        p Remote work is a huge gift in the preservation of underrepresented cultural identities, families,&nbsp;and communities — one that we realize is also a privilege for those of us who have access to it. So this Latinx Heritage Month, we want to share some of the stories our team shared about the trade-offs they aren’t making and how that is impacting their lives.
      .story__images.story__images--2
        .story__images-item.story__images-item--2
        .story__images-item.story__images-item--2
      .story__text.story__text--5
        p Looking at remote work as inclusion work opens up tech careers to people without asking them to make trade-offs between who they are and who they want to become. Employers with this mindset don’t ask you to decide what’s more important: your promotion or your accent, your department meeting or your sobrina’s confirmation, your onboarding or your abuelo’s hospice bedside, your career path or owning a home in your family neighborhood.
      .story__images.story__images--3
        .story__images-item.story__images-item--3
      .story__text.story__text--6
        p Employers with this mindset don’t ask you to decide what’s more important: your promotion or your accent, your department meeting or your sobrina’s confirmation, your onboarding or your abuelo’s hospice bedside, your career path or owning a home in your family neighborhood.
        p Remote work is a huge gift in the preservation of underrepresented cultural identities, families, and communities — one that we realize is also a privilege for those of us who have access to it. So this Latinx Heritage Month.
        p
          | We have employees living in cities across the United States, so I explored this idea with the Latinx community at Abstract. We were talking about what it means to work remotely for a company that cares about inclusion, when Lesley Alegría said, “My family left their country for better economic opportunities. I don’t even have to leave my house.” It was a mic-drop moment to which we all could relate.
          br
          br
</template>

<script>
import quote from '@/components/ui/quote/quote'
export default {
  components: {
    'section-quote': quote
  },
  props: {
  }
}
</script>

<style lang="scss">
  @import "./_story.scss";
</style>
