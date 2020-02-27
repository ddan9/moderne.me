<template>
  <div>
    <section-nav :path="$route.name" />
    <nuxt />
    <section-footer :path="$route.name" />
  </div>
</template>

<script>
import nav from '@/components/global/nav/nav'
import footer from '@/components/global/footer/footer'

export default {
  components: {
    'section-nav': nav,
    'section-footer': footer
  }
}
</script>

<style lang="scss">
  html {
    font-family: $helvetica, Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background: #F3EAE5;
    overflow-x: hidden;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    margin: auto;

    @include mobile {
      max-width: 100%;
      padding: 0 vmin(12);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: $mabry, sans-serif;
  }

  p {
    font-size: 21px;
    line-height: 32px;
    color: #080809;
    letter-spacing: 0;

    @include mobile {
      font-size: vmin(17);
      line-height: vmin(23);
    }

    &:not(:Last-child) {
      margin: 0 0 16px;

      @include mobile {
        margin: 0 0 vmin(12);
      }
    }
  }
  .page-enter-active, .page-leave-active {
    transition: all .5s ease;
  }
  .page-enter, .page-leave-active {
    opacity: 0;
    transform: translateY(20px);
  }

  img {
    pointer-events: none;
  }
</style>
