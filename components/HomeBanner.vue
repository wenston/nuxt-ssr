<style lang="postcss" module="css">
.banner {
  height: 420px;
  width: 100%;
  position: relative;
  /* overflow: hidden; */
  & .wrapper {
    height: 100%;
    & .slide {
      height: 100%;
      background-color: #ccc;
      & .img {
        height: 100%;
        background-size: cover;
      }
    }
  }
}
</style>
<template>
  <!-- Slider main container -->
  <div :class="css.banner" class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper" :class="css.wrapper">
      <!-- Slides -->
      <div
        class="swiper-slide"
        :class="css.slide"
        v-for="item in list"
        :key="item"
      >
        <div
          :class="css.img"
          :style="{ backgroundImage: `url(${item})` }"
        ></div>
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>
<script>
import Swiper from 'swiper'
import SwiperCss from 'swiper/css/swiper.min.css'
export default {
  // props: {
  //   list: Array
  // },
  computed: {
    list: () => [
      '/img/banner/1.jpg',
      '/img/banner/2.jpg',
      '/img/banner/3.jpg',
      '/img/banner/4.jpg'
    ]
  },
  mounted() {
    this.$nextTick(() => {
      const s = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        autoplay: {
          delay: 5000
        }, //可选选项，自动滑动
        speed: 600,
        effect: 'coverflow',
        loop: true,
        autoResize: true,
        calculateHeight: true,
        paginationClickable: true,
        mode: 'horizontal',
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: true
        // }
      })
    })
  }
}
</script>
