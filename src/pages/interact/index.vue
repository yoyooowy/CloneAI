<template>
  <div class="interact">
    <div class="picture">
      <el-image class="pic1" :src="pic1" mode="cover"></el-image>
      <el-image class="pic3" :src="pic3" mode="cover"></el-image>
      <el-image class="pic2" :src="pic2" mode="cover"></el-image>
    </div>
    <div class="center">
      <div class="title">
        智能 <span class="blue">数字人</span>全息舱
      </div>
      <div class="subtitle">专业的AI数字人平台 定制数字人专属IP 创造无限商业价值</div>
    </div>
    
  </div>  
</template>

<script setup>
 import pic1 from "@/assets/interactBg1.jpeg"
 import pic2 from "@/assets/interactBg2.png"
 import pic3 from "@/assets/interactBg3.png"
</script>

<style lang="scss" scoped>
.interact {
  position: relative;
  height: 100vh;
  
}
.picture {
  
  .pic1 {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 30vw;
  }
  .pic3 {
    position: absolute;
    right: 0;
    top: 0;
    width: 30vw;
  }
  .pic2 {
    position: absolute;
    left: 5vw;
    bottom: 10vh;
    width: 30vw;
  }
}
.center{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    color: #fff;
    font-size: 120px;
    white-space: nowrap;
  }
  .subtitle {
    color: #fff;
    font-size: 38px;
    white-space: nowrap;
  }
}

.blue {
  color: #0FF7F0;
}
</style>