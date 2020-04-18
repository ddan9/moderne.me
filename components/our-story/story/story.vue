<template lang="pug">
.story
  .container
    .story__wrapper
      .story__img
        img(src="images/illustrations/ourstory-monkey.png" srcset="images/illustrations/ourstory-monkey@2x.png 2x")
      h1.story__title The story behind the&nbsp;project
      .story__lead “Curiosity about life in all of its aspects, I think, is still the secret of great creative people.” — Leo Burnett said once.
      .story__text.story__text--1
        p Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus,.
      .story__images.story__images--1
        .story__images-item.story__images-item--1
          img(src="images/photos/story/story-1.jpg" srcset="images/photos/story/story-1@2x.jpg 2x")
      .story__text.story__text--2
        h2.story__title--h2 Vestibulum ru.
        p Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat.
      .story__text.story__text--3
        h2.story__title--h2 Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec.
        p Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.
        p Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus.Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est.
        p Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet.
      .story__text.story__text--4
        h2.story__title--h2 Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec.
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis.
      .story__images.story__images--2
        .story__images-item.story__images-item--2
        .story__images-item.story__images-item--2
      .story__text.story__text--5
        p Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus.
        p Cras lobortis molestie faucibus.Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.Curabitur lobortis id.
      section-quote(
        type="mini"
        userName="Mila Dayan"
        userPosition="a founder of Moderne"
        userPhoto="mila-dayan"
      )
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
