<template>
  <div class="home">
    <el-scrollbar class="swiper-wrapper" 
      :height="carouselHeight"
      @scroll="handleScroll"
      >
      <div>
        <el-carousel :height="carouselHeight" motion-blur>
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      
      <div class="swiper-slide" :style="{height:carouselHeight,backgroundColor:'pink'}">2</div>
      <div class="swiper-slide" :style="{height:carouselHeight}">3</div>
    </el-scrollbar>
     
  </div>
</template>

<script setup>
import {computed, ref } from 'vue'
// 监听滚动事件
const handleScroll = (event) => {
  // console.log(event,'滚动距离');
  // const scrollDistance = event.scrollTop; // 获取滚动距离

  // // 判断滚动距离
  // if (scrollDistance >= 10) {
  //   // 触发页面整体滚动，比如通过 scrollTo 方法滚动到下一个页面
  //   console.log(document.documentElement.scrollTop,'scrollTop');
  //   document.documentElement.scrollTop = 500
  // }
}

// 计算走马灯的高度
const carouselHeight = computed(() => {
  return `calc(100vh - 48px)`; // 减去导航栏高度
});

</script>

<style lang="scss" scoped>
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>