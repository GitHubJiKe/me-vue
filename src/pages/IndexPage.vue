<template>
  <div class="me-index">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="pic in pictures" :key="pic">
        <div class="image" :style="`background-image:url(${pic});`"></div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>
<script>
import js from '../assets/js.png'
import html from '../assets/html.jpeg'
import css from '../assets/css.jpeg'
import react from '../assets/react.jpeg'
import vue from '@/assets/vue.jpeg'
export default {
  name: 'IndexPage',
  data () {
    return {
      swiperOption: {
        autoplay: true,
        speed: 300,
        autoHeight: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      pictures: [
        js,
        html,
        css,
        react,
        vue
      ]
    }
  }
}
</script>
<style scoped>
  .me-index{
    height: 100%;
    width: 100%;
    padding: 10px 10px;
  }
  .image{
    width:100%;
    height:550px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
