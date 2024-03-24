<template>
  <div class="home">
    <el-scrollbar class="swiper-wrapper" 
      :height="carouselHeight"
      @scroll="handleScroll"
      >
      <div class="carousel">
        <el-carousel :height="carouselHeight" motion-blur>
          <el-carousel-item v-for="(item,index) in swiperList" :key="item">
            <img class="carouselBg" :src="$require_(item.path)" alt="">
            <div class="brief">
              <div class="brief1" v-show="index === 0">
                <div class="briefTitle">成为Clone AI合伙人</div>
                <!-- <div class="briefLine"></div> -->
              </div>
              <div class="brief2" v-show="index === 1">
                <div class="briefTitle">互动数字人</div>
                <!-- <div class="briefLine"></div> -->
              </div>
              <div class="brief3" v-show="index === 2">
                <div class="briefTitle">0元定制数字人</div>
                <!-- <div class="briefLine"></div> -->
              </div>
            </div>
            <div class="carouselBox">
              <div class="carouselBoxItem">
                <div class="icon">
                  <Expand />
                </div>
                <div>合伙人计划</div>
              </div>
              <div class="carouselBoxItem">
                <div class="icon">
                  <Expand />
                </div>
                <div>交互数字人</div>
              </div>
              <div class="carouselBoxItem">
                <div class="icon">
                  <Expand />
                </div>
                <div>数字人</div>
              </div>
              <div class="carouselBoxItem">
                <div class="icon">
                  <Expand />
                </div>
                <div>数字人直播</div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      
      <div class="swiper2">
       <!-- <img src="@/assets/homeBg2.png" alt=""> -->
       <el-image class="img" :src="bgImage1" fit="cover" />
       <div class="right">
         <div class="text1">Clone AI</div>
         <div class="text2">让你走进  <span class="text2a">未来</span> </div>
         <div class="text3">每一天，都有更多人因为AI解放想象力，放飞创造力</div>
       </div>
      </div>
      
      <div class="swiper3">
        <div class="bgImage">
          <el-image :src="bgImage3a" fit="cover"></el-image>
          <el-image :src="bgImage3b" fit="cover" ></el-image>
          <el-image :src="bgImage3c" fit="cover"></el-image>
        </div>
        <div class="text">
          <div class="text1">CHAT AI</div>
          <div class="text2">没错，是我，你的效率提升精灵</div>
          <div class="text3">你尽管提出问题，总有更专业的回答</div>
        </div>
        <el-button class="expBtn">立即体验</el-button>
      </div>
    </el-scrollbar>
     
  </div>
</template>

<script setup>
import {computed, ref } from 'vue'
import {Expand} from '@element-plus/icons-vue'
import bgImage1 from '@/assets/homeBg2.png'
import bgImage3a from '@/assets/homeBg3a.png'
import bgImage3b from '@/assets/homeBg3b.png'
import bgImage3c from '@/assets/homeBg3c.png'

const isMobile = ref(window.innerWidth < 760)

const swiperList = ref([
  {
    id:1,
    path:'swiper1.png',
    title:'成为Clone AI合伙人',
    text:""
  },
  {
    id:2,
    path:'swiper2.png',
  },
  {
    id:3,
    path:'swiper3.jpg',
  },
])
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
.carousel{
  position: relative;
  .carouselBg {
    width: 100%;
    height: 100%;
  }
  .brief {
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translate(-50%);
    .brief1 {
      .briefTitle {
        font-size: 36px;
        font-weight: 700;
        color: #fff;
      }
      .briefLine {
        margin-top: 20px;
        margin-left: 40px;
        margin-bottom: 30px;
        width: 250px;
        border-bottom: 1px solid #354355;
      }
    }
    .brief2 {
      .briefTitle {
        font-size: 36px;
        font-weight: 700;
        color: #2A2F33;
      }
      .briefLine {
        margin-top: 20px;
        margin-left: 40px;
        margin-bottom: 30px;
        width: 250px;
        border-bottom: 1px solid #354355;
      }
    }
    .brief3 {
      .briefTitle {
        font-size: 36px;
        font-weight: 700;
        color: #2A2F33;
      }
      .briefLine {
        margin-top: 20px;
        margin-left: 40px;
        margin-bottom: 30px;
        width: 250px;
        border-bottom: 1px solid #354355;
      }
    }
  }
  .carouselBox {
    position: absolute;
    width: 80vw;
    left: 10vw;
    bottom: 16vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1vw;
    flex-wrap: wrap;
    .carouselBoxItem {
      background-color: #343439;
      height: 90px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 12px;
      flex: 1;
      cursor: pointer;
      .icon {
        width: 36px;
        height: 36px;
      }
    }
    .carouselBoxItem:hover {
      color:#0695cd ;
    }
  }
}

.swiper2 {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(3, 0, 31);
  .img {
    width: 48%;
    height: 86%;
  }
  .right {
    .text1 {
      color: #0695cd;
      font-size: 52px;
    }
    .text2 {
      color: #fff;
      font-size: 28px;
      margin-top: 20px;
      .text2a{
        color: #0695cd;
      }
    }
    .text3 {
      margin-top: 20px;
      color: #fff;
      font-size: 22px;
    }
  }
}

.swiper3 {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .bgImage {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    .el-image {
      width: 18vw;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    .text1 {
      color: rgb(17, 187, 189);
      font-size: 100px;
    }
    .text2{
      margin-top: 20px;
    }
    .text3{
      margin-top: 20px;
    }
  }
  .expBtn{
    margin-top: 100px;
    width: 200px;
    height: 50px;
    line-height: 50px;
    border-radius: 30px;
    background-color: #0695cd;
    text-align: center;
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    border: none;
  }
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