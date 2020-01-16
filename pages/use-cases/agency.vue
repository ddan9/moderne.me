<template lang="pug">
  .case
    section-hero(
      color="agency"
      category="Category"
      title="Advertising Agency"
      lead="In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit. Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar loborti."
    )
    section-hero-title(
      lead="Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae es."
    )
    .container.case__content
      .story__wrapper
        .story__text.story__text--1
          p In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fus.
        .story__images.story__images--1
          .story__images-item.story__images-item--1
        .story__text.story__text--2
          p Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id.
          p Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rut.
        section-quote(color="#269D9B")
        .story__text.story__text--3
          p We have employees living in cities across the United States, so I explored this idea with the Latinx community at Abstract. We were talking about what it means to work remotely for a company that cares about inclusion, when Lesley Alegría said, “My family left their country for better economic opportunities. I don’t even have to leave my house.” It was a mic-drop moment to which we all could relate.
          p Looking at remote work as inclusion work opens up tech careers to people without asking them to make trade-offs between who they are and who they want to become. Employers with this mindset don’t ask you to decide what’s more important: your promotion or your accent, your department meeting or your sobrina’s confirmation, your onboarding or your abuelo’s hospice bedside, your career path or owning a home in your family neighborhood.
          p Remote work is a huge gift in the preservation of underrepresented cultural identities, families, and communities — one that we realize is also a privilege for those of us who have access to it. So this Latinx Heritage Month, we want to share some of the stories our team shared about the trade-offs they aren’t making and how that is impacting their lives.
        .story__text.story__text--4
          h2.story__title--h2(style="color: #3E3C43") Why salespeople need to embrace authenticity
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
    section-cta
</template>

<script>
import heroTitle from '~/components/ui/hero/hero'
import hero from '@/components/use-cases/case/hero/hero'
import quote from '@/components/ui/quote/quote'
import cta from '@/components/home/cta/cta'

export default {
  components: {
    'section-hero': hero,
    'section-hero-title': heroTitle,
    'section-cta': cta,
    'section-quote': quote
  }
}
</script>

<style lang="scss">
  .case {
    margin: 0 0 -60px;

    &__content {
      margin-bottom: 139px;
    }
  }
</style>
