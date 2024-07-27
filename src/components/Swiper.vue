<template>
                        <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">            
                            <img 
                            class="swiper-slide" 
                            src="https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440">
                            </div>
                        <div class="swiper-slide">       
                            <img 
                            class="swiper-slide" 
                            src="https://tse1-mm.cn.bing.net/th/id/OIP-C.VSh696qjBfO3tBI64j6g6QHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7">
                            </div>
                    </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-pagination"></div>
                        <div class="autoplay-progress">
                            <svg viewBox="0 0 48 48">
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span></span>
                        </div>
                    </div>   
</template>
<script>
    import { Swiper } from 'swiper'
    import 'swiper/css'
    export default {
        setup() {
                        //初始化挂载轮播图
                        const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });
        }
    }
</script>
<style scoped>
    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .autoplay-progress {
      position: absolute;
      right: 16px;
      bottom: 16px;
      z-index: 10;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: var(--swiper-theme-color);
    }

    .autoplay-progress svg {
      --progress: 0;
      position: absolute;
      left: 0;
      top: 0px;
      z-index: 10;
      width: 100%;
      height: 100%;
      stroke-width: 4px;
      stroke: var(--swiper-theme-color);
      fill: none;
      stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
      stroke-dasharray: 125.6;
      transform: rotate(-90deg);
    }
</style>