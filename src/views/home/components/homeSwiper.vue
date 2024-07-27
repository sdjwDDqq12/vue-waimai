<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
          <img :src="item.pic" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
</template>
  <script setup>
  import { reactive, onMounted } from "vue";
  import Swiper from "swiper"; // 引入库
  import "swiper/css/swiper.css"; // 引入样式文件 注意5和6版本的样式文件不一致
  const imgs = reactive([
    { pic: require("@/assets/pig-foot-rice.jpg") },
    { pic: require("@/assets/th.jpg") },
  ]);
  onMounted(() => {
    const mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: true, //自动滚动
      effect: "fade", //渐变切换
      autoplay: {
        delay: 3000, //3秒切换一次
        pauseOnMouseEnter: true, //鼠标移入 轮播暂停
      },
      pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    });
  });
  </script>
  <style lang="less">
  .swiper-container {
    width: 60%;
    .swiper-slide {
      width: 100% !important;
      img {
        width: 100%;
        height: 80%; 
        object-fit: cover;
      }
    }
  }
  </style>