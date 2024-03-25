<template>
  <div class="interact">
    <div class="picture">
      <el-image class="pic1" :src="pic1" mode="cover"></el-image>
      <el-image class="pic3" :src="pic3" mode="cover"></el-image>
      <el-image class="pic2" :src="pic2" mode="cover"></el-image>
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
</style>