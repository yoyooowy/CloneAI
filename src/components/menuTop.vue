<template>
  <div class="menu">
    <!-- 大于760完全变成顶端菜单 小于760隐藏logo变成侧边菜单 小于325隐藏右边的信息 -->
    <el-menu
      v-if="!isMobile"
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      background-color="#000000"
      text-color="#fff"
      active-text-color="#fff"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
      <!-- <img
        style="width: 100px"
        src="/images/element-plus-logo.svg"
        alt="Element logo"
      /> -->
      <span class="titleL">Clone</span>
      <span class="titleR">AI</span>
      </el-menu-item>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">数字人</el-menu-item>
      <el-menu-item index="3">交互数字人</el-menu-item>
      <el-sub-menu index="4">
        <template #title>关于我们</template>
        <el-menu-item index="2-1">关于我们</el-menu-item>
        <el-menu-item index="2-2">关于 Chat AI</el-menu-item>
        <el-menu-item index="2-3">技术支持</el-menu-item>
        <el-menu-item index="2-3">帮助中心</el-menu-item>
      </el-sub-menu>
    </el-menu>

    <el-menu
      v-if="isMobile"
      :default-active="activeIndex"
      class="el-menu"
      mode="vertical"
      :collapse="isCollapse"
      background-color="#000000"
      text-color="#fff"
      active-text-color="#fff"
      @select="handleSelect"
      :style="{display: isCollapse ? 'none' : ''}"
    >
      <el-menu-item index="0">
      <!-- <img
        style="width: 100px"
        src="/images/element-plus-logo.svg"
        alt="Element logo"
      /> -->
      <span class="titleL">Clone</span>
      <span class="titleR">AI</span>
      </el-menu-item>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">数字人</el-menu-item>
      <el-menu-item index="3">交互数字人</el-menu-item>
      <el-sub-menu index="4">
        <template #title>关于我们</template>
        <el-menu-item index="2-1">关于我们</el-menu-item>
        <el-menu-item index="2-2">关于 Chat AI</el-menu-item>
        <el-menu-item index="2-3">技术支持</el-menu-item>
        <el-menu-item index="2-3">帮助中心</el-menu-item>
      </el-sub-menu>
    </el-menu>

       
   <div class="openBtn" v-if="isMobile && isCollapse" @click="openMenu">展开</div>

    <div class="flex-grow" />

    <div class="menu-right">
      <div class="score">积分 0</div>
      <img class="avatar" src="@/assets/defaultAvatar.png" alt="">
      <div class="account">18819772723</div>
    </div>

  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted,defineExpose} from 'vue'
const activeIndex = ref('1')

const isMobile = ref(window.innerWidth < 760)
const isCollapse = ref(window.innerWidth < 760);
const menuMode = ref('horizontal') //horizontal vertical

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const openMenu = () => {
  console.log('openMenu');
  isCollapse.value = false;
}
const closeMenu = () => {
  console.log('close!!');
  isCollapse.value = true;
}

const handleResize = () => {
  isMobile.value = window.innerWidth < 760
  isCollapse.value = window.innerWidth < 760;
}
onMounted(() => {
  window.addEventListener('resize', handleResize);
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
})

defineExpose({closeMenu})
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100vw;
  height: 48px;
  background-color: #000000;
  .el-menu {
    height: 48px;
    border: none;
  }
  .flex-grow {
    flex: 1;
  }
  // .openBtn {
  //   position: relative;
  //   top: 10px;
  //   left: 20px;
  //   z-index: 99;
  // }
}
.titleL {
  color: #fff;
  font-size: 20px;
  margin-right: 10px;
  left: calc;
}
.titleR {
  color: #0695cd;
  font-size: 20px;
  font-weight: 700;
  margin-right: 24px;
}
.menu-right {
  color: #fff;
  display: flex;
  align-items: center;
   font-size: 12px;
  .score{
   margin-right: 20px;
    padding: 4px 16px ;
    border-radius: 24px;
    background-color: #14baba;
  }
  .avatar {
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 6px;
  }
  .account {
    margin-right: 10px;
  }
}
.flex-grow {
  flex-grow: 1;
}

@media screen and (max-width: 760px) {
  .menu {
    .el-menu {
      padding-left: 0;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      overflow: hidden;
    }
    
  }
  .el-menu-collapse {
    // display: none;
  }
}
</style>