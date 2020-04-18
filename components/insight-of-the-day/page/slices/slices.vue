<template lang="pug">
section
  //| {{ slices }}
  section(v-for="(slice, index) in slices" :key="'slice-' + index")
    //| {{slice}}
    template(v-if="slice.slice_type === 'text'")
      //TextSlice(:slice="slice")
      //prismic-rich-text(:field="slice.slice_type")
      //| {{ slice.items[0].text_content }}
      //TextSlice(:slice="slice")
      div(v-for="(item, index) in slice.items" :key="index")
        //div(v-for="(el, i) in item.text_content" :key="i")
        prismic-rich-text(:field="item.text_content")
        //p(v-if="item.type === 'paragraph'" v-html="item.text")
        //p(v-if="item.type === 'paragraph'")
          | {{item}}
        //TextSlice(v-if="item.type === 'paragraph'" :slice="item")
        //h1(v-else-if="item.type === 'heading1'" v-html="item.text")
        //h2(v-else-if="item.type === 'heading2'" v-html="item.text")
        //h3(v-else-if="item.type === 'heading3'" v-html="item.text")
        //img(v-else-if="item.type === 'image'" :src="item.url")
        //div.video(v-else-if="item.type === 'embed'" v-html="item.oembed.html")
        //div.video(v-else-if="item.type === 'embed'" v-html="item.oembed.html")
          //| {{item.oembed.html}}
          //vue-plyr
            iframe(
              v-if="item.oembed.provider_name === 'Vimeo'"
              //:src='item.oembed.embed_url'
              allowfullscreen=''
              allowtransparency=''
              allow='autoplay')
            //div(data-plyr-provider="youtube" :data-plyr-embed-id="item.oembed.embed_url.slice(32)")
          //| {{ item.oembed.embed_url }}
          //| {{ this._.capitalize('FRED') }}
          //| {{ _.trimStart('https://www.youtube.com/watch?v=1111', 'https://www.youtube.com/watch?v=') }}
          //iframe(v-if="item.oembed.provider_name === 'YouTube'" width="754" height="425" :src="'https://www.youtube.com/embed/'+_.trimStart(item.oembed.embed_url, 'https://www.youtube.com/watch?v=')+'?feature=oembed'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    template(v-else-if="slice.slice_type === 'ideas_based_on_the_insight'")
      IdeasBased(
        :ideas="slice.items"
      )
</template>

<script>
// Imports for all slices
import IdeasBased from './types/ideasBased'
const TextSlice = () => import('@/components/insight-of-the-day/page/slices/types/textSlice.vue')
export default {
  name: 'SlicesBlock',
  components: {
    IdeasBased,
    TextSlice
  },
  // eslint-disable-next-line
  props: ['slices']
}
</script>

<style lang="scss">
  .video {
    display: flex;
    justify-content: center;

    > iframe {
      width: 754px;
      height: 425px;

      @include mobile {
        width: vmin(296);
        height: vmin(167);
      }
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 35px 0;
  }
</style>
