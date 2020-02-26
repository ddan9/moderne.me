<template lang="pug">
section
  section(v-for="(slice, index) in slices" :key="'slice-' + index")
    template(v-if="slice.slice_type === 'text'")
      //| {{ slice.items[0].text_content }}
      //prismic-rich-text(:field="slice.primary.text")
      //TextSlice(:slice="slice")
      div(v-for="(item, index) in slice.items[0].text_content" :key="index")
        p(v-if="item.type === 'paragraph'" v-html="item.text")
        h2(v-else-if="item.type === 'heading2'" v-html="item.text")
        div.video(v-else-if="item.type === 'embed'" v-html="item.oembed.html")
          //| {{ item.oembed.embed_url }}
          //| {{ this._.capitalize('FRED') }}
          //| {{ _.trimStart('https://www.youtube.com/watch?v=1111', 'https://www.youtube.com/watch?v=') }}
          //iframe(v-if="item.oembed.provider_name === 'YouTube'" width="754" height="425" :src="'https://www.youtube.com/embed/'+_.trimStart(item.oembed.embed_url, 'https://www.youtube.com/watch?v=')+'?feature=oembed'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
// Imports for all slices
const TextSlice = () => import('@/components/insight-of-the-day/page/slices/types/textSlice.vue')
export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    TextSlice
  }
}
</script>
